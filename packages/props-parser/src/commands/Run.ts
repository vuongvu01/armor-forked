import debug from 'debug';
import { writeFile, stat } from 'fs/promises';
import { Application } from '../lib/application';
import {
    CommandInstance,
    Command,
    Implements,
    CommandArgumentsType,
} from './type';
import { getProjectFolder, getOutputFolder } from '../lib/util';
import { TypeDeclarationCrawler } from '../parser/TypeDeclarationCrawler';
import { Project } from '../parser/Project';
import { Flattener } from '../parser/Flattener';
import { DocumentationBuilder } from '../parser/DocumentationBuilder';
import { ComponentListType } from '../parser/type';
import { ComponentCrawler } from '../parser/ComponentCrawler';
import { DefaultValueCrawler } from '../parser/DefaultValueCrawler';
import { PROJECT_LIST } from '../parser/constants';

const d = debug('run');

const standardTypes: string[] = [
    'ScalarType',
    'WidthPropsType',
    'HeightPropsType',
    'SizePropsType',
    'MarginPropsType',
    'PaddingPropsType',
    'ColorPropsType',
    'TextAlignmentPropsType',
    'DisplayPropsType',
    'ComponentStylePropsType',
    'ComponentBehaviourOpenStateType',
    'ComponentBehaviourOverlayType',
    'ComponentBehaviourPortalType',
    'ComponentBehaviourModalDialogType',
    'ComponentBehaviourCustomTagType',
    'ComponentBehaviourLinkType',
    'ComponentBehaviourCustomTagPropertyType',
    'PopperPropsType',

    // dirty hacks
    'DatePickerEffectiveCommonPropsType',
    'DatePickerEffectiveGenericPropsType',
];

@Implements<Command>()
export class Run implements CommandInstance {
    static command = 'run [component]';
    static alias = 'r';
    static description = 'Run';
    static options: Command['options'] = [
        ['-p, --project-folder <path>', 'Project folder'],
        ['-o, --output <path>', 'Output file'],
        ['-s, --stats', 'Output stats'],
    ];

    constructor(
        private application: Application,
        private args: CommandArgumentsType,
        private options: CommandArgumentsType,
    ) {}

    async execute() {
        d('Starting');

        const {
            stats,
            projectFolder: projectFolderOption,
            output: outputOption,
        } = this.options;

        const projectFolder = projectFolderOption ?? getProjectFolder();
        const output = outputOption ?? getOutputFolder();

        if (!projectFolder) {
            console.error(
                'No project folder specified. Please define either a --project-folder option or a ARMORPP_PROJECT_FOLDER env variable.',
            );
            return;
        }

        try {
            await stat(projectFolder);
        } catch (error) {
            // @ts-ignore
            if (error.code === 'ENOENT') {
                console.error(`No such file or directory: ${projectFolder}`);
                return;
            }
        }

        d('Project folder:', projectFolder);

        const { component } = this.args;
        const data: { [key: string]: ComponentListType } = {};
        PROJECT_LIST.forEach(({ path, dataObjectName }) => {
            const program = new Project(projectFolder, path);
            const componentCrawler = new ComponentCrawler(program);
            const defaultValueCrawler = new DefaultValueCrawler(program);
            const typeDeclarationCrawler = new TypeDeclarationCrawler(program);
            const componentList = componentCrawler.crawl();

            if (componentList.length) {
                componentList.forEach(
                    ({
                        name: componentName,
                        typingsAbsolutePath,
                        absolutePath,
                    }) => {
                        if (component && component !== componentName) {
                            return;
                        }

                        const expandedData = typeDeclarationCrawler.crawl(
                            componentName,
                            typingsAbsolutePath,
                            [
                                `${componentName}EffectivePropsType`,
                                ...standardTypes,
                            ],
                        );

                        if (expandedData) {
                            const flattener = new Flattener(program);
                            const flatData = flattener.flatten(expandedData);

                            const builder = new DocumentationBuilder();

                            const defaultValues = defaultValueCrawler.crawl(
                                componentName,
                                absolutePath,
                            );

                            const formattedData = builder.generate(
                                flatData,
                                componentName,
                                defaultValues,
                            );

                            if (!data[dataObjectName]) {
                                data[dataObjectName] = [];
                            }

                            data[dataObjectName].push({
                                name: componentName,
                                properties: formattedData,
                            });
                        }
                    },
                );
            }
        });

        const printSeparator = () => {
            console.error(
                '\n<<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>\n',
            );
        };

        if (stats) {
            printSeparator();
            const projects = Object.keys(data);
            let length = 0;
            projects.forEach((project) => {
                data[project].forEach(({ name, properties }) => {
                    console.error(
                        `    ➡️  ${name} (props: ${properties.length})`,
                    );
                    length += 1;
                });
            });
            console.error(` ✅ Found ${length} components. \n`);
            printSeparator();
        }

        const stringifiedData = JSON.stringify({ ...data });

        if (output) {
            await writeFile(
                output,
                new Uint8Array(Buffer.from(stringifiedData)),
            );
        } else {
            console.log(data);
        }

        d('Executed successfully.');
    }
}
