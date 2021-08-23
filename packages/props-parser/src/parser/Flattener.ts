import {
    factory,
    IntersectionTypeNode,
    isIntersectionTypeNode,
    isParenthesizedTypeNode,
    isPropertySignature,
    isTypeLiteralNode,
    ParenthesizedTypeNode,
    SyntaxKind,
    TypeLiteralNode,
    TypeNode,
    TypeReferenceNode,
} from 'typescript';
// import debug from 'debug';
import { Project } from './Project';
import { isPartialTypeNode } from './utils/is';
import { MAX_TRAVERSE_DEPTH } from './constants';
import { FlatResultType } from './type';

type ContextType = {
    depthLevel: number;
};

// const d = debug('Flattener');

export class Flattener {
    constructor(private program: Project) {}

    public flatten(node: TypeNode): TypeLiteralNode {
        return factory.createTypeLiteralNode(
            this.traverse(node, {
                depthLevel: 0,
            }),
        );
    }

    private traverse(node: TypeNode, ctx: ContextType): FlatResultType {
        const result: FlatResultType = [];

        const { depthLevel } = ctx;

        if (depthLevel > MAX_TRAVERSE_DEPTH) {
            return result;
        }

        if (isPartialTypeNode(node)) {
            return this.traversePartialType(node, ctx);
        }

        if (isTypeLiteralNode(node)) {
            return this.traverseTypeLiteral(node, ctx);
        }

        if (isIntersectionTypeNode(node)) {
            return this.traverseIntersectionType(node, ctx);
        }

        if (isParenthesizedTypeNode(node)) {
            return this.traverseParenthesizedType(node, ctx);
        }

        return result;
    }

    public traverseIntersectionType(
        node: IntersectionTypeNode,
        ctx: ContextType,
    ) {
        let result: FlatResultType = [];

        node.types.forEach(subNode => {
            result = [...result, ...this.traverse(subNode, ctx)];
        });

        return result;
    }

    public traverseParenthesizedType(
        node: ParenthesizedTypeNode,
        ctx: ContextType,
    ) {
        return this.traverse(node.type, this.dive(ctx));
    }

    public traversePartialType(node: TypeReferenceNode, ctx: ContextType) {
        let result: FlatResultType = [];

        node.typeArguments?.forEach(argument => {
            const properties = this.traverse(argument, this.dive(ctx)).map(
                property => {
                    const updatedProperty = factory.updatePropertySignature(
                        property,
                        property.modifiers,
                        property.name,
                        factory.createToken(SyntaxKind.QuestionToken),
                        property.type,
                    );

                    // jsDoc falls out after being processed through factory.updatePropertySignature(). Putting it in place again
                    // @ts-ignore
                    updatedProperty.jsDoc = property.jsDoc;

                    return updatedProperty;
                },
            );

            result = [...result, ...properties];
        });

        return result;
    }

    public traverseTypeLiteral(node: TypeLiteralNode, ctx: ContextType) {
        const result: FlatResultType = [];

        node.members.forEach(member => {
            if (isPropertySignature(member)) {
                result.push(member);
            }
        });

        return result;
    }

    private dive(ctx: ContextType): ContextType {
        return {
            ...ctx,
            depthLevel: ctx.depthLevel + 1,
        };
    }
}
