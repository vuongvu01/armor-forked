import { MouseEvent, useCallback } from 'react';
import { PageNavigationPropsType } from '../type';
import { getPageNavigation } from './getPageNavigation';

export const usePageNavigation = ({
    pageNumber,
    pageSize,
    itemCount,
    displayRange,
    onPageSelect,
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

    return {
        structure: getPageNavigation(
            itemCount,
            pageNumber,
            pageSize,
            displayRange,
        ),
        onPageButtonClick,
    };
};
