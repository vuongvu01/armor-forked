import { SVGAttributes } from 'react';
import {
    ThemeType,
    MarginPropsType,
    ColorPropsType,
    ScalarType,
} from '@deliveryhero/armor-system';

export type SVGIllustrationPropsType = Partial<{
    title: string;
    theme: ThemeType;
    width: ScalarType;
    height: ScalarType;
    fontSize: ScalarType;
    display: 'inline-block' | 'block';
}> &
    MarginPropsType &
    ColorPropsType &
    SVGAttributes<SVGElement>;

export type SVGIllustrationRootPropsType = Omit<
    SVGIllustrationPropsType,
    'width' | 'height'
> &
    Partial<{
        illustrationWidth: ScalarType;
        illustrationHeight: ScalarType;
    }>;
