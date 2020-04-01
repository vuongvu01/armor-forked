import React, { FunctionComponent } from 'react';

import { SVGIconRoot } from './style';
import { SVGIconPropsType } from './type';
import { useTheme } from '../../styling';

export const SVGIcon: FunctionComponent<SVGIconPropsType> = ({
    children,
    title,
    viewBox = '0 0 14 14',
    width = '1em',
    height = '1em',
    color,
    ...restProps
}) => {
    const fillColor = color || 'currentColor';
    const theme = useTheme();

    return (
        <SVGIconRoot
            viewBox={viewBox}
            focusable="false"
            color={fillColor}
            iconWidth={width}
            iconHeight={height}
            theme={theme}
            {...restProps}
        >
            {!!title && <title>{title}</title>}
            {children}
        </SVGIconRoot>
    );
};
