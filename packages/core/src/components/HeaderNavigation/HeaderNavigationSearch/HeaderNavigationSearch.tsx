import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationSearchRoot, NavigationItemSearch } from './style';
import { HeaderNavigationSearchPropsType } from './type';
import {
    HEADER_NAVIGATION_SEARCH_CLASS_PREFIX,
    headerNavigationSearchRoot,
} from './constants';
import { useHeaderNavigationSearchClassName } from './hooks';

/**
 * # HeaderNavigationSearch
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/111bcf-header-navigation/b/440e0c)
 *
 * @armor-docs-component
 */
export const HeaderNavigationSearch = forwardRef<
    HTMLInputElement,
    HeaderNavigationSearchPropsType
>(function HeaderNavigationSearch(
    { className, options, onChange, onItemSelect, separator, ...restProps },
    ref,
) {
    const classOverride = useHeaderNavigationSearchClassName(
        HEADER_NAVIGATION_SEARCH_CLASS_PREFIX,
        className,
    );

    return (
        <NavigationItemSearch
            className={classOverride.ItemSearch}
            separator={separator}
        >
            <HeaderNavigationSearchRoot
                data-testid={headerNavigationSearchRoot}
                {...restProps}
                options={options}
                onChange={onChange}
                onItemSelect={onItemSelect}
                className={classOverride.NavigationSearchRoot}
                ref={ref}
            />
        </NavigationItemSearch>
    );
});

HeaderNavigationSearch.defaultProps = {
    separator: true,
};

HeaderNavigationSearch.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            label: PropTypes.string.isRequired,
        }).isRequired,
    ),
    onChange: PropTypes.func,
    onItemSelect: PropTypes.func,
    separator: PropTypes.bool,
};

export const MemoizedHeaderNavigationSearch = memo(HeaderNavigationSearch);
