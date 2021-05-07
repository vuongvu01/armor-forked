import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import {
    SEARCH_CLEAR_ACTION_CLASS_PREFIX,
    searchInputClearIcon,
} from './constants';
import { useComponentTheme } from '../../../utils/hooks';
import { useSearchClearActionClassName } from './hooks';
import { SearchClearActionPropsType } from './type';
import { ClearIconRoot, SearchInputClearIcon } from './style';
import { searchClearActionTheme } from './theme';

export const SearchClearAction: FunctionComponent<SearchClearActionPropsType> = ({
    className,
    disableClearAction,
    handleClearQuery,
    disabled,
    searchQuery,
}) => {
    const theme = useComponentTheme(
        SEARCH_CLEAR_ACTION_CLASS_PREFIX,
        searchClearActionTheme,
    );

    const classOverride = useSearchClearActionClassName(
        SEARCH_CLEAR_ACTION_CLASS_PREFIX,
        className,
        disabled,
    );

    return disableClearAction ? null : (
        <ClearIconRoot
            className={classOverride.AfterIconContainer}
            onClick={handleClearQuery}
            theme={theme}
        >
            <SearchInputClearIcon
                className={classOverride.AfterIcon}
                data-testid={searchInputClearIcon}
                disabled={disabled}
                searchQuery={searchQuery}
                theme={theme}
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
