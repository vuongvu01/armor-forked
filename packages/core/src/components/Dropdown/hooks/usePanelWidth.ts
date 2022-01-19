import { RefObject, useEffect, useCallback } from 'react';
import { RESIZE_OBSERVER_SUPPORTED } from '@deliveryhero/armor-system';

export const usePanelWidth = (
    containerRef: RefObject<HTMLElement | undefined>,
    dropdownRef: RefObject<HTMLElement | undefined>,
    isDropdownShown?: boolean,
) => {
    const updateDropdownWidth = useCallback(() => {
        if (!dropdownRef.current || !containerRef.current) {
            return;
        }

        const currentInputWidth = containerRef.current.offsetWidth;

        // eslint-disable-next-line no-param-reassign
        dropdownRef.current.style.width = `${currentInputWidth}px`;
    }, [containerRef, dropdownRef]);

    useEffect(() => {
        let observer: any = null;

        if (RESIZE_OBSERVER_SUPPORTED && dropdownRef.current) {
            // @ts-ignore
            observer = new ResizeObserver(() => {
                updateDropdownWidth();
            });

            observer.observe(containerRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [containerRef, dropdownRef, updateDropdownWidth]);

    useEffect(() => {
        if (isDropdownShown) {
            updateDropdownWidth();
        }
    }, [isDropdownShown, updateDropdownWidth]);
};
