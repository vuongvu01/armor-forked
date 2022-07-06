import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationPropsType } from './type';
import { HEADER_NAVIGATION_CLASS_PREFIX } from './constants';
import {
    HeaderNavigationContent,
    HeaderNavigationContentItem,
    HeaderNavigationContentLeft,
    HeaderNavigationContentRight,
    HeaderNavigationRoot,
    HeaderNavigationTitleRoot,
} from './style';
import { useHeaderNavigationClassName } from './hooks';
import { MemoizedHeaderNavigationItem as HeaderNavigationItem } from './HeaderNavigationItem';
import { useHeaderNavigation } from './hooks/useHeaderNavigation';

/**
 * # HeaderNavigation
 *
 * @armor-docs-component
 */
export const HeaderNavigation = forwardRef<
    HTMLDivElement,
    HeaderNavigationPropsType
>(function HeaderNavigation({ className, ...restProps }, ref) {
    const classOverride = useHeaderNavigationClassName(
        HEADER_NAVIGATION_CLASS_PREFIX,
        className,
    );

    const { rootProps, selector, profile, title } = useHeaderNavigation(
        restProps,
        ref,
    );

    return (
        <HeaderNavigationRoot className={classOverride.Root} {...rootProps}>
            <HeaderNavigationContent
                className={classOverride.HeaderNavigationContent}
            >
                {title && (
                    <HeaderNavigationContentItem
                        className={classOverride.HeaderNavigationContentItem}
                    >
                        <HeaderNavigationContentLeft
                            className={
                                classOverride.HeaderNavigationContentLeft
                            }
                        >
                            <HeaderNavigationItem
                                className={classOverride.HeaderNavigationItem}
                            >
                                <HeaderNavigationTitleRoot
                                    className={classOverride.NavigationTitle}
                                >
                                    {title}
                                </HeaderNavigationTitleRoot>
                            </HeaderNavigationItem>
                        </HeaderNavigationContentLeft>
                    </HeaderNavigationContentItem>
                )}
                <HeaderNavigationContentItem
                    className={classOverride.HeaderNavigationContentItem}
                >
                    <HeaderNavigationContentRight
                        className={classOverride.HeaderNavigationContentRight}
                    >
                        {selector}
                        {profile}
                    </HeaderNavigationContentRight>
                </HeaderNavigationContentItem>
            </HeaderNavigationContent>
        </HeaderNavigationRoot>
    );
});

HeaderNavigation.propTypes = {
    /** React node that is rendered at title area of navigation bar */
    title: PropTypes.node,
    /** React node that is rendered at selector area of navigation bar */
    selector: PropTypes.node,
    /** React node that is rendered at profile area of navigation bar */
    profile: PropTypes.node,
};

HeaderNavigation.displayName = HEADER_NAVIGATION_CLASS_PREFIX;

export const MemoizedHeaderNavigation = memo(HeaderNavigation);
