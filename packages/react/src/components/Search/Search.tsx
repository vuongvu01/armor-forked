import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { useSearchClassName } from './utils';
import { SearchPropsType } from './type';
import { searchTheme } from './theme';
import { SEARCH_CLASS_PREFIX, searchRoot } from './constants';
import {
    SearchRoot,
    SearchSuggestionsContainer,
    SearchSuggestionsList,
    SearchTextInput,
} from './style';
import { useSearchBar } from './utils/useSearchBar';
import { SuggestionsList } from './SuggestionsList';
import { SearchIcon } from './SearchIcon';
import { SearchClearAction } from './SearchClearAction';

export const Search: FunctionComponent<SearchPropsType> = forwardRef(
    function Search(
        {
            additionalInfo,
            className,
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
        const theme = useComponentTheme(SEARCH_CLASS_PREFIX, searchTheme);

        const classOverride = useSearchClassName(
            SEARCH_CLASS_PREFIX,
            className,
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
                data-testid={searchRoot}
                {...restProps}
                className={classOverride.Root}
                ref={containerRef}
                theme={theme}
                width={width}
                minWidth={minWidth}
                maxWidth={maxWidth}
                wide={wide}
            >
                <SearchTextInput
                    before={
                        <SearchIcon isLoading={isLoading} disabled={disabled} />
                    }
                    after={
                        <SearchClearAction
                            disableClearAction={disableClearAction}
                            handleClearQuery={handleClearQuery}
                            disabled={disabled}
                            searchQuery={searchQuery}
                        />
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
                                theme={theme}
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
};
