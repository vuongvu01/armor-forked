import React, { useCallback, useContext } from 'react';

import { RefType } from '../../../../type';
import { StepPropsType, StepperPieceVariant } from '../type';
import { StepperContext } from '../../StepperContext';

export const useStep = <E extends HTMLDivElement>(
    { warning, error, index, ...restProps }: StepPropsType,
    ref: RefType<E>,
) => {
    const { currentIndex, handleClick, vertical, minimal } =
        useContext(StepperContext);
    let variant = StepperPieceVariant.incomplete; // default

    if (index === undefined || currentIndex === undefined) {
        console.warn(`index: undefined`);
    } else {
        if (currentIndex === index - 1) {
            variant = StepperPieceVariant.active;
        } else if (currentIndex > index - 1) {
            if (warning) {
                variant = StepperPieceVariant.warning;
            } else if (error) {
                variant = StepperPieceVariant.error;
            } else {
                variant = StepperPieceVariant.complete;
            }
        }
    }

    const handleSelect = useCallback(
        (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
            if (
                index !== undefined &&
                currentIndex !== undefined &&
                currentIndex > index - 1
            ) {
                handleClick?.(event, index - 1);
            }
        },
        [handleClick, index, currentIndex],
    );

    return {
        rootProps: {
            ...restProps,
            ref,
            vertical,
            onClick: handleSelect,
        },
        stepperButtonProps: {
            vertical,
        },
        stepperPieceProps: {
            variant,
            minimal,
            index,
        },
        stepperLineProps: {
            vertical,
            variant,
        },
        variant,
    };
};
