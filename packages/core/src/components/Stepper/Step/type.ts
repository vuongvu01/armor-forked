import { HTMLAttributes, ReactChild, ReactElement } from 'react';
import { StepperContextType } from '../type';

export enum StepperPieceVariant {
    active = 'active',
    complete = 'complete',
    incomplete = 'incomplete',
    warning = 'warning',
    error = 'error',
    info = 'info',
    success = 'success',
    log = 'log',
}

type StepEffectivePropsType = Partial<{
    /**
      The step's title
    */
    title: string;
    /**
      The step's extra info (only capable in vertical mode)
    */
    extraInfo: ReactChild;
    /**
      The step's description
    */
    description: ReactChild;
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
    /**
      If there is a success in the step
    */
    success: boolean;
    /**
      If there is a info in the step
    */
    info: boolean;
    /**
      Set icon for each step instead of the default number
    */
    icon: ReactElement;
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

export type StepRootPropsType = StepPropsType & StepperContextType;
