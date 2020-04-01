import { SVGAttributes } from 'react';
import { ThemeType } from '../../styling';
import { SpanOuterAttributesType } from '../../system/attributes';
import { ScalarType } from '../../type';

export type SVGIconPropsType = {
    title?: string;
    theme?: ThemeType;
    width?: ScalarType;
    height?: ScalarType;
    fontSize?: ScalarType;
} & SpanOuterAttributesType &
    SVGAttributes<SVGElement>;

export type SVGIconRootPropsType = Omit<
    SVGIconPropsType,
    'width' | 'height'
> & {
    iconWidth?: ScalarType;
    iconHeight?: ScalarType;
};
