import React, { FunctionComponent } from 'react';

import { SVGIconPropsType } from './type';
import { SVGIconRoot } from './style';
import { useTheme } from '../../styling/useTheme';

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

export const SVGIconGroup: FunctionComponent = ({ children }) => (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {children}
    </g>
);

export const SVGIconPath: FunctionComponent<{
    d: string;
    transform?: string;
}> = ({ d, transform }) => (
    <path d={d} transform={transform} fill="currentColor"></path>
);

SVGIcon.defaultProps = {
    display: 'inline-block',
    height: '1em',
    width: '1em',
    viewBox: '0 0 24 24',
};
