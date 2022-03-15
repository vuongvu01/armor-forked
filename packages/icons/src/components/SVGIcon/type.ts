import { SVGAttributes } from 'react';
import {
    MarginPropsType,
    ColorPropsType,
    ScalarType,
    RootThemeType,
} from '@deliveryhero/armor-system';

export type SVGIconPropsType = {
    title?: string;
    theme?: RootThemeType;
    width?: ScalarType;
    height?: ScalarType;
    fontSize?: ScalarType;
    display?: 'inline-block' | 'block';

    // sizes
    small?: boolean;
    medium?: boolean;
    large?: boolean;
} & MarginPropsType &
    ColorPropsType &
    SVGAttributes<SVGElement>;

export type SVGIconRootPropsType = Omit<
    SVGIconPropsType,
    'width' | 'height'
> & {
    iconWidth?: ScalarType;
    iconHeight?: ScalarType;
};
