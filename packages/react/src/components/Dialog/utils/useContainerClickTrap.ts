import { MouseEvent, useCallback, useRef } from 'react';

export const useContainerClickTrap = (
    onClose?: () => void,
    disableOverlay?: boolean,
) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const onContainerClick = useCallback(
        (e: MouseEvent<unknown>) => {
            if (
                e.target === containerRef.current &&
                !disableOverlay &&
                onClose
            ) {
                onClose();
            }
        },
        [containerRef, disableOverlay, onClose],
    );

    return {
        onContainerClick,
        containerRef,
    };
};
