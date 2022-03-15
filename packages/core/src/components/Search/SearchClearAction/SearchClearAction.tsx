import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import {
    SEARCH_CLEAR_ACTION_CLASS_PREFIX,
    searchInputClearIcon,
} from './constants';
import { useSearchClearActionClassName } from './hooks';
import { SearchClearActionPropsType } from './type';
import { ClearIconRoot, SearchInputClearIcon } from './style';

export const SearchClearAction: FunctionComponent<
    SearchClearActionPropsType
> = ({
    className,
    disableClearAction,
    handleClearQuery,
    disabled,
    searchQuery,
}) => {
    const classOverride = useSearchClearActionClassName(
        SEARCH_CLEAR_ACTION_CLASS_PREFIX,
        className,
        disabled,
    );

    return disableClearAction ? null : (
        <ClearIconRoot
            className={classOverride.AfterIconContainer}
            onClick={handleClearQuery}
        >
            <SearchInputClearIcon
                className={classOverride.AfterIcon}
                data-testid={searchInputClearIcon}
                disabled={disabled}
                searchQuery={searchQuery}
            />
        </ClearIconRoot>
    );
};

SearchClearAction.propTypes = {
    disabled: PropTypes.bool,
    disableClearAction: PropTypes.bool,
    handleClearQuery: PropTypes.func,
    searchQuery: PropTypes.string,
};
