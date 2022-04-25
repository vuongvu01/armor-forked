import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const NotificationIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M19.8333 16.5833C19.143 16.5833 18.5833 16.0237 18.5833 15.3333V11.2817C18.6828 8.01197 16.3828 5.15831 13.1667 4.56083V2.83333C13.1667 2.3731 12.7936 2 12.3333 2C11.8731 2 11.5 2.3731 11.5 2.83333V4.56083C8.28382 5.15831 5.98391 8.01197 6.08333 11.2817V15.3333C6.08333 16.0237 5.52369 16.5833 4.83333 16.5833C4.3731 16.5833 4 16.9564 4 17.4167C4 17.8769 4.3731 18.25 4.83333 18.25H19.8333C20.2936 18.25 20.6667 17.8769 20.6667 17.4167C20.6667 16.9564 20.2936 16.5833 19.8333 16.5833ZM14.1967 19.5H10.47C10.3641 19.5002 10.2752 19.5798 10.2633 19.685C10.2543 19.7619 10.2498 19.8392 10.25 19.9167C10.25 21.0673 11.1827 22 12.3333 22C13.4839 22 14.4167 21.0673 14.4167 19.9167C14.4169 19.8392 14.4124 19.7619 14.4033 19.685C14.3922 19.5794 14.3029 19.4994 14.1967 19.5Z" />
    </SVGIconGroup>
);

export const NotificationIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`NotificationIcon ${className || ''}`}
        >
            {NotificationIconShape}
        </SVGIcon>
    );
};
