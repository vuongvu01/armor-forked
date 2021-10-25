import { MouseEvent, useCallback } from 'react';
import { PageNavigationPropsType } from '../type';
import { getPageNavigation } from '../utils/getPageNavigation';
import { PseudoEventType } from '../../../type';
import { DropdownValueType } from '../../Dropdown/type';

export const usePageNavigation = ({
    pageNumber,
    pageSize,
    itemCount,
    displayRange,
    onPageSelect,
    onPageNumberChange,

    // page size
    enablePageSizeSelector,
    onPageSizeChange,
    pageSizeList,
}: PageNavigationPropsType) => {
    const actualOnPageSelect = onPageSelect ?? onPageNumberChange;

    const onPageButtonClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            if (!actualOnPageSelect) {
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
                    actualOnPageSelect(currentPageNumberSafe);
                }
            }
        },
        [actualOnPageSelect],
    );

    const onPageSelectorChange = useCallback(
        (event: PseudoEventType<DropdownValueType>) => {
            onPageSizeChange?.(event.target.value as number);
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
