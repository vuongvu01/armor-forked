import React, {
    ChangeEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useDetectClickOutsideComponent } from '../../Dropdown/utils';

import { initialCursor } from '../constants';
import { SearchPropsType, UseSearchBarType } from '../type';

export const useSearchBar = ({
    defaultQuery,
    disabled,
    onChange,
    onItemSelect,
    options,
    ref,
}: SearchPropsType): UseSearchBarType => {
    const [cursor, setCursor] = useState<number>(initialCursor);
    const [searchQuery, setSearchQuery] = useState(defaultQuery);
    const [isSuggestionsListShown, setIsSuggestionsListShown] = useState(
        !!options,
    );

    const internalInputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref && internalInputRef) {
            Object.assign(ref, internalInputRef);
        }
    }, [internalInputRef]);

    useEffect(() => {
        setIsSuggestionsListShown(!!options);
    }, [options]);

    const setIsOptionsListShown = (isHidden = false) => {
        setIsSuggestionsListShown(isHidden);
        if (cursor !== initialCursor) {
            setCursor(initialCursor);
        }
    };

    useDetectClickOutsideComponent(containerRef, setIsOptionsListShown);

    const scrollToCurrent = useCallback(() => {
        const focused = document.querySelector('.suggestion-focused');

        if (focused) {
            focused.scrollIntoView({ block: 'center' });
        }
    }, []);

    const focusOnHighlightedSuggestion = () =>
        setTimeout(() => scrollToCurrent(), 0);

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

                focusOnHighlightedSuggestion();
            }
        }
    }, [options, isSuggestionsListShown]);

    const handleArrowUpClick = useCallback(() => {
        if (options && options.length) {
            if (!isSuggestionsListShown) {
                setIsOptionsListShown(true);
            } else {
                setCursor(prevState =>
                    prevState > 0 ? prevState - 1 : options.length - 1,
                );

                focusOnHighlightedSuggestion();
            }
        }
    }, [options, isSuggestionsListShown]);

    const handleEnterClick = useCallback(() => {
        if (options && options.length) {
            setSearchQuery(options[cursor].label);
            setIsSuggestionsListShown(false);

            if (onItemSelect) {
                onItemSelect(options[cursor]);
            }

            setIsOptionsListShown();
        }
    }, [options, onItemSelect, cursor]);

    const searchInputKeyHandler = useCallback(
        (event: KeyboardEvent) => {
            const { key, target } = event;

            if (target === internalInputRef.current) {
                if (key === 'Escape') {
                    setIsOptionsListShown();
                } else if (key === 'ArrowDown') {
                    event.preventDefault();
                    handleArrowDownClick();
                } else if (key === 'ArrowUp') {
                    event.preventDefault();
                    handleArrowUpClick();
                } else if (key === 'Enter') {
                    handleEnterClick();
                }
            }
        },
        [
            internalInputRef,
            options,
            isSuggestionsListShown,
            cursor,
            onItemSelect,
        ],
    );

    useEffect(() => {
        if (!disabled) {
            // eslint-disable-next-line no-unused-expressions
            internalInputRef?.current?.addEventListener(
                'keydown',
                searchInputKeyHandler,
            );

            return () => {
                // eslint-disable-next-line no-unused-expressions
                internalInputRef?.current?.removeEventListener(
                    'keydown',
                    searchInputKeyHandler,
                );
            };
        }

        return () => {};
    }, [disabled, internalInputRef, cursor, options, isSuggestionsListShown]);

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            // @ts-ignore
            const query = event?.target?.value || '';

            setSearchQuery(query);

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
                onChange(event);
            }
        },
        [setSearchQuery, onChange],
    );

    const handleSuggestionClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>, suggestionIndex: number) => {
            if (options && options.length > 0) {
                const query = options[suggestionIndex].label || '';
                setSearchQuery(query);

                if (onItemSelect) {
                    onItemSelect(options[suggestionIndex]);
                }

                setIsOptionsListShown();
            }
        },
        [onItemSelect],
    );

    return {
        searchQuery,
        containerRef,
        handleChange,
        handleClick,
        internalInputRef,
        isSuggestionsListShown,
        handleSuggestionClick,
        cursor,
        handleClearQuery,
    };
};
