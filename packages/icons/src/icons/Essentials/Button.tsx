import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ButtonIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M22.1945 5.81592C22.7103 6.33834 23 7.0469 23 7.78571V16.2143C23 16.9531 22.7103 17.6617 22.1945 18.1841C21.6788 18.7065 20.9793 19 20.25 19H3.75C3.02065 19 2.32118 18.7065 1.80546 18.1841C1.28973 17.6617 1 16.9531 1 16.2143V7.78571C1 7.0469 1.28973 6.33834 1.80546 5.81592C2.32118 5.29349 3.02065 5 3.75 5H20.25C20.9793 5 21.6788 5.29349 22.1945 5.81592ZM20.8982 16.8709C21.0701 16.6967 21.1667 16.4606 21.1667 16.2143V7.78571C21.1667 7.53944 21.0701 7.30326 20.8982 7.12912C20.7263 6.95497 20.4931 6.85714 20.25 6.85714H3.75C3.50688 6.85714 3.27373 6.95497 3.10182 7.12912C2.92991 7.30326 2.83333 7.53944 2.83333 7.78571V16.2143C2.83333 16.4606 2.92991 16.6967 3.10182 16.8709C3.27373 17.045 3.50688 17.1429 3.75 17.1429H20.25C20.4931 17.1429 20.7263 17.045 20.8982 16.8709ZM18.6035 12.8665C18.8559 12.6474 19.0004 12.3316 19 12C18.9997 11.6677 18.8545 11.3515 18.6014 11.132L16.5425 9.21658C16.1518 8.89336 15.5708 8.93676 15.2339 9.31433C14.8971 9.6919 14.9276 10.2655 15.3026 10.6063L16.6518 11.9058C16.6794 11.9296 16.6951 11.9639 16.6951 12C16.6951 12.0361 16.6794 12.0704 16.6518 12.0942L15.3026 13.3937C14.9276 13.7345 14.8971 14.3081 15.2339 14.6857C15.5708 15.0632 16.1518 15.1066 16.5425 14.7834L18.6035 12.8665Z" />
    </SVGIconGroup>
);

export const ButtonIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`ButtonIcon ${className || ''}`}
        >
            {ButtonIconShape}
        </SVGIcon>
    );
};