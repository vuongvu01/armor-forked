import React, { FunctionComponent, useMemo } from 'react';
import PropTypes from 'prop-types';

import {
    SearchIconContainer,
    SearchInputLoadingIcon,
    SearchInputSearchIcon,
} from './style';
import { SearchIconPropsType } from './type';
import { useComponentTheme } from '../../../utils/hooks';
import { SEARCH_ICON_CLASS_PREFIX } from './constants';
import { useSearchIconClassName } from './utils';
import { searchIconTheme } from './theme';

export const SearchIcon: FunctionComponent<SearchIconPropsType> = ({
    className,
    classNames,
    isLoading,
    disabled,
}) => {
    const theme = useComponentTheme(SEARCH_ICON_CLASS_PREFIX, searchIconTheme);

    const classOverride = useSearchIconClassName(
        SEARCH_ICON_CLASS_PREFIX,
        className,
        classNames,
        disabled,
    );

    // TODO (nmelnikov 2020-10-02): remove this once styles is deprecated
    const tempStyles = useMemo(() => () => '', []);

    return isLoading ? (
        // TODO (nmelnikov 2020-08-31): replace with loading indicator once available
        <SearchIconContainer
            className={classOverride.BeforeIconContainer}
            theme={theme}
            styles={tempStyles}
        >
            <SearchInputLoadingIcon
                className={classOverride.BeforeIcon}
                theme={theme}
                styles={tempStyles}
            />
        </SearchIconContainer>
    ) : (
        <SearchIconContainer
            className={classOverride.BeforeIconContainer}
            theme={theme}
            styles={tempStyles}
        >
            <SearchInputSearchIcon
                className={classOverride.BeforeIcon}
                theme={theme}
                styles={tempStyles}
            />
        </SearchIconContainer>
    );
};

SearchIcon.propTypes = {
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
};
