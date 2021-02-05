import React, { useCallback, useEffect, useState } from 'react';

import { ReferenceType } from '../../../type';
import { TabsPropsType } from '../type';
import { preProcessTabChildren } from '../utils';

export const useTabs = (
    {
        children,
        defaultActiveTab = 0,
        disabled,
        onSwitch,
        wide,

        ...restProps
    }: TabsPropsType,
    ref: ReferenceType,
) => {
    const [currentlyActiveTab, setCurrentlyActiveTab] = useState(
        defaultActiveTab,
    );

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
