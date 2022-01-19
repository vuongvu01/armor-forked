import React, { FunctionComponent } from 'react';
import { useTheme } from '@deliveryhero/armor-system';

import { SVGIllustrationPropsType } from './type';
import { SVGIllustrationRoot } from './style';

export const SVGIllustration: FunctionComponent<SVGIllustrationPropsType> = ({
    children,
    title,
    viewBox,
    width,
    height,
    color,
    ...restProps
}) => {
    const theme = useTheme();

    return (
        <SVGIllustrationRoot
            viewBox={viewBox}
            focusable="false"
            color={color}
            illustrationWidth={width}
            illustrationHeight={height}
            theme={theme.armor}
            {...restProps}
        >
            {!!title && <title>{title}</title>}
            {children}
        </SVGIllustrationRoot>
    );
};

export const SVGIllustrationGroup: FunctionComponent = ({ children }) => (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {children}
    </g>
);

export const SVGIllustrationPath: FunctionComponent<{
    d: string;
    fill: string;
}> = ({ d, fill }) => <path d={d} fill={fill}></path>;

SVGIllustration.defaultProps = {
    display: 'inline-block',
    viewBox: '0 0 50 50',
};
