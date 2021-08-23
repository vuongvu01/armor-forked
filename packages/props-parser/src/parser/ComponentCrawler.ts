import { dirname, join } from 'path';
import debug from 'debug';

import { SourceFile } from './SourceFile';
import {
    isAsteriskExportDeclaration,
    isComponentDeclaration,
} from './utils/is';
import { Project } from './Project';

const d = debug('ComponentCrawler');

type ComponentSearchResult = {
    name: string;
    absolutePath: string;
    typingsName: string;
    typingsAbsolutePath: string;
}[];

export class ComponentCrawler {
    constructor(private project: Project) {}

    public crawl() {
        const result: ComponentSearchResult = [];
        this.findInDepth(result, this.project.getRootSourceFile());

        return result;
    }

    private findInDepth(
        result: ComponentSearchResult,
        file: SourceFile,
        depth = 0,
    ) {
        if (depth > 10) {
            return;
        }

        file.nodes.forEach(node => {
            if (isAsteriskExportDeclaration(node)) {
                // @ts-ignore
                const module = node.moduleSpecifier.text;
                const absolutePath = file.getResolvedModuleAbsolutePath(module);

                d(`Going into ${absolutePath}`);

                const sourceFile = this.project.getSourceFile(absolutePath);

                if (!sourceFile) {
                    console.error(`Cannot find file ${absolutePath}`);
                } else {
                    this.findInDepth(result, sourceFile, depth + 1);
                }
            } else {
                if (isComponentDeclaration(node)) {
                    // @ts-ignore
                    const componentName = node.declarationList.declarations[0]
                        .name.escapedText as string;

                    result.push({
                        name: componentName,
                        absolutePath: file.absolutePath,
                        typingsName: `${componentName}PropsType`, // todo: take it from the source code imports, don't speculate
                        typingsAbsolutePath: join(
                            dirname(file.absolutePath),
                            'type.ts',
                        ), // todo: take it from the source code imports, don't speculate
                    });
                }
            }
        });
    }
}
