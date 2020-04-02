import { SVGAttributes } from 'react';
import { ThemeType } from '../../styling';
import { MarginAttributesType } from '../../system/attributes';
import { ScalarType } from '../../type';

export type SVGIconPropsType = {
    title?: string;
    theme?: ThemeType;
    width?: ScalarType;
    height?: ScalarType;
    fontSize?: ScalarType;
} & MarginAttributesType &
    SVGAttributes<SVGElement>;

export type SVGIconRootPropsType = Omit<
    SVGIconPropsType,
    'width' | 'height'
> & {
    iconWidth?: ScalarType;
    iconHeight?: ScalarType;
};
