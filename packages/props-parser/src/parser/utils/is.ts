import {
    EntityName,
    isExportDeclaration,
    isExpressionStatement,
    isJSDocDeprecatedTag,
    isJSDocUnknownTag,
    isObjectLiteralExpression,
    isTypeAliasDeclaration,
    isTypeReferenceNode,
    isVariableStatement,
    Node,
    Statement,
    TypeNode,
    TypeReferenceNode,
} from 'typescript';
import { PROPERTY_PARSER_DOC_TAG_COMPONENT } from '../constants';

export const isComponentPropsType = (node: TypeNode, componentName: string) =>
    isTypeAliasDeclaration(node) &&
    node.name.escapedText === `${componentName}PropsType`;

export const isPartialTypeNode = (node: Node): node is TypeReferenceNode =>
    // @ts-ignore
    isTypeReferenceNode(node) && node.typeName.escapedText === 'Partial';

export const isJSDocTag = (node: Node) =>
    isJSDocUnknownTag(node) || isJSDocDeprecatedTag(node);

export const isAsteriskExportDeclaration = (node: TypeNode) =>
    isExportDeclaration(node) && !node.exportClause;

export const isComponentDeclaration = (node: Node) => {
    if (!isVariableStatement(node)) {
        return false;
    }

    // @ts-ignore
    const doc = node.jsDoc;
    if (!doc) {
        return false;
    }

    const { tags } = doc[0];
    if (!tags) {
        return false;
    }

    const componentSignTag = tags.find(
        (tag: Statement) =>
            // @ts-ignore
            tag.tagName.escapedText === PROPERTY_PARSER_DOC_TAG_COMPONENT,
    );

    return !!componentSignTag;
};

export const isDefaultValuesDeclaration = (node: Node) => {
    if (isExpressionStatement(node)) {
        return (
            // @ts-ignore
            isObjectLiteralExpression(node.expression.right) &&
            // @ts-ignore
            node.expression.left.name.escapedText === 'defaultProps'
        );
    }

    return false;
};

export const extractText = (ident: EntityName) =>
    // @ts-ignore
    ident.escapedText as string;
