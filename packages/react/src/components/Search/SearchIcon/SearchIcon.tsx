import React, { FunctionComponent } from 'react';
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
    isLoading,
    disabled,
}) => {
    const theme = useComponentTheme(SEARCH_ICON_CLASS_PREFIX, searchIconTheme);

    const classOverride = useSearchIconClassName(
        SEARCH_ICON_CLASS_PREFIX,
        className,
        disabled,
    );

    return isLoading ? (
        // TODO (nmelnikov 2020-08-31): replace with loading indicator once available
        <SearchIconContainer
            className={classOverride.BeforeIconContainer}
            theme={theme}
        >
            <SearchInputLoadingIcon
                className={classOverride.BeforeIcon}
                theme={theme}
            />
        </SearchIconContainer>
    ) : (
        <SearchIconContainer
            className={classOverride.BeforeIconContainer}
            theme={theme}
        >
            <SearchInputSearchIcon
                className={classOverride.BeforeIcon}
                theme={theme}
            />
        </SearchIconContainer>
    );
};

SearchIcon.propTypes = {
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
};
