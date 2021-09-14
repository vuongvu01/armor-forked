import { HTMLAttributes } from 'react';

export enum StepperPieceVariant {
    active = 'active',
    complete = 'complete',
    incomplete = 'incomplete',
    warning = 'warning',
    error = 'error',
}

type StepEffectivePropsType = Partial<{
    /**
      The step's title
    */
    title: string;
    /**
      The step's description
    */
    description: string;
    /**
      @ignore
    */
    index: number;
    /**
      If there is a warning in the step
    */
    warning: boolean;
    /**
      If there is a error in the step
    */
    error: boolean;
}> &
    HTMLAttributes<HTMLElement>;

export type StepPropsType = StepEffectivePropsType;

export type StepperPiecePropsType = {
    variant: string;
    minimal?: boolean;
    index?: number;
};

export type StepperLinePropsType = {
    vertical: boolean;
    variant: string;
};
