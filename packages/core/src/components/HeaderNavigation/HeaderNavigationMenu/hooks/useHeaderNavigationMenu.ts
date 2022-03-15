import React, { useCallback, useEffect, useState, useRef } from 'react';
import {
    useRootRef,
    useDetectEscapeKeyPressed,
    useDetectClickOutsideComponent,
} from '@deliveryhero/armor-system';

import { HeaderNavigationMenuPropsType } from '../type';
import { RefType } from '../../../../type';

export const useHeaderNavigationMenu = <E extends HTMLDivElement>(
    {
        /**
         * @deprecated
         * Use defaultExpanded instead
         */
        isMenuExpanded,
        defaultExpanded,
    }: HeaderNavigationMenuPropsType,
    ref: RefType<E>,
) => {
    const [isExpanded, setIsExpanded] = useState(
        defaultExpanded || isMenuExpanded,
    );

    const menuRootRef = useRootRef<E>(ref);
    const menuTitleRef = useRef<E>(null);

    const handleMenuClick = useCallback((event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();

        setIsExpanded((expanded) => !expanded);
    }, []);

    const handleMenuKeyPress = useCallback((event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            setIsExpanded((expanded) => !expanded);
        }
    }, []);

    useEffect(() => {
        const internalRefCurrent = menuTitleRef?.current;
        internalRefCurrent?.addEventListener('click', handleMenuClick);

        return () => {
            // eslint-disable-next-line no-unused-expressions
            internalRefCurrent?.removeEventListener('click', handleMenuClick);
        };
    }, [menuTitleRef, isExpanded, handleMenuClick]);

    useDetectEscapeKeyPressed(menuTitleRef, setIsExpanded, isExpanded);

    useDetectClickOutsideComponent(menuRootRef, setIsExpanded, isExpanded);

    return {
        menuTitleRef,
        menuRootRef,
        isExpanded,
        setIsExpanded,
        handleMenuKeyPress,
    };
};
