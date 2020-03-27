import { SVGAttributes } from 'react';
import { ThemeType } from '../../styling';

export type PropsSVGIconType = {
    title?: string;
    theme?: ThemeType;
} & SVGAttributes<SVGElement>;
