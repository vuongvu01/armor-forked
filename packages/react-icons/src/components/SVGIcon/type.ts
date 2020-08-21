import { SVGAttributes } from 'react';
import { ScalarType } from '../../type';

export type SVGIconPropsType = {
    title?: string;
    width?: ScalarType;
    height?: ScalarType;
    fontSize?: ScalarType;
    display?: 'inline-block' | 'block';
} & SVGAttributes<SVGElement>;

export type SVGIconRootPropsType = Omit<
    SVGIconPropsType,
    'width' | 'height'
> & {
    iconWidth?: ScalarType;
    iconHeight?: ScalarType;
};
