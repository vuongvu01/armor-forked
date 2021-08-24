import debug from 'debug';
import { writeFile } from 'fs/promises';
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

const d = debug('run');

const standardTypes: string[] = [
    'ScalarType',
    'WidthAttributesType',
    'HeightAttributesType',
    'SizeAttributesType',
    'MarginAttributesType',
    'PaddingAttributesType',
    'ColorAttributesType',
    'TextAlignmentAttributesType',
    'DisplayAttributesType',
    'ComponentStylePropsType',
];

@Implements<Command>()
export class Run implements CommandInstance {
    static command = 'run [component]';
    static alias = 'r';
    static description = 'Run';
    static options: Command['options'] = [
        ['-p, --project-folder <path>', 'Project folder'],
        ['-o, --output <path>', 'Output file'],
    ];

    constructor(
        private application: Application,
        private args: CommandArgumentsType,
        private options: CommandArgumentsType,
    ) {}

    async execute() {
        const projectFolder = this.options.projectFolder ?? getProjectFolder();
        const output = this.options.output ?? getOutputFolder();

        if (!projectFolder) {
            console.error(
                'No project folder specified. Please define either a --project-folder option or a ARMORPP_PROJECT_FOLDER env variable.',
            );
            return;
        }

        d('Project folder:', projectFolder);

        const { component } = this.args;

        const result: ComponentListType = [];

        const program = new Project(projectFolder);
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

                        result.push({
                            name: componentName,
                            properties: formattedData,
                        });
                    }
                },
            );
        }

        const data = JSON.stringify({
            components: result,
        });

        if (output) {
            await writeFile(output, new Uint8Array(Buffer.from(data)));
        } else {
            // eslint-disable-next-line no-console
            console.log(data);
        }

        d('Executed successfully.');
    }
}