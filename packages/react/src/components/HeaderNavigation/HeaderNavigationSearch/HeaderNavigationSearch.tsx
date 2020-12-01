import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationSearchRoot, NavigationItemSearch } from './style';
import { HeaderNavigationSearchPropsType } from './type';
import { useComponentTheme } from '../../../utils/hooks';
import {
    HEADER_NAVIGATION_SEARCH_CLASS_PREFIX,
    headerNavigationSearchRoot,
} from './constants';
import useHeaderNavigationSearchClassName from './utils/useHeaderNavigationSearchClassName';
import { headerNavigationSearch } from './theme';

export const HeaderNavigationSearch: FunctionComponent<HeaderNavigationSearchPropsType> = forwardRef(
    function HeaderNavigationSearch(
        { className, options, onChange, onItemSelect, separator, ...restProps },
        ref,
    ) {
        const theme = useComponentTheme(
            HEADER_NAVIGATION_SEARCH_CLASS_PREFIX,
            headerNavigationSearch,
        );

        const classOverride = useHeaderNavigationSearchClassName(
            HEADER_NAVIGATION_SEARCH_CLASS_PREFIX,
            className,
        );

        return (
            <NavigationItemSearch
                theme={theme}
                className={classOverride.ItemSearch}
                flexGrow={1}
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
    },
);

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
