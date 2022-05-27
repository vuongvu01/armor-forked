import React, { useState, useEffect, ReactElement } from 'react';

import { RefType } from '../../../type';
import { StepperPropsType } from '../type';

export const useStepper = <E extends HTMLDivElement>(
    {
        children,
        activeIndex = 0,
        onActiveIndexChange,
        vertical,
        minimal,
        readOnly,
        ...restProps
    }: StepperPropsType,
    ref: RefType<E>,
) => {
    const [currentIndex, setCurrentActiveTab] = useState<number>(activeIndex);

    useEffect(() => {
        setCurrentActiveTab(activeIndex);
    }, [activeIndex]);

    const handleClick = (
        event: React.MouseEvent<HTMLInputElement, MouseEvent>,
        stepIndex: number,
    ) => {
        setCurrentActiveTab(stepIndex);
        onActiveIndexChange?.(stepIndex);
    };

    return {
        rootProps: {
            ...restProps,
            vertical,
            minimal,
            ref,
            children: React.Children.toArray(children)
                .filter(React.isValidElement)
                .map((child, index) => {
                    return React.cloneElement(child as ReactElement, {
                        index: index + 1,
                    });
                }),
        },
        contextValue: {
            currentIndex,
            vertical,
            minimal,
            handleClick,
            isActivityLogView: readOnly,
        },
    };
};
