import {
    isArrayTypeNode,
    isIndexedAccessTypeNode,
    isTypeAliasDeclaration,
    isTypeReferenceNode,
    isTypeLiteralNode,
    isIntersectionTypeNode,
    isUnionTypeNode,
    isPropertySignature,
    ArrayTypeNode,
    factory,
    TypeNode,
    IndexedAccessTypeNode,
    TypeReferenceNode,
    TypeAliasDeclaration,
    TypeLiteralNode,
    TypeElement,
    IntersectionTypeNode,
    UnionTypeNode,
} from 'typescript';
import debug from 'debug';
import { Project } from './Project';
import {
    extractText,
    isComponentPropsType,
    isPartialTypeNode,
} from './utils/is';
import { MAX_TRAVERSE_DEPTH } from './constants';
import { decodeJSDoc } from './utils/decodeJSDoc';
import { SourceFile } from './SourceFile';

type AllowedTypesType = string[];
type ContextType = {
    allowedTypes: AllowedTypesType;
    visitedTypes: string[];
    depthLevel: number;
    file: SourceFile;
};

type ResolveResultType = {
    node: TypeNode | null;
    ctx: ContextType;
};

const d = debug('TypeDeclarationCrawler');

export class TypeDeclarationCrawler {
    constructor(private project: Project) {}

    public crawl(
        componentName: string,
        filePath: string,
        allowedTypes: AllowedTypesType = [],
    ) {
        const result: TypeNode | null = null;

        const sourceFile = this.project.getSourceFile(filePath);
        if (!sourceFile) {
            console.error(
                `Was not able to find file for a component: ${componentName}`,
            );
            return result;
        }

        let propTypeNode: TypeNode | null = null;
        sourceFile.nodes.forEach(node => {
            if (isComponentPropsType(node, componentName)) {
                propTypeNode = node;
            }
        });

        if (!propTypeNode) {
            console.error(
                `Was not able to find file a proptype node for a component: ${componentName}`,
            );
            return propTypeNode;
        }

        if (allowedTypes.length && propTypeNode) {
            return this.traverse(propTypeNode, {
                allowedTypes,
                visitedTypes: [],
                depthLevel: 0,
                file: sourceFile,
            });
        }

        return result;
    }

    private traverse(node: TypeNode, ctx: ContextType): TypeNode {
        const { depthLevel } = ctx;

        if (depthLevel > MAX_TRAVERSE_DEPTH) {
            return node;
        }

        if (isArrayTypeNode(node)) {
            return this.traverseArrayType(node, ctx);
        }

        if (isIndexedAccessTypeNode(node)) {
            return this.traverseIndexedAccessType(node, ctx);
        }

        if (isPartialTypeNode(node)) {
            return this.traversePartialType(node, ctx);
        }

        if (isTypeAliasDeclaration(node)) {
            return this.traverseTypeAlias(node, ctx);
        }

        if (isTypeReferenceNode(node)) {
            return this.traverseTypeReference(node, ctx);
        }

        if (isTypeLiteralNode(node)) {
            return this.traverseTypeLiteral(node, ctx);
        }

        if (isIntersectionTypeNode(node)) {
            return this.traverseIntersectionType(node, ctx);
        }

        if (isUnionTypeNode(node)) {
            return this.traverseUnionType(node, ctx);
        }

        return node;
    }

    private traverseTypeReference(node: TypeReferenceNode, ctx: ContextType) {
        const { allowedTypes } = ctx;

        const typeName = extractText(node.typeName);

        if (!allowedTypes.includes(typeName)) {
            return node;
        }

        const resolvedResult = this.resolveType(
            typeName,
            this.dive(ctx, undefined),
        );
        if (resolvedResult.node) {
            return this.traverse(
                resolvedResult.node,
                this.dive(resolvedResult.ctx),
            );
        }

        d(`Reference not found: ${typeName}`);

        return node;
    }

    private traverseTypeLiteral(node: TypeLiteralNode, ctx: ContextType) {
        const { members } = node;

        const result: TypeElement[] = [];

        for (let i = 0; i < members.length; i += 1) {
            const member = members[i];

            if (isPropertySignature(member)) {
                if (member.type) {
                    const doc = decodeJSDoc(member);
                    const updatedMember = factory.updatePropertySignature(
                        member,
                        member.modifiers,
                        member.name,
                        member.questionToken,
                        this.traverse(
                            member.type,
                            this.dive(ctx, undefined, doc.adExpand),
                        ),
                    );

                    // jsDoc falls out after being processed through factory.updatePropertySignature(). Putting it in place again
                    // @ts-ignore
                    updatedMember.jsDoc = member.jsDoc;

                    result.push(updatedMember);
                }
            } else {
                result.push(member);
            }
        }

        return factory.createTypeLiteralNode(result);
    }

    private traverseIndexedAccessType(
        node: IndexedAccessTypeNode,
        ctx: ContextType,
    ) {
        const { objectType, indexType } = node;

        const unionOrIntersection =
            isUnionTypeNode(objectType) || isIntersectionTypeNode(objectType);

        const processedObjectType = this.traverse(objectType, ctx);

        return factory.createIndexedAccessTypeNode(
            unionOrIntersection
                ? factory.createParenthesizedType(processedObjectType)
                : processedObjectType,
            indexType,
        );
    }

    private traverseArrayType(node: ArrayTypeNode, ctx: ContextType) {
        const { elementType } = node;

        const processedElementType = this.traverse(elementType, ctx);

        const unionOrIntersection =
            isUnionTypeNode(processedElementType) ||
            isIntersectionTypeNode(processedElementType);

        return factory.createArrayTypeNode(
            unionOrIntersection
                ? factory.createParenthesizedType(processedElementType)
                : processedElementType,
        );
    }

    private traversePartialType(node: TypeReferenceNode, ctx: ContextType) {
        const { typeArguments } = node;

        if (typeArguments) {
            const result: TypeNode[] = [];
            for (let i = 0; i < typeArguments.length; i += 1) {
                result.push(this.traverse(typeArguments[i], this.dive(ctx)));
            }

            return factory.updateTypeReferenceNode(
                node,
                node.typeName,
                factory.createNodeArray(result),
            );
        }

        return node;
    }

    private traverseIntersectionType(
        node: IntersectionTypeNode,
        ctx: ContextType,
    ) {
        const members = node.types;

        const result: TypeNode[] = [];
        for (let i = 0; i < members.length; i += 1) {
            result.push(this.traverse(members[i], this.dive(ctx)));
        }

        return factory.updateIntersectionTypeNode(
            node,
            factory.createNodeArray(result),
        );
    }

    private traverseUnionType(node: UnionTypeNode, ctx: ContextType) {
        const members = node.types;

        const result: TypeNode[] = [];
        for (let i = 0; i < members.length; i += 1) {
            result.push(this.traverse(members[i], this.dive(ctx)));
        }

        return factory.updateUnionTypeNode(
            node,
            factory.createNodeArray(result),
        );
    }

    private traverseTypeAlias(node: TypeAliasDeclaration, ctx: ContextType) {
        const { type } = node;

        return this.traverse(type, this.dive(ctx));
    }

    private resolveType(
        typeAliasName: string,
        ctx: ContextType,
    ): ResolveResultType {
        const { file, depthLevel } = ctx;

        const result: ResolveResultType = {
            ctx,
            node: null,
        };

        if (depthLevel > MAX_TRAVERSE_DEPTH) {
            return result;
        }

        if (file.isLocalTypeName(typeAliasName)) {
            d(`The ${typeAliasName} was found in the same file`);
            // defined in the same file
            result.node = file.typeAliases[typeAliasName];
            return result;
        }

        if (
            file.isImportedTypeName(typeAliasName) ||
            file.isReExportedTypeName(typeAliasName)
        ) {
            // imported from some other file, clauses like "import { Blah } from './foo';
            // OR
            // re-exported by name from some other file, clauses like "export { Blah } from './foo';
            const fileName = file.getTypeNameSourceFileAbsolutePath(
                typeAliasName,
            );
            if (fileName) {
                const externalSourceFile = this.project.getSourceFile(fileName);
                d(
                    `To get ${typeAliasName} going into ${externalSourceFile.absolutePath}`,
                );

                return this.resolveType(
                    typeAliasName,
                    this.dive(ctx, externalSourceFile),
                );
            }

            return result;
        }

        // worst case: there are exports like "export * from './blah', and we have zero knowledge where to look
        // scan each file and try not to die
        for (let i = 0; i < file.asteriskReExports.length; i += 1) {
            const reExport = file.asteriskReExports[i];

            const externalSourceFile = this.project.getSourceFile(
                reExport.absolutePath,
            );
            if (externalSourceFile) {
                d(
                    `To get ${typeAliasName} looking into ${externalSourceFile.absolutePath}`,
                );

                const externalResult = this.resolveType(
                    typeAliasName,
                    this.dive(ctx, externalSourceFile),
                );
                if (externalResult.node) {
                    d('Success');
                    return externalResult;
                }
            } else {
                d(`Was not able to get a file for ${reExport.absolutePath}`);
            }
        }

        return result;
    }

    private dive(
        ctx: ContextType,
        file?: SourceFile,
        allowedTypes?: AllowedTypesType,
    ): ContextType {
        let result = {
            ...ctx,
            depthLevel: ctx.depthLevel + 1,
        };

        if (allowedTypes) {
            result = {
                ...result,
                allowedTypes: [...result.allowedTypes, ...allowedTypes],
            };
        }

        if (file) {
            result = {
                ...result,
                file,
            };
        }

        return result;
    }
}
