import React, { useCallback, useEffect, useState } from 'react';
import { HeaderNavigationMenuPropsType } from '../type';
import { useDetectEscapeKeyPressed } from '../../../../utils';
import { RefType } from '../../../../type';
import { useRootRef } from '../../../../system';

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

    const internalRef = useRootRef<E>(ref);

    const handleMenuClick = useCallback(
        (event: MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();

            setIsExpanded(!isExpanded);
        },
        [isExpanded],
    );

    const handleMenuKeyPress = useCallback(
        (event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                event.stopPropagation();

                setIsExpanded(!isExpanded);
            }
        },
        [setIsExpanded, isExpanded],
    );

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        internalRef?.current?.addEventListener('click', handleMenuClick);

        return () => {
            // eslint-disable-next-line no-unused-expressions
            internalRef?.current?.removeEventListener('click', handleMenuClick);
        };
    }, [internalRef, isExpanded, handleMenuClick]);

    useDetectEscapeKeyPressed(internalRef, setIsExpanded, isExpanded);

    return { internalRef, isExpanded, setIsExpanded, handleMenuKeyPress };
};
