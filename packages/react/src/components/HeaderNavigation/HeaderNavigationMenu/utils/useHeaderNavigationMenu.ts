import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    HeaderNavigationMenuPropsType,
    UseHeaderNavigationMenuPropsType,
} from '../type';
import { useDetectEscapeKeyPressed, useInternalRef } from '../../../../utils';
import { ReferenceType } from '../../../../type';

export const useHeaderNavigationMenu = (
    {
        /**
         * @deprecated
         * Use defaultExpanded instead
         */
        isMenuExpanded,
        defaultExpanded,
    }: HeaderNavigationMenuPropsType,
    ref: ReferenceType,
): UseHeaderNavigationMenuPropsType => {
    const internalRef = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(
        defaultExpanded || isMenuExpanded,
    );

    useInternalRef(ref, internalRef);

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
