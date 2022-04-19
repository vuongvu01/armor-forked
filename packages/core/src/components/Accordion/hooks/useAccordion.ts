import { useCallback, useMemo, MouseEvent } from 'react';
import { useControlledState } from '@deliveryhero/armor-system';

import { RefType } from '../../../type';
import { AccordionPropsType } from '../type';

export const useAccordion = <E extends HTMLDivElement>(
    {
        disabled,
        expanded,
        defaultExpanded,
        onToggle,
        ...restProps
    }: AccordionPropsType,
    ref: RefType<E>,
) => {
    const [isExpanded, setIsExpanded] = useControlledState(
        defaultExpanded,
        expanded,
    );

    const handleHeaderToggle = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            setIsExpanded(!isExpanded);
            onToggle?.(event, !isExpanded);
        },
        [isExpanded, onToggle, setIsExpanded],
    );

    const contextValue = useMemo(
        () => ({
            disabled,
            isExpanded: disabled ? false : isExpanded,
            onToggle: disabled ? undefined : handleHeaderToggle,
        }),
        [disabled, isExpanded, handleHeaderToggle],
    );

    return {
        rootProps: {
            isExpanded,
            ref,
            disabled,
            ...restProps,
        },
        contextProps: {
            value: contextValue,
        },
        disabled,
        isExpanded,
    };
};
