import { ThemeType } from '../styling';

export type ComponentStylePropsType = {
    theme?: ThemeType;
};

export type ComponentElementStylePropsType = {
    className: string;
    theme: ThemeType;
};
