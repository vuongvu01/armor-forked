import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ArrowLeftIcon, ArrowRightIcon } from '@deliveryhero/armor-icons';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { usePageNavigationClassNames } from './hooks/usePageNavigationClassNames';
import { usePageNavigation } from './hooks/usePageNavigation';
import {
    PageNavigationRoot,
    PageNavigationButtons,
    PageNavigationPageButton,
    PageNavigationPageSize,
    PageNavigationPageSizeSelector,
} from './style';
import { PageNavigationPropsType } from './type';
import {
    pageNavigationRootTestId,
    PAGE_NAVIGATION_CLASS_PREFIX,
    pageNavigationPageButtonTestId,
} from './constants';

/**
 * @armor-docs-component
 */
export const PageNavigation = forwardRef<
    HTMLDivElement,
    PageNavigationPropsType
>(function PageNavigation({ className, ...restProps }, ref) {
    const theme = useComponentTheme(PAGE_NAVIGATION_CLASS_PREFIX);
    const classNameComponents = usePageNavigationClassNames(
        PAGE_NAVIGATION_CLASS_PREFIX,
        className,
    );

    const {
        pageSizeSelectorProps,

        structure: {
            displayedRange,
            nextPageNumber,
            previousPageNumber,
            currentPageNumber,
            nextPageArrowEnabled,
            previousPageArrowEnabled,
        },
        onPageButtonClick,

        enablePageSizeSelector,
    } = usePageNavigation(restProps);

    return (
        <PageNavigationRoot
            data-testid={pageNavigationRootTestId}
            {...restProps}
            theme={theme}
            className={classNameComponents.Root}
            ref={ref}
        >
            {enablePageSizeSelector && (
                <PageNavigationPageSize
                    theme={theme}
                    className={classNameComponents.PageSize}
                >
                    Rows per page:{' '}
                    <PageNavigationPageSizeSelector
                        theme={theme}
                        className={classNameComponents.PageSizeSelector}
                        {...pageSizeSelectorProps}
                    />
                </PageNavigationPageSize>
            )}
            <PageNavigationButtons
                theme={theme}
                className={classNameComponents.Buttons}
            >
                <PageNavigationPageButton
                    theme={theme}
                    className={classNameComponents.ArrowButton}
                    arrow
                    disabled={!previousPageArrowEnabled}
                    data-testid={pageNavigationPageButtonTestId}
                    data-disabled={previousPageArrowEnabled ? '' : '1'}
                    data-pagenumber={previousPageNumber}
                    onClick={onPageButtonClick}
                >
                    <ArrowLeftIcon />
                </PageNavigationPageButton>
                {displayedRange.map((pageNumber) => (
                    <PageNavigationPageButton
                        key={pageNumber}
                        theme={theme}
                        className={classNameComponents.PageButton}
                        selected={pageNumber === currentPageNumber}
                        data-testid={pageNavigationPageButtonTestId}
                        data-disabled=""
                        data-pagenumber={pageNumber}
                        onClick={onPageButtonClick}
                    >
                        {pageNumber}
                    </PageNavigationPageButton>
                ))}
                <PageNavigationPageButton
                    theme={theme}
                    className={classNameComponents.ArrowButton}
                    arrow
                    disabled={!nextPageArrowEnabled}
                    data-testid={pageNavigationPageButtonTestId}
                    data-disabled={nextPageArrowEnabled ? '' : '1'}
                    data-pagenumber={nextPageNumber}
                    onClick={onPageButtonClick}
                >
                    <ArrowRightIcon />
                </PageNavigationPageButton>
            </PageNavigationButtons>
        </PageNavigationRoot>
    );
});

PageNavigation.defaultProps = {
    pageNumber: 1,
    itemCount: 0,
    pageSize: 25,
    displayRange: 2,
    pageSizeList: [
        { label: '25', value: 25 },
        { label: '100', value: 100 },
        { label: '500', value: 500 },
    ],
};

/** prop-types are required here for run-time checks */
PageNavigation.propTypes = {
    pageNumber: PropTypes.number,
    itemCount: PropTypes.number,
    pageSize: PropTypes.number,
    displayRange: PropTypes.number,
    onPageSelect: PropTypes.func,
};
