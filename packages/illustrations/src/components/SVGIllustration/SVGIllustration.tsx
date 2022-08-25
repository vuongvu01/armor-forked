import React, { FC, PropsWithChildren } from 'react';

import { SVGIllustrationPropsType } from './type';
import { SVGIllustrationRoot } from './style';

export const SVGIllustration: FC<
    PropsWithChildren<SVGIllustrationPropsType>
> = ({ children, title, viewBox, width, height, color, ...restProps }) => {
    return (
        <SVGIllustrationRoot
            viewBox={viewBox}
            focusable="false"
            color={color}
            illustrationWidth={width}
            illustrationHeight={height}
            {...restProps}
        >
            {!!title && <title>{title}</title>}
            {children}
        </SVGIllustrationRoot>
    );
};

export const SVGIllustrationGroup: FC<PropsWithChildren<unknown>> = ({
    children,
}) => (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {children}
    </g>
);

export const SVGIllustrationPath: FC<
    PropsWithChildren<{
        d: string;
        fill: string;
    }>
> = ({ d, fill }) => <path d={d} fill={fill}></path>;

SVGIllustration.defaultProps = {
    display: 'inline-block',
    viewBox: '0 0 50 50',
};
