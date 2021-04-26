import { RefObject, useEffect } from 'react';
import { RESIZE_OBSERVER_SUPPORTED } from '../../../system/util/compatibility';

export const usePanelWidth = (
    containerRef: RefObject<HTMLElement | undefined>,
    dropdownRef: RefObject<HTMLElement | undefined>,
) => {
    useEffect(() => {
        let observer: any = null;

        if (RESIZE_OBSERVER_SUPPORTED && dropdownRef.current) {
            // @ts-ignore
            observer = new ResizeObserver(entries => {
                const [containerEntry] = entries;

                const {
                    width: containerNodeWidth,
                } = containerEntry.target.getBoundingClientRect();

                if (dropdownRef.current) {
                    // eslint-disable-next-line no-param-reassign
                    dropdownRef.current.style.width = `${containerNodeWidth}px`;
                }
            });

            observer.observe(containerRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [containerRef.current, dropdownRef.current]);
};
