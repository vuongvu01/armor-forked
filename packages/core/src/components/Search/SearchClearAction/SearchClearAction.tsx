import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import {
    SEARCH_CLEAR_ACTION_CLASS_PREFIX,
    searchInputClearIcon,
} from './constants';
import { useSearchClearActionClassName } from './hooks';
import { SearchClearActionPropsType } from './type';
import { ClearIconRoot } from './style';
import { ClearButton } from '../../ClearButton';

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

    if (disableClearAction || !searchQuery) {
        return null;
    }

    return (
        <ClearIconRoot
            className={classOverride.AfterIconContainer}
            onClick={handleClearQuery}
        >
            <ClearButton
                iconSize="medium"
                state={disabled ? 'disabled' : undefined}
                className={classOverride.AfterIcon}
                data-testid={searchInputClearIcon}
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
