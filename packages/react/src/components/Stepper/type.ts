import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';
import { StepperPieceVariant } from './Step/type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;

    variant?: StepperPieceVariant;
};

/** 👉 PROPS TYPE */
type StepperEffectivePropsType = Partial<{
    /**
       Either a vertical or horizontal stepper
    */
    vertical: boolean;
    /**
       A minial stepper
    */
    minimal: boolean;
    /**
      The active step index
    */
    activeIndex: number;
    onActiveIndexChange: (index: number) => void;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type StepperPropsType = StepperEffectivePropsType;
export type StepperRootPropsType = StepperEffectivePropsType &
    ComponentElementStylePropsType;
