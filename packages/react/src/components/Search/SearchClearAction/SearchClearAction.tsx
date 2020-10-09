import React, { FunctionComponent, useMemo } from 'react';
import PropTypes from 'prop-types';

import {
    SEARCH_CLEAR_ACTION_CLASS_PREFIX,
    searchInputClearIcon,
} from './constants';
import { useComponentTheme } from '../../../utils/hooks';
import { useSearchClearActionClassName } from './utils';
import { SearchClearActionPropsType } from './type';
import { ClearIconContainer, SearchInputClearIcon } from './style';
import { searchClearActionTheme } from './theme';

export const SearchClearAction: FunctionComponent<SearchClearActionPropsType> = ({
    className,
    classNames,
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
        classNames,
        disabled,
    );

    // TODO (nmelnikov 2020-10-02): remove this once styles is deprecated
    const tempStyles = useMemo(() => () => '', []);

    return disableClearAction ? null : (
        <ClearIconContainer
            className={classOverride.AfterIconContainer}
            onClick={handleClearQuery}
            theme={theme}
            styles={tempStyles}
        >
            <SearchInputClearIcon
                className={classOverride.AfterIcon}
                data-testid={searchInputClearIcon}
                disabled={disabled}
                searchQuery={searchQuery}
                theme={theme}
                styles={tempStyles}
            />
        </ClearIconContainer>
    );
};

SearchClearAction.propTypes = {
    disabled: PropTypes.bool,
    disableClearAction: PropTypes.bool,
    handleClearQuery: PropTypes.func,
    searchQuery: PropTypes.string,
};
