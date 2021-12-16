import React, {
    ChangeEvent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import {
    useDetectClickOutsideComponent,
    useControlledState,
    useRootRef,
} from '@deliveryhero/armor-system';

import { initialCursor } from '../constants';
import { SearchGroupObjectIndexType, SearchPropsType } from '../type';
import { RefType } from '../../../type';

export const useSearch = <E extends HTMLInputElement>(
    {
        defaultQuery = '',
        query,
        disabled = false,
        disableClearAction = false,
        isLoading = false,
        placeholder = 'Search',
        icon = null,
        renderItemIcon,
        error,
        autoFocus,

        onChange,
        onQueryChange,
        onItemSelect,
        options,
        groups,
        suggestionListHeight = 100,
        enableSuggestions = true,
        noResultsLabel,

        additionalInfo,
        renderItemAdditionalInfo,

        ...restProps
    }: SearchPropsType,
    ref: RefType<E>,
) => {
    const [cursor, setCursor] = useState<number>(initialCursor);
    const [searchQuery, setSearchQuery] = useControlledState(
        defaultQuery,
        query,
        onQueryChange,
    );
    const [isSuggestionsListShown, setIsSuggestionsListShown] = useState(
        !!options,
    );

    const internalInputRef = useRootRef<E>(ref);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsSuggestionsListShown(!!options);
    }, [options]);

    useEffect(() => {
        setSearchQuery(defaultQuery);
    }, [defaultQuery, setSearchQuery]);

    const setIsOptionsListShown = useCallback(
        (isHidden = false) => {
            setIsSuggestionsListShown(isHidden);
            if (cursor !== initialCursor) {
                setCursor(initialCursor);
            }
        },
        [cursor],
    );

    // todo: setting isCondition to true is not the right approach, fix
    useDetectClickOutsideComponent(containerRef, setIsOptionsListShown, true);

    const scrollToCurrent = useCallback(() => {
        setTimeout(() => {
            const focused = document.querySelector('.suggestion-focused');

            if (focused) {
                focused.scrollIntoView({ block: 'center' });
            }
        }, 0);
    }, []);

    const handleArrowDownClick = useCallback(() => {
        if (options && options.length) {
            if (!isSuggestionsListShown) {
                setIsOptionsListShown(true);
            } else {
                setCursor(prevState =>
                    options && prevState < options?.length - 1
                        ? prevState + 1
                        : 0,
                );

                scrollToCurrent();
            }
        }
    }, [
        options,
        isSuggestionsListShown,
        setIsOptionsListShown,
        scrollToCurrent,
    ]);

    const handleArrowUpClick = useCallback(() => {
        if (options && options.length) {
            if (!isSuggestionsListShown) {
                setIsOptionsListShown(true);
            } else {
                setCursor(prevState =>
                    prevState > 0 ? prevState - 1 : options.length - 1,
                );

                scrollToCurrent();
            }
        }
    }, [
        options,
        isSuggestionsListShown,
        setIsOptionsListShown,
        scrollToCurrent,
    ]);

    const handleEnterClick = useCallback(() => {
        if (options && options.length) {
            setSearchQuery(options[cursor].label);
            setIsSuggestionsListShown(false);

            if (onItemSelect) {
                onItemSelect(options[cursor]);
            }

            setIsOptionsListShown();
        }
    }, [options, setSearchQuery, cursor, onItemSelect, setIsOptionsListShown]);

    const searchInputKeyHandler = useCallback(
        (event: KeyboardEvent) => {
            const { key, target } = event;

            if (target === internalInputRef.current) {
                if (key === 'Escape') {
                    setIsOptionsListShown();
                } else if (key === 'ArrowDown') {
                    event.stopPropagation();
                    handleArrowDownClick();
                } else if (key === 'ArrowUp') {
                    event.stopPropagation();
                    handleArrowUpClick();
                } else if (key === 'Enter' && isSuggestionsListShown) {
                    handleEnterClick();
                } else if (key) {
                    setIsOptionsListShown(true);
                }
            }
        },
        [
            internalInputRef,
            isSuggestionsListShown,
            setIsOptionsListShown,
            handleArrowDownClick,
            handleArrowUpClick,
            handleEnterClick,
        ],
    );

    useEffect(() => {
        if (!disabled) {
            const internalInputRefCurrent = internalInputRef?.current;
            // eslint-disable-next-line no-unused-expressions
            internalInputRefCurrent?.addEventListener(
                'keydown',
                searchInputKeyHandler,
            );

            return () => {
                // eslint-disable-next-line no-unused-expressions
                internalInputRefCurrent?.removeEventListener(
                    'keydown',
                    searchInputKeyHandler,
                );
            };
        }

        setSearchQuery(defaultQuery);

        return () => {};
    }, [
        disabled,
        internalInputRef,
        cursor,
        options,
        isSuggestionsListShown,
        setSearchQuery,
        defaultQuery,
        searchInputKeyHandler,
    ]);

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            // @ts-ignore
            const currentQuery = event?.target?.value || '';

            setSearchQuery(currentQuery);

            if (onChange) {
                onChange(event);
            }
        },
        [setSearchQuery, onChange],
    );

    const handleClick = useCallback(() => {
        setIsSuggestionsListShown(!!(options && options.length));
    }, [setIsSuggestionsListShown, options]);

    const handleClearQuery = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();

            setSearchQuery('');

            if (onChange) {
                onChange({
                    target: {
                        value: '',
                    },
                } as ChangeEvent<HTMLInputElement>);
            }
        },
        [setSearchQuery, onChange],
    );

    const handleSuggestionClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>, suggestionIndex: number) => {
            if (options && options.length > 0) {
                const currentQuery = options[suggestionIndex].label || '';
                setSearchQuery(currentQuery);

                if (onItemSelect) {
                    onItemSelect(options[suggestionIndex]);
                }

                setIsOptionsListShown();
            }
        },
        [onItemSelect, options, setIsOptionsListShown, setSearchQuery],
    );

    const groupIndex = useMemo<SearchGroupObjectIndexType>(() => {
        if (!groups || !groups.length) {
            return {};
        }

        return groups.reduce<SearchGroupObjectIndexType>((result, group) => {
            // eslint-disable-next-line no-param-reassign
            result[group.id] = group;
            return result;
        }, {});
    }, [groups]);

    return {
        rootProps: {
            ...restProps,
            ref: containerRef,
        },
        textInputProps: {
            disabled,
            error,
            onChange: handleChange,
            onClick: handleClick,
            placeholder,
            ref: internalInputRef,
            value: searchQuery,
            wide: true,
            autoFocus,
        },
        searchIconProps: {
            disabled,
            isLoading,
        },
        searchClearActionProps: {
            disableClearAction: disabled || disableClearAction,
            handleClearQuery,
            searchQuery,
            disabled,
        },
        suggestionsContainerProps: {
            searchQuery,
            suggestionListHeight,
        },
        suggestionListContainerProps: {},
        suggestionListProps: {
            additionalInfo,
            renderItemAdditionalInfo,
            options,
            groups,
            groupIndex,
            handleSuggestionClick,
            icon,
            renderItemIcon,
            cursor,
            searchQuery,
            noResultsLabel,
        },

        disabled,
        isSuggestionsListShown: isSuggestionsListShown && enableSuggestions,
    };
};
