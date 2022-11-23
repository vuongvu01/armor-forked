/* eslint-disable prefer-destructuring, no-param-reassign */
import { useState, useRef, useCallback, useEffect, ReactChild } from 'react';
import {
    useRootRef,
    useWindowSize,
    stripHTMLTagsMemoized as stripHTMLTags,
} from '@deliveryhero/armor-system';

import { MultilineTruncateParagraphPropsType } from '../type';
import { RefType } from '../../../type';
import { DEFAULT_NUM_OF_LINES } from '../constants';

export const useMultilineTruncateParagraph = <E extends HTMLElement>(
    {
        typographyProps = { paragraph: true, medium: true },
        numOfLines = DEFAULT_NUM_OF_LINES,
        truncated,
        onChangeOverflow,
        children,
        ...restProps
    }: MultilineTruncateParagraphPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);
    const [isOverFlow, setOverflow] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);
    const windowSize = useWindowSize();

    const processTruncateText = useCallback(
        (node): void => {
            if (!children || !node) {
                return;
            }
            const rootText = stripHTMLTags(children as ReactChild);

            const words = rootText.split(' ');
            node.textContent = words[0];
            // get the the paragraph max height when truncated
            const maxHeight = node.clientHeight * numOfLines;
            let truncatedStr = '';

            const overflow = words.some((word) => {
                const prevStr = truncatedStr;
                // concat the paragraph word by word
                truncatedStr = truncatedStr ? `${truncatedStr} ${word}` : word;
                node.textContent = truncatedStr;

                if (node.clientHeight > maxHeight) {
                    // when the truncated paragraph exceeds the max height
                    node.textContent = `${prevStr}...`;
                    if (node.clientHeight > maxHeight) {
                        // replace the last 4 letters by '...' to make sure it's not going to the next line
                        node.textContent = `${prevStr.substring(
                            0,
                            prevStr.length - 4,
                        )}...`;
                    }
                    return true;
                }
                return false;
            });

            setOverflow((prevState) => prevState || overflow);
        },
        [children, numOfLines],
    );

    useEffect(() => {
        onChangeOverflow?.(isOverFlow);
    }, [isOverFlow, onChangeOverflow]);

    useEffect(() => {
        if (textRef.current && truncated) {
            processTruncateText(textRef.current);
        }
    }, [truncated, windowSize, numOfLines, processTruncateText]);

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
        typographyProps,
        truncated,
        textRef,
        children,
    };
};
