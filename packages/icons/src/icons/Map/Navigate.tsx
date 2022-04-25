import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const NavigateIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M2.54699 9.5898L20.7835 2.06354C21.1129 1.93167 21.4893 2.00887 21.7402 2.25979C21.9911 2.51072 22.0683 2.88706 21.9365 3.21651L14.4084 21.4504C14.2639 21.7986 13.915 22.0174 13.5385 21.9959C13.1621 21.9743 12.8404 21.7171 12.7366 21.3546L10.5273 13.6225C10.5062 13.549 10.4485 13.4916 10.3748 13.4709L2.64277 11.2616C2.28027 11.1578 2.02303 10.8362 2.00146 10.4597C1.97989 10.0833 2.19871 9.73432 2.54699 9.5898Z" />
    </SVGIconGroup>
);

export const NavigateIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`NavigateIcon ${className || ''}`}
        >
            {NavigateIconShape}
        </SVGIcon>
    );
};
