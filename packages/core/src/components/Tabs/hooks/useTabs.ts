import React, { useCallback, useEffect } from 'react';
import { useControlledState } from '@deliveryhero/armor-system';

import { RefType } from '../../../type';
import { TabsPropsType } from '../type';
import { injectTabIndex } from '../utils';

export const useTabs = <E extends HTMLDivElement>(
    {
        children,
        disabled,
        onSwitch,
        wide,

        defaultActiveTabIndex,
        activeTabIndex,
        onActiveTabIndexChange,

        removePaddingLeft,
        removePaddingRight,

        defaultActiveTab = 0,

        ...restProps
    }: TabsPropsType,
    ref: RefType<E>,
) => {
    const [currentlyActiveTab, setCurrentlyActiveTab] = useControlledState<
        number
    >(
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
    }, [defaultActiveTab, onSwitch]);

    const handleClick = useCallback(
        (
            event: React.MouseEvent<HTMLInputElement, MouseEvent>,
            tabIndex: number,
            contentValue?: number,
        ) => {
            setCurrentlyActiveTab(tabIndex);

            if (onSwitch && contentValue !== undefined) {
                onSwitch(contentValue);
            }
        },
        [onSwitch, setCurrentlyActiveTab],
    );

    return {
        rootProps: {
            ...restProps,
            ref,
            wide,
            disabled,
            children: injectTabIndex(children), // todo: better use context api in Tab, instead of cloning the nodes here
            removePaddingLeft,
            removePaddingRight,
        },
        contextValue: {
            currentlyActiveTab,
            wide,
            handleClick,
        },
        disabled,
    };
};
