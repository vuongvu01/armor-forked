import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const CalendarClockIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M4.08333 15.75C3.85321 15.75 3.66667 15.5635 3.66667 15.3333V8.25C3.66667 8.01988 3.85321 7.83333 4.08333 7.83333H15.3333C15.5635 7.83333 15.75 8.01988 15.75 8.25V9.975C16.3029 9.89833 16.8638 9.89833 17.4167 9.975V4.5C17.4167 4.03976 17.0436 3.66667 16.5833 3.66667H14.5C14.3849 3.66667 14.2917 3.57339 14.2917 3.45833V2.625C14.2917 2.27982 14.0118 2 13.6667 2C13.3215 2 13.0417 2.27982 13.0417 2.625V5.75C13.0417 6.09518 12.7618 6.375 12.4167 6.375C12.0715 6.375 11.7917 6.09518 11.7917 5.75V4.08333C11.7917 3.85321 11.6051 3.66667 11.375 3.66667H7.83333C7.71827 3.66667 7.625 3.57339 7.625 3.45833V2.625C7.625 2.27982 7.34518 2 7 2C6.65482 2 6.375 2.27982 6.375 2.625V5.75C6.375 6.09518 6.09518 6.375 5.75 6.375C5.40482 6.375 5.125 6.09518 5.125 5.75V4.08333C5.125 3.85321 4.93845 3.66667 4.70833 3.66667H2.83333C2.3731 3.66667 2 4.03976 2 4.5V15.75C2 16.6705 2.74619 17.4167 3.66667 17.4167H9.97417C9.8975 16.8638 9.8975 16.3029 9.97417 15.75H4.08333ZM11.1667 16.5833C11.1667 13.5918 13.5918 11.1667 16.5833 11.1667C19.5734 11.1703 21.9963 13.5933 22 16.5833C22 19.5749 19.5749 22 16.5833 22C13.5918 22 11.1667 19.5749 11.1667 16.5833ZM13.1188 18.0184C13.6992 19.4197 15.0666 20.3333 16.5833 20.3333C18.6535 20.331 20.331 18.6535 20.3333 16.5833C20.3333 15.0666 19.4197 13.6992 18.0184 13.1188C16.6171 12.5384 15.0042 12.8592 13.9317 13.9317C12.8592 15.0042 12.5384 16.6171 13.1188 18.0184ZM18.25 15.9592H17.2083V14.5C17.2083 14.1548 16.9285 13.875 16.5833 13.875C16.2382 13.875 15.9583 14.1548 15.9583 14.5V16.5833C15.9583 16.9285 16.2382 17.2083 16.5833 17.2083H18.25C18.5952 17.2083 18.875 16.9285 18.875 16.5833C18.875 16.2382 18.5952 15.9583 18.25 15.9583V15.9592Z" />
    </SVGIconGroup>
);

export const CalendarClockIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`CalendarClockIcon ${className || ''}`}
        >
            {CalendarClockIconShape}
        </SVGIcon>
    );
};
