import { PageNavigationStructureType } from './type';

export const getPageNavigation = (
    itemCount = 0,
    pageNumber = 1,
    pageSize = 10,
    displayedRadius = 2,
) => {
    const result: PageNavigationStructureType = {
        displayedRange: [],
        nextPageNumber: 1,
        previousPageNumber: 1,
        currentPageNumber: pageNumber,
        firstPageArrowEnabled: false,
        lastPageArrowEnabled: false,
        nextPageArrowEnabled: false,
        previousPageArrowEnabled: false,
    };

    if (!itemCount || itemCount < pageSize) {
        result.displayedRange = [1];
        return result;
    }

    const pageCount = Math.ceil(itemCount / pageSize);

    const displayedRange = [
        pageNumber - displayedRadius,
        pageNumber + displayedRadius,
    ];
    if (displayedRange[0] < 1) {
        displayedRange[1] += 1 - displayedRange[0];
        displayedRange[0] = 1;
        if (displayedRange[1] > pageCount) {
            displayedRange[1] = pageCount;
        }
    }

    if (displayedRange[1] > pageCount) {
        displayedRange[0] -= displayedRange[1] - pageCount;
        displayedRange[1] = pageCount;
        if (displayedRange[0] < 1) {
            displayedRange[0] = 1;
        }
    }

    for (let i = displayedRange[0]; i <= displayedRange[1]; i += 1) {
        result.displayedRange.push(i);
    }

    result.previousPageNumber = pageNumber - 1;
    result.nextPageNumber = pageNumber + 1;

    result.firstPageArrowEnabled = pageNumber > 1;
    result.lastPageArrowEnabled = pageNumber < pageCount;

    result.previousPageArrowEnabled = pageNumber > 1;
    result.nextPageArrowEnabled = pageNumber < pageCount;

    return result;
};
