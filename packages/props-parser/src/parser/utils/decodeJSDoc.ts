import { Node, TypeElement } from 'typescript';
import { PropertyDeclarationDocType } from '../type';
import { isJSDocTag } from './is';

export const decodeJSDoc = (node: TypeElement) => {
    const result: PropertyDeclarationDocType = {
        description: '',
        tags: {},
        ignored: false,
        deprecated: false,
        internal: false,
        adExpand: [],
    };

    // @ts-ignore
    const doc = node.jsDoc;
    if (doc) {
        const firstDoc = doc[0];
        result.description = firstDoc.comment;

        // modifiers
        const { tags } = firstDoc;

        if (tags) {
            tags.forEach((tag: Node) => {
                if (isJSDocTag(tag)) {
                    // @ts-ignore
                    const tagName = tag.tagName.escapedText;
                    // @ts-ignore
                    const tagComment = (tag.comment || '') as string;
                    result!.tags[tagName] = tagComment;

                    if (tagName === 'ignore') {
                        result!.ignored = true;
                    }
                    if (tagName === 'deprecated') {
                        result!.deprecated = true;
                    }
                    if (tagName === 'internal') {
                        result!.internal = true;
                    }
                    if (tagName === 'armor-docs-expand') {
                        result!.adExpand = tagComment
                            .split(',')
                            .map(x => x.trim());
                    }
                }
            });
        }
    }

    return result;
};
