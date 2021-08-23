import {
    isPropertySignature,
    PropertySignature,
    SyntaxKind,
    TypeLiteralNode,
    TypeNode,
} from 'typescript';
import {
    DefaultValueCrawlResult,
    PropertyDeclarationType,
    PropertyDeclarationTypeType,
} from './type';
import {
    PROPERTY_PARSER_DEFAULT_GROUP,
    PROPERTY_PARSER_DOC_TAG_GROUP,
} from './constants';
import { printNode } from './utils/print';
import { decodeJSDoc } from './utils/decodeJSDoc';

export class DocumentationBuilder {
    public generate(
        node: TypeLiteralNode,
        componentName: string,
        defaultValues: DefaultValueCrawlResult,
    ) {
        const result: PropertyDeclarationType[] = [];

        node.members.forEach(property => {
            if (isPropertySignature(property)) {
                const documentedProperty = this.processProperty(property);
                if (documentedProperty.doc?.description) {
                    // eslint-disable-next-line no-param-reassign
                    documentedProperty.doc.description = documentedProperty.doc.description.replace(
                        /#COMPONENT_NAME#/g,
                        componentName,
                    );
                }

                const { name } = documentedProperty;
                if (name in defaultValues) {
                    documentedProperty.defaultValue = defaultValues[name];
                }

                result.push(documentedProperty);
            }
        });

        return result;
    }

    private processProperty(property: PropertySignature) {
        const propertyDoc = decodeJSDoc(property);

        let group = PROPERTY_PARSER_DEFAULT_GROUP;
        if (
            propertyDoc &&
            propertyDoc.tags &&
            PROPERTY_PARSER_DOC_TAG_GROUP in propertyDoc.tags
        ) {
            group = propertyDoc.tags[PROPERTY_PARSER_DOC_TAG_GROUP];
        }

        return {
            // @ts-ignore
            name: property.name.escapedText,
            // @ts-ignore
            optional: property.questionToken !== undefined,
            type: this.processPropertyType(property.type!),
            group,
            doc: propertyDoc,
        } as PropertyDeclarationType;
    }

    private processPropertyType(node: TypeNode): PropertyDeclarationTypeType {
        return {
            source: printNode(node),
            boolean: node.kind === SyntaxKind.BooleanKeyword,
            string: node.kind === SyntaxKind.StringKeyword,
            number: node.kind === SyntaxKind.NumberKeyword,
            typeReference: node.kind === SyntaxKind.TypeReference,
        };
    }
}
