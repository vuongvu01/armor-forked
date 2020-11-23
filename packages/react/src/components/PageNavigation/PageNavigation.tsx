import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ArrowLeftIcon, ArrowRightIcon } from '@deliveryhero/armor-icons';

import { useComponentTheme } from '../../utils/hooks';
import { usePageNavigationClassNames } from './utils/usePageNavigationClassNames';
import { usePageNavigation } from './utils/usePageNavigation';
import { PageNavigationRoot, PageNavigationPageButton } from './style';
import { PageNavigationPropsType } from './type';
import { pageNavigationDefaultTheme } from './theme';
import {
    pageNavigationRootTestId,
    PAGE_NAVIGATION_CLASS_PREFIX,
    pageNavigationPageButtonTestId,
} from './constants';

export const PageNavigation: FunctionComponent<PageNavigationPropsType> = forwardRef(
    function PageNavigation({ className, ...restProps }, ref) {
        const theme = useComponentTheme(
            PAGE_NAVIGATION_CLASS_PREFIX,
            pageNavigationDefaultTheme,
        );
        const classNameComponents = usePageNavigationClassNames(
            PAGE_NAVIGATION_CLASS_PREFIX,
            className,
        );

        const {
            structure: {
                displayedRange,
                nextPageNumber,
                previousPageNumber,
                currentPageNumber,
                nextPageArrowEnabled,
                previousPageArrowEnabled,
            },
            onPageButtonClick,
        } = usePageNavigation(restProps);

        return (
            <PageNavigationRoot
                data-testid={pageNavigationRootTestId}
                {...restProps}
                theme={theme}
                className={classNameComponents.Root}
                ref={ref}
            >
                <PageNavigationPageButton
                    theme={theme}
                    className={classNameComponents.PageButton}
                    arrow
                    disabled={!previousPageArrowEnabled}
                    data-testid={pageNavigationPageButtonTestId}
                    data-disabled={previousPageArrowEnabled ? '' : '1'}
                    data-pagenumber={previousPageNumber}
                    onClick={onPageButtonClick}
                >
                    <ArrowLeftIcon />
                </PageNavigationPageButton>
                {displayedRange.map(pageNumber => (
                    <PageNavigationPageButton
                        key={pageNumber}
                        theme={theme}
                        className={classNameComponents.PageButton}
                        selected={pageNumber === currentPageNumber}
                        data-testid={pageNavigationPageButtonTestId}
                        data-pagenumber={pageNumber}
                        onClick={onPageButtonClick}
                    >
                        {pageNumber}
                    </PageNavigationPageButton>
                ))}
                <PageNavigationPageButton
                    theme={theme}
                    className={classNameComponents.PageButton}
                    arrow
                    disabled={!nextPageArrowEnabled}
                    data-testid={pageNavigationPageButtonTestId}
                    data-disabled={nextPageArrowEnabled ? '' : '1'}
                    data-pagenumber={nextPageNumber}
                    onClick={onPageButtonClick}
                >
                    <ArrowRightIcon />
                </PageNavigationPageButton>
            </PageNavigationRoot>
        );
    },
);

PageNavigation.defaultProps = {
    pageNumber: 1,
    itemCount: 0,
    pageSize: 10,
    displayRange: 2,
};

/** prop-types are required here for run-time checks */
PageNavigation.propTypes = {
    pageNumber: PropTypes.number,
    itemCount: PropTypes.number,
    pageSize: PropTypes.number,
    displayRange: PropTypes.number,
    onPageSelect: PropTypes.func,
};
