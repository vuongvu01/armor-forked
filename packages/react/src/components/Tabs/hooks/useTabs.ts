import React, { useCallback, useEffect, useState } from 'react';

import { ReferenceType } from '../../../type';
import { TabsPropsType } from '../type';
import { preProcessTabChildren } from '../utils';
import { useControlledState } from '../../../system/hooks/useControlledState';

export const useTabs = (
    {
        children,
        disabled,
        onSwitch,
        wide,

        defaultActiveTabIndex,
        activeTabIndex,
        onActiveTabIndexChange,

        defaultActiveTab = 0,

        ...restProps
    }: TabsPropsType,
    ref: ReferenceType,
) => {
    const [currentlyActiveTab, setCurrentlyActiveTab] = useControlledState(
        defaultActiveTabIndex !== undefined
            ? defaultActiveTabIndex
            : defaultActiveTab,
        activeTabIndex,
        onActiveTabIndexChange,
    );

    // todo: we should not trigger any on* event handlers on the first render, unconditionally
    // todo: somehow refactor this
    useEffect(() => {
        if (onSwitch && defaultActiveTab) {
            onSwitch(defaultActiveTab);
        }
    }, []);

    const handleClick = useCallback(
        (
            event: React.MouseEvent<HTMLInputElement, MouseEvent>,
            tabIndex: number,
            contentValue: number,
        ) => {
            setCurrentlyActiveTab(tabIndex);

            if (onSwitch) {
                onSwitch(contentValue);
            }
        },
        [onSwitch],
    );

    return {
        rootProps: {
            ...restProps,
            ref,
            wide,
            disabled,
            children: preProcessTabChildren(children),
        },
        contextValue: {
            currentlyActiveTab,
            wide,
            handleClick,
        },
        disabled,
    };
};
