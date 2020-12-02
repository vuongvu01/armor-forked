import { useEffect, useRef, useState } from 'react';
import { TableExpandableSectionPropsType } from '../type';
import { RESIZE_OBSERVER_SUPPORTED } from '../constants';

export const useTableExpandableSection = ({
    expanded,
    enableDefaultPadding,
    colSpan,
    offsetLeft,
    ...restProps
}: TableExpandableSectionPropsType) => {
    const [containerHeight, setContainerHeight] = useState(-1);
    const contentRef = useRef(null);

    useEffect(() => {
        let observer: any = null;
        if (RESIZE_OBSERVER_SUPPORTED && contentRef.current) {
            // todo: add type declarations for ResizeObserver
            // @ts-ignore
            observer = new ResizeObserver(entries => {
                const contentEntry = entries[0];
                if (!contentEntry) {
                    return;
                }

                const contentNodeHeight = contentEntry.target.getBoundingClientRect()
                    .height;
                setContainerHeight(contentNodeHeight);
            });
            observer.observe(contentRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    // this enables running css transitions after we go from display none to display table-row
    const [expandedInternal, setExpandedInternal] = useState(expanded);
    useEffect(() => {
        if (expanded) {
            setTimeout(() => setExpandedInternal(true), 0);
        } else {
            setExpandedInternal(false);
        }
    }, [expanded]);

    return {
        rootProps: {
            ...restProps,
            enableStickyTop: false,
            enableStickyColumns: false,
            expanded,
        },
        cellProps: {
            colSpan,
            height: containerHeight,
        },
        contentProps: {
            expanded: expandedInternal,
            ref: contentRef,
            enableDefaultPadding,
            offsetLeft,
        },
    };
};
