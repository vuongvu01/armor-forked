import { SVGAttributes } from 'react';
import { ScalarType } from '../../type';
import { ThemeType } from '../../styling/type';
import { MarginAttributesType } from '../../system/attributes/margin';
import { ColorAttributesType } from '../../system/attributes/color';

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
} & MarginAttributesType &
    ColorAttributesType &
    SVGAttributes<SVGElement>;

export type SVGIconRootPropsType = Omit<
    SVGIconPropsType,
    'width' | 'height'
> & {
    iconWidth?: ScalarType;
    iconHeight?: ScalarType;
};
