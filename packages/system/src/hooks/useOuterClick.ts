import { RefObject, useEffect } from 'react';

export const useOuterClick = (
    scopeNodes: RefObject<HTMLElement | undefined>[],
    onClick: (event: MouseEvent) => void,
    enabled = true,
): void => {
    useEffect(() => {
        const onOuterClick = (event: MouseEvent) => {
            const targetNode = event.target;
            if (!enabled || !scopeNodes.length || !targetNode) {
                return;
            }

            let isOuterClick = true;
            for (let i = 0; i < scopeNodes.length; i += 1) {
                const node = scopeNodes[i];
                if (node?.current?.contains(targetNode as HTMLElement)) {
                    isOuterClick = false;
                    break;
                }
            }

            if (isOuterClick) {
                onClick(event);
            }
        };

        document.addEventListener('mousedown', onOuterClick);

        return () => {
            document.removeEventListener('mousedown', onOuterClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...scopeNodes, onClick, enabled]);
};
