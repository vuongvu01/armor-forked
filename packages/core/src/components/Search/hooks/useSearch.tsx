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
    useScrollToNode,
    useNavigationControl,
    getWindow,
} from '@deliveryhero/armor-system';

import {
    INITIAL_CURSOR_POSITION,
    SEARCH_ITEM_FOCUSED_CLASS,
} from '../constants';
import {
    SearchGroupObjectIndexType,
    SearchPropsType,
    SuggestionObjectType,
} from '../type';
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

        large,
        loadingPlaceholder,
        ...restProps
    }: SearchPropsType,
    ref: RefType<E>,
) => {
    const [cursorPosition, setCursorPosition] = useState<number>(
        INITIAL_CURSOR_POSITION,
    );
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

    const setIsOptionsListShown = useCallback((isShow = false) => {
        setIsSuggestionsListShown((isShowing) => {
            if (!isShowing) {
                setCursorPosition(INITIAL_CURSOR_POSITION);
            }
            return isShow;
        });
    }, []);

    // todo: setting isCondition to true is not the right approach, fix
    useDetectClickOutsideComponent(containerRef, setIsOptionsListShown, true);

    const scrollToCurrent = useScrollToNode({
        className: SEARCH_ITEM_FOCUSED_CLASS,
    });

    useEffect(() => {
        scrollToCurrent();
    }, [cursorPosition]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleEnterClick = useCallback(() => {
        const win = getWindow();
        if (!win) {
            return;
        }

        const focusedElement = document.querySelector(
            `.${SEARCH_ITEM_FOCUSED_CLASS}`,
        );
        const selectedLabel = focusedElement?.textContent;

        if (options?.length && selectedLabel) {
            setSearchQuery(selectedLabel);
            setIsSuggestionsListShown(false);

            const selectedOption = options.find(
                (option: { label: string }) => option.label === selectedLabel,
            );

            if (selectedOption) {
                onItemSelect?.(selectedOption);
            }

            setIsOptionsListShown();
        }
    }, [options, setSearchQuery, onItemSelect, setIsOptionsListShown]);

    useNavigationControl({
        yLength: options?.length || 0,
        setCursorY: setCursorPosition,
        targetElement: internalInputRef,
        onEnterKeyPress: handleEnterClick,
        onNavigationKeyPress: () => setIsOptionsListShown(true),
        onEscapeKeyPress: () => setIsOptionsListShown(),
        onOtherKeysPress: () => setIsOptionsListShown(true),
        disabled,
    });

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
        (_: any, suggestionOption: SuggestionObjectType) => {
            const currentQuery = suggestionOption.label || '';
            setSearchQuery(currentQuery);

            if (onItemSelect) {
                onItemSelect(suggestionOption);
            }

            setIsOptionsListShown();
        },
        [onItemSelect, setIsOptionsListShown, setSearchQuery],
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
            large,
        },
        searchIconProps: {
            disabled,
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
            cursorPosition,
            searchQuery,
            noResultsLabel,
        },
        disabled,
        isSuggestionsListShown:
            (isSuggestionsListShown || isLoading) && enableSuggestions,
        isLoading,
        loadingPlaceholder,
    };
};
