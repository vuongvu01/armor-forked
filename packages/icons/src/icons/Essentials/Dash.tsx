import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const DashIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M2 10.5C2 9.94772 2.44772 9.5 3 9.5H21C21.5523 9.5 22 9.94772 22 10.5V13.5C22 14.0523 21.5523 14.5 21 14.5H3C2.44772 14.5 2 14.0523 2 13.5V10.5Z" />
    </SVGIconGroup>
);

export const DashIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`DashIcon ${className || ''}`}
        >
            {DashIconShape}
        </SVGIcon>
    );
};
