import React, { FunctionComponent } from 'react';
import { useTheme } from '../../styling';
import { fontSizeRegular } from '../../tokens/font-sizes';

import { SVGIconRoot } from './style';
import { PropsSVGIconType } from './type';

export const SVGIcon: FunctionComponent<PropsSVGIconType> = ({
    children,
    title,
    viewBox = '0 0 14 14',
    width,
    height,
    color,
    ...restProps
}) => {
    const theme = useTheme();
    const fillColor = color || 'currentColor';
    const defaultWidth = width || theme.typography.pxToRem(fontSizeRegular);

    return (
        <SVGIconRoot
            width={defaultWidth}
            height={height}
            viewBox={viewBox}
            focusable="false"
            color={fillColor}
            {...restProps}
        >
            {!!title && <title>{title}</title>}
            {children}
        </SVGIconRoot>
    );
};
