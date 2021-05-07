import React, { useCallback, useContext } from 'react';

import { RefType } from '../../../type';
import { TabPropsType } from '../type';
import TabsContext from '../../Tabs/TabsContext';

export const useTab = <E extends HTMLDivElement>(
    {
        children,
        disabled,
        label,
        tabIndex,
        value,
        tag: Tag = 'span',
        to,
        href,
        target,
        rel,
        onClick,
        ...restProps
    }: TabPropsType,
    ref: RefType<E>,
) => {
    const { currentlyActiveTab, wide, handleClick } = useContext(TabsContext);

    const matchingContentViewValue =
        typeof value !== 'undefined' ? value : tabIndex;
    const isActive = currentlyActiveTab === tabIndex;

    const handleSelect = useCallback(
        (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
            if (!disabled && handleClick) {
                handleClick(event, tabIndex, matchingContentViewValue);
            }

            if (onClick) {
                onClick(event);
            }
        },
        [handleClick, tabIndex, matchingContentViewValue],
    );

    return {
        rootProps: {
            ...restProps,
            ref,
            wide,
            disabled,
            isActive,
            onClick: handleSelect,
        },
        tagProps: {
            to: disabled ? undefined : to,
            href: disabled ? undefined : href,
            target: disabled ? undefined : target,
            rel: disabled ? undefined : rel,
            disabled,
        },
        tabLabelProps: {
            disabled,
            isActive,
            wide,
        },
        disabled,
        isActive,
        Tag,
        label,
        children,
    };
};
