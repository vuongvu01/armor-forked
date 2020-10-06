import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { useSearchClassName } from './utils';
import { SearchPropsType } from './type';
import { searchTheme } from './theme';
import { SEARCH_CLASS_PREFIX, searchRoot } from './constants';
import {
    SearchRoot,
    SearchSuggestionsContainer,
    SearchSuggestionsList,
} from './style';
import { useSearchBar } from './utils/useSearchBar';
import { TextInput } from '../TextInput';
import { SuggestionsList } from './SuggestionsList';
import { SearchIcon } from './SearchIcon';
import { SearchClearAction } from './SearchClearAction';

export const Search: FunctionComponent<SearchPropsType> = forwardRef(
    function Search(
        {
            additionalInfo,
            className,
            classNames,
            defaultQuery,
            disabled,
            disableClearAction,
            icon,
            onChange,
            onItemSelect,
            options,
            placeholder,
            isLoading,
            ...restProps
        },
        ref,
    ) {
        const theme = useTheme();

        useThemeOverride(SEARCH_CLASS_PREFIX, theme, searchTheme);

        const classOverride = useSearchClassName(
            SEARCH_CLASS_PREFIX,
            className,
            classNames,
            disabled,
        );

        const {
            searchQuery,
            containerRef,
            handleChange,
            handleClick,
            internalInputRef,
            isSuggestionsListShown,
            handleSuggestionClick,
            cursor,
            handleClearQuery,
        } = useSearchBar({
            defaultQuery,
            disabled,
            onChange,
            onItemSelect,
            options,
            ref,
        });

        const { width, minWidth, maxWidth, wide } = restProps;

        return (
            <SearchRoot
                className={classOverride.Root}
                data-testid={searchRoot}
                ref={containerRef}
                theme={theme}
                width={width}
                minWidth={minWidth}
                maxWidth={maxWidth}
                wide={wide}
                {...restProps}
            >
                <TextInput
                    after={
                        <SearchClearAction
                            disableClearAction={disableClearAction}
                            handleClearQuery={handleClearQuery}
                            disabled={disabled}
                            searchQuery={searchQuery}
                        />
                    }
                    before={
                        <SearchIcon isLoading={isLoading} disabled={disabled} />
                    }
                    className={classOverride.TextInput}
                    disabled={disabled}
                    onChange={handleChange}
                    onClick={handleClick}
                    placeholder={placeholder}
                    ref={internalInputRef}
                    theme={theme}
                    value={searchQuery}
                    wide={true}
                />
                {isSuggestionsListShown ? (
                    <SearchSuggestionsContainer
                        className={classOverride.SuggestionsContainer}
                        searchQuery={searchQuery}
                        theme={theme}
                    >
                        <SearchSuggestionsList
                            className={classOverride.SuggestionsList}
                            theme={theme}
                        >
                            <SuggestionsList
                                options={options}
                                handleSuggestionClick={handleSuggestionClick}
                                additionalInfo={additionalInfo}
                                icon={icon}
                                cursor={cursor}
                                searchQuery={searchQuery}
                            />
                        </SearchSuggestionsList>
                    </SearchSuggestionsContainer>
                ) : null}
            </SearchRoot>
        );
    },
);

Search.defaultProps = {
    defaultQuery: '',
    placeholder: 'Search',
    disabled: false,
    disableClearAction: false,
    icon: null,
    isLoading: false,
};

Search.propTypes = {
    onClose: PropTypes.func.isRequired,
    defaultQuery: PropTypes.string,
    disabled: PropTypes.bool,
    disableClearAction: PropTypes.bool,
    additionalInfo: PropTypes.element,
    icon: PropTypes.element,
    onChange: PropTypes.func,
    onItemSelect: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            label: PropTypes.string.isRequired,
        }).isRequired,
    ),
    placeholder: PropTypes.string,
    isLoading: PropTypes.bool,
    ref: PropTypes.func,
};
