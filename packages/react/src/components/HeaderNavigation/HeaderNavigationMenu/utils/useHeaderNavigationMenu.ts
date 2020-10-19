import { useCallback, useEffect, useRef, useState } from 'react';
import {
    HeaderNavigationMenuPropsType,
    UseHeaderNavigationMenuPropsType,
} from '../type';
import { useDetectEscapeKeyPressed, useInternalRef } from '../../../../utils';

export const useHeaderNavigationMenu = ({
    ref,
    isMenuExpanded,
}: HeaderNavigationMenuPropsType): UseHeaderNavigationMenuPropsType => {
    const internalRef = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(isMenuExpanded);

    useInternalRef(ref, internalRef);

    const handleMenuClick = useCallback(
        (event: MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();

            setIsExpanded(!isExpanded);
        },
        [isExpanded],
    );

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        internalRef?.current?.addEventListener('click', handleMenuClick);

        return () => {
            // eslint-disable-next-line no-unused-expressions
            internalRef?.current?.removeEventListener('click', handleMenuClick);
        };
    }, [internalRef, isExpanded]);

    useDetectEscapeKeyPressed(internalRef, setIsExpanded, isExpanded);

    return { internalRef, isExpanded, setIsExpanded };
};
