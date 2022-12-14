import React, { FunctionComponent } from 'react';
import { useTheme } from '@deliveryhero/armor-system';

import { SVGIconPropsType } from './type';
import { SVGIconRoot } from './style';

export const SVGIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = ({
    children,
    title,
    viewBox,
    width,
    height,
    color,
    ...restProps
}) => {
    const { small, medium, large } = restProps;

    const hasSize = small || medium || large;

    const theme = useTheme();

    return (
        <SVGIconRoot
            viewBox={viewBox}
            focusable="false"
            color={color}
            iconWidth={hasSize ? '24px' : width}
            iconHeight={hasSize ? '24px' : height}
            theme={theme}
            {...restProps}
        >
            {!!title && <title>{title}</title>}
            {children}
        </SVGIconRoot>
    );
};

export const SVGIconGroup: FunctionComponent<React.PropsWithChildren<unknown>> = ({ children }) => (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {children}
    </g>
);

export const SVGIconPath: FunctionComponent<React.PropsWithChildren<{
    d: string;
    transform?: string;
}>> = ({ d, transform }) => (
    <path d={d} transform={transform} fill="currentColor"></path>
);

SVGIcon.defaultProps = {
    display: 'inline-block',
    height: '1em',
    width: '1em',
    viewBox: '0 0 24 24',
};
