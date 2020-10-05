import React, { FunctionComponent } from 'react';

import {
    SearchLabelTypography,
    SearchSuggestionsItem,
    SearchSuggestionsItemAction,
    SearchSuggestionsItemIcon,
    SearchSuggestionsItemLabel,
} from '../style';
import { useTheme } from '../../../styling';
import { useThemeOverride } from '../../../utils/hooks';
import { searchTheme } from '../theme';
import { useEmptySuggestionsListClassName } from './utils';
import { EmptySuggestionsListPropsType } from './type';
import { EMPTY_SUGGESTIONS_LIST_CLASS_PREFIX } from './constants';

export const EmptySuggestionsList: FunctionComponent<EmptySuggestionsListPropsType> = ({
    className,
    classNames,
}) => {
    const theme = useTheme();

    useThemeOverride(EMPTY_SUGGESTIONS_LIST_CLASS_PREFIX, theme, searchTheme);

    const classOverride = useEmptySuggestionsListClassName(
        EMPTY_SUGGESTIONS_LIST_CLASS_PREFIX,
        className,
        classNames,
    );

    return (
        <SearchSuggestionsItem
            className={classOverride.SuggestionsItem}
            theme={theme}
        >
            <SearchSuggestionsItemIcon
                className={classOverride.SuggestionsItemIcon}
                theme={theme}
            >
                {null}
            </SearchSuggestionsItemIcon>
            <SearchSuggestionsItemLabel
                className={classOverride.SuggestionsItemLabel}
                theme={theme}
            >
                <SearchLabelTypography paragraph medium theme={theme}>
                    No results found
                </SearchLabelTypography>
            </SearchSuggestionsItemLabel>
            <SearchSuggestionsItemAction
                className={classOverride.SuggestionsItemAction}
                theme={theme}
            >
                {null}
            </SearchSuggestionsItemAction>
        </SearchSuggestionsItem>
    );
};
