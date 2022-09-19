import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { SearchIconRoot, SearchInputSearchIcon } from './style';
import { SearchIconPropsType } from './type';
import { SEARCH_ICON_CLASS_PREFIX } from './constants';
import { useSearchIconClassName } from './hooks';

export const SearchIcon: FunctionComponent<
    React.PropsWithChildren<SearchIconPropsType>
> = ({ className, disabled }) => {
    const classOverride = useSearchIconClassName(
        SEARCH_ICON_CLASS_PREFIX,
        className,
        disabled,
    );

    return (
        <SearchIconRoot className={classOverride.BeforeIconContainer}>
            <SearchInputSearchIcon
                className={classOverride.BeforeIcon}
                disabled={disabled}
            />
        </SearchIconRoot>
    );
};

SearchIcon.propTypes = {
    disabled: PropTypes.bool,
};
