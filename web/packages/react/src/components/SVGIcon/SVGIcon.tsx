import React, { FunctionComponent } from 'react';

import { useTheme } from 'src/styling';
import { SVGIconPropsType } from './type';
import { SVGIconRoot } from './style';

export const SVGIcon: FunctionComponent<SVGIconPropsType> = ({
    children,
    title,
    viewBox,
    width,
    height,
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

SVGIcon.defaultProps = {
    display: 'inline-block',
    height: '1em',
    width: '1em',
    viewBox: '0 0 10 10',
};
