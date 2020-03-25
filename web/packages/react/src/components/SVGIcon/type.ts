import { SVGAttributes } from 'react';
import { ThemeType } from '../../themes';

export type PropsSVGIconType = {
    title?: string;
    theme?: ThemeType;
} & SVGAttributes<SVGElement>;
