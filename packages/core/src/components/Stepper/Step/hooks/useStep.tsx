import React, { useCallback, useContext, useState, useEffect } from 'react';

import { RefType } from '../../../../type';
import { StepPropsType, StepperPieceVariant } from '../type';
import { StepperContext } from '../../StepperContext';
import { getStepVariantByStatus } from '../utils';

export const useStep = <E extends HTMLDivElement>(
    {
        warning,
        error,
        success,
        info,
        index,
        icon,
        title,
        description,
        extraInfo,
        ...restProps
    }: StepPropsType,
    ref: RefType<E>,
) => {
    const [variant, setVariant] = useState(StepperPieceVariant.incomplete); // default
    const { currentIndex, handleClick, vertical, minimal, isActivityLogView } =
        useContext(StepperContext);

    useEffect(() => {
        if (isActivityLogView) {
            setVariant(
                getStepVariantByStatus({
                    warning,
                    error,
                    success,
                    info,
                }),
            );
            return;
        }

        if (index === undefined || currentIndex === undefined) {
            console.warn(`index: undefined`);
            return;
        }

        if (currentIndex === index - 1) {
            setVariant(StepperPieceVariant.active);
        } else if (currentIndex > index - 1) {
            if (warning) {
                setVariant(StepperPieceVariant.warning);
            } else if (error) {
                setVariant(StepperPieceVariant.error);
            } else {
                setVariant(StepperPieceVariant.complete);
            }
        } else {
            setVariant(StepperPieceVariant.incomplete);
        }
    }, [currentIndex, error, index, info, isActivityLogView, success, warning]);

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
            isActivityLogView,
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
        icon,
        isIconShown: !!icon && !minimal,
        title,
        description,
        extraInfo,
        isExtraInfoShown: vertical && extraInfo,
        vertical,
    };
};
