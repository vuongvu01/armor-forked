import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

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
    /**
      If set, the activity log (readOnly) view is active
    */
    readOnly: boolean;
}> &
    HTMLAttributes<HTMLElement> &
    MarginPropsType;

export type StepperPropsType = StepperEffectivePropsType;
export type StepperRootPropsType = StepperEffectivePropsType &
    ComponentElementStylePropsType;

export type StepperContextType = Partial<{
    currentIndex: number;
    vertical: boolean;
    minimal: boolean;
    isActivityLogView: boolean;
    handleClick: (
        event: React.MouseEvent<HTMLInputElement, MouseEvent>,
        tabIndex: number,
        contentValue?: number,
    ) => void;
}>;
