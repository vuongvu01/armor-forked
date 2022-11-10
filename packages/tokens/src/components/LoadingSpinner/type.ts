import { ComponentElementStylePropsType } from '../type';

/** 👉 PROPS TYPE */
export type LoadingSpinnerPropsType = Partial<{
    primaryColor: string;
    secondaryColor: string;
}> &
    ComponentElementStylePropsType;
