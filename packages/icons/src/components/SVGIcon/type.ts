import { SVGAttributes } from 'react';
import {
    ThemeType,
    MarginPropsType,
    ColorPropsType,
    ScalarType,
} from '@deliveryhero/armor-system';

export type SVGIconPropsType = {
    title?: string;
    theme?: ThemeType;
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
