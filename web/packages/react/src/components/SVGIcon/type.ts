import { SVGAttributes } from 'react';
import { ThemeType } from 'src/styling';
import { MarginAttributesType } from 'src/system/attributes';
import { ScalarType } from 'src/type';

export type SVGIconPropsType = {
    title?: string;
    theme?: ThemeType;
    width?: ScalarType;
    height?: ScalarType;
    fontSize?: ScalarType;
    display?: 'inline-block' | 'block';
} & MarginAttributesType &
    SVGAttributes<SVGElement>;

export type SVGIconRootPropsType = Omit<
    SVGIconPropsType,
    'width' | 'height'
> & {
    iconWidth?: ScalarType;
    iconHeight?: ScalarType;
};
