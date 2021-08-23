import { isPropertyAssignment, Node } from 'typescript';
import { Project } from './Project';
import { isDefaultValuesDeclaration } from './utils/is';
import { printNode } from './utils/print';
import { DefaultValueCrawlResult } from './type';

export class DefaultValueCrawler {
    constructor(private project: Project) {}

    crawl(componentName: string, filePath: string) {
        const result: DefaultValueCrawlResult = {};

        const sourceFile = this.project.getSourceFile(filePath);
        if (!sourceFile) {
            console.error(
                `Was not able to find file for a component: ${componentName}`,
            );
            return result;
        }

        sourceFile.nodes.forEach(node => {
            if (isDefaultValuesDeclaration(node)) {
                // @ts-ignore
                const literal = node.expression.right.properties as Node[];
                literal.forEach(assignment => {
                    if (isPropertyAssignment(assignment)) {
                        // @ts-ignore
                        const propertyName = assignment.name.escapedText;

                        try {
                            result[propertyName] = printNode(
                                assignment.initializer,
                            );
                        } catch (e) {
                            console.error(
                                `Was not able to print the property initializer for ${componentName}.${propertyName}`,
                            );
                        }
                    }
                });
            }
        });

        return result;
    }
}
