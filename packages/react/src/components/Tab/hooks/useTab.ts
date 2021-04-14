import React, { useCallback, useContext, useState } from 'react';

import { ReferenceType } from '../../../type';
import { TabPropsType } from '../type';
import TabsContext from '../../Tabs/TabsContext';

export const useTab = (
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
    ref: ReferenceType,
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
        tabLabelContainerProps: {
            disabled,
        },
        tagProps: {
            to: disabled ? undefined : to,
            href: disabled ? undefined : href,
            target: disabled ? undefined : target,
            rel: disabled ? undefined : rel,
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
