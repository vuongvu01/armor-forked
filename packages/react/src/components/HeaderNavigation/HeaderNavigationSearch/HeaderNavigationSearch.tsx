import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationSearchRoot, NavigationPackItemSearch } from './style';
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
        {
            className,
            classNames,
            options,
            onChange,
            onItemSelect,
            separator,
            ...restProps
        },
        ref,
    ) {
        const theme = useComponentTheme(
            HEADER_NAVIGATION_SEARCH_CLASS_PREFIX,
            headerNavigationSearch,
        );

        const classOverride = useHeaderNavigationSearchClassName(
            HEADER_NAVIGATION_SEARCH_CLASS_PREFIX,
            className,
            classNames,
        );

        return (
            <NavigationPackItemSearch
                theme={theme}
                className={classOverride.PackItem}
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
            </NavigationPackItemSearch>
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
