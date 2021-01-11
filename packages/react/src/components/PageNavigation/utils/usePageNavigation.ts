import { MouseEvent, useCallback } from 'react';
import { PageNavigationPropsType } from '../type';
import { getPageNavigation } from './getPageNavigation';
import { PseudoEventType } from '../../../type';

export const usePageNavigation = ({
    pageNumber,
    pageSize,
    itemCount,
    displayRange,
    onPageSelect,

    // page size
    enablePageSizeSelector,
    onPageSizeChange,
    pageSizeList,
}: PageNavigationPropsType) => {
    const onPageButtonClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            if (!onPageSelect) {
                return;
            }

            const button = event.currentTarget;
            const buttonDisabled = !!button.getAttribute('data-disabled');
            if (buttonDisabled) {
                return;
            }

            const currentPageNumber = button.getAttribute('data-pagenumber');
            if (currentPageNumber !== null) {
                const currentPageNumberSafe = parseInt(currentPageNumber, 10);
                if (!Number.isNaN(currentPageNumberSafe)) {
                    onPageSelect(currentPageNumberSafe);
                }
            }
        },
        [onPageSelect],
    );

    const onPageSelectorChange = useCallback(
        (event: PseudoEventType<number>) => {
            if (onPageSizeChange) {
                onPageSizeChange(event.target.value);
            }
        },
        [onPageSizeChange],
    );

    return {
        pageSizeSelectorProps: {
            options: pageSizeList,
            onChange: onPageSelectorChange,
            value: pageSize,
        },

        structure: getPageNavigation(
            itemCount,
            pageNumber,
            pageSize,
            displayRange,
        ),
        onPageButtonClick,

        enablePageSizeSelector,
    };
};
