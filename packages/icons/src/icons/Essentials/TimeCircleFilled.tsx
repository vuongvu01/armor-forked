import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const TimeCircleFilledIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17316C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8078C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 9.34783 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2V2ZM16.3333 16.35C16.2592 16.4315 16.1697 16.4974 16.0699 16.5441C15.9702 16.5907 15.8621 16.6172 15.7521 16.6218C15.6421 16.6265 15.5322 16.6092 15.4288 16.5712C15.3255 16.5331 15.2307 16.4749 15.15 16.4L10.9833 12.6167C10.9045 12.5352 10.8432 12.4384 10.8031 12.3324C10.763 12.2264 10.7449 12.1133 10.75 12V7.41667C10.75 7.19565 10.8378 6.98369 10.9941 6.82741C11.1504 6.67113 11.3623 6.58333 11.5833 6.58333C11.8043 6.58333 12.0163 6.67113 12.1726 6.82741C12.3289 6.98369 12.4167 7.19565 12.4167 7.41667V11.6333L16.275 15.175C16.4382 15.3233 16.536 15.5302 16.5469 15.7504C16.5579 15.9707 16.481 16.1863 16.3333 16.35Z" />
    </SVGIconGroup>
);

export const TimeCircleFilledIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`TimeCircleFilledIcon ${className || ''}`}
        >
            {TimeCircleFilledIconShape}
        </SVGIcon>
    );
};