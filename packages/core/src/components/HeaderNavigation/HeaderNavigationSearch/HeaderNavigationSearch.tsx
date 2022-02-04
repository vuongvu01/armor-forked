import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@deliveryhero/armor-system';

import { HeaderNavigationSearchRoot, NavigationItemSearch } from './style';
import { HeaderNavigationSearchPropsType } from './type';
import {
    HEADER_NAVIGATION_SEARCH_CLASS_PREFIX,
    headerNavigationSearchRoot,
} from './constants';
import { useHeaderNavigationSearchClassName } from './hooks';

/**
 * @armor-docs-component
 */
export const HeaderNavigationSearch = forwardRef<
    HTMLInputElement,
    HeaderNavigationSearchPropsType
>(function HeaderNavigationSearch(
    { className, options, onChange, onItemSelect, separator, ...restProps },
    ref,
) {
    const theme = useTheme();

    const classOverride = useHeaderNavigationSearchClassName(
        HEADER_NAVIGATION_SEARCH_CLASS_PREFIX,
        className,
    );

    return (
        <NavigationItemSearch
            theme={theme}
            className={classOverride.ItemSearch}
            separator={separator}
        >
            <HeaderNavigationSearchRoot
                data-testid={headerNavigationSearchRoot}
                {...restProps}
                options={options}
                onChange={onChange}
                onItemSelect={onItemSelect}
                theme={theme}
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
