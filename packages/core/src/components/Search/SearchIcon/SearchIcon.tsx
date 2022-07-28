import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import {
    SearchIconRoot,
    SearchInputLoadingIcon,
    SearchInputSearchIcon,
} from './style';
import { SearchIconPropsType } from './type';
import { SEARCH_ICON_CLASS_PREFIX } from './constants';
import { useSearchIconClassName } from './hooks';

export const SearchIcon: FunctionComponent<
    React.PropsWithChildren<SearchIconPropsType>
> = ({ className, isLoading, disabled }) => {
    const classOverride = useSearchIconClassName(
        SEARCH_ICON_CLASS_PREFIX,
        className,
        disabled,
    );

    return isLoading ? (
        // TODO (nmelnikov 2020-08-31): replace with loading indicator once available
        <SearchIconRoot className={classOverride.BeforeIconContainer}>
            <SearchInputLoadingIcon className={classOverride.BeforeIcon} />
        </SearchIconRoot>
    ) : (
        <SearchIconRoot className={classOverride.BeforeIconContainer}>
            <SearchInputSearchIcon className={classOverride.BeforeIcon} />
        </SearchIconRoot>
    );
};

SearchIcon.propTypes = {
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
};
