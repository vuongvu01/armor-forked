import { useCallback } from 'react';
import { getWindow } from '../util';

type Props = {
    id?: string;
    className?: string;
    node?: HTMLElement;
    options?: ScrollIntoViewOptions;
};

const win = getWindow();

const defaultScrollOptions: ScrollIntoViewOptions = {
    block: 'center',
    behavior: 'smooth',
};

export const useScrollToNode = ({
    id,
    node,
    className,
    options = defaultScrollOptions,
}: Props): (() => void) => {
    const getCurrentNode = useCallback((): HTMLElement | null => {
        if (node) {
            return node;
        }
        if (id) {
            return document.querySelector(`#${id}`);
        }
        if (className) {
            return document.querySelector(`.${className}`);
        }

        return null;
    }, [node, id, className]);

    return useCallback(() => {
        if (!win) {
            return;
        }

        setTimeout(() => {
            const currentNode = getCurrentNode();
            if (currentNode) {
                currentNode.scrollIntoView(options);
            }
        }, 0);
    }, [getCurrentNode, options]);
};
