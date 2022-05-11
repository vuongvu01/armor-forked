import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const BikeIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M14.0833 6.95833C15.1764 6.95833 16.0625 6.07223 16.0625 4.97917C16.0625 3.8861 15.1764 3 14.0833 3C12.9903 3 12.1042 3.8861 12.1042 4.97917C12.1042 6.07223 12.9903 6.95833 14.0833 6.95833Z" /><SVGIconPath d="M2 17.0625C2 14.9914 3.67893 13.3125 5.75 13.3125C7.82107 13.3125 9.5 14.9914 9.5 17.0625C9.5 19.1336 7.82107 20.8125 5.75 20.8125C3.67893 20.8125 2 19.1336 2 17.0625ZM3.66667 17.0625C3.66667 18.2131 4.59941 19.1458 5.75 19.1458C6.90059 19.1458 7.83333 18.2131 7.83333 17.0625C7.83333 15.9119 6.90059 14.9792 5.75 14.9792C4.59941 14.9792 3.66667 15.9119 3.66667 17.0625Z" /><SVGIconPath d="M14.5 17.0625C14.5 14.9914 16.1789 13.3125 18.25 13.3125C20.3211 13.3125 22 14.9914 22 17.0625C22 19.1336 20.3211 20.8125 18.25 20.8125C16.1789 20.8125 14.5 19.1336 14.5 17.0625ZM16.1667 17.0625C16.1667 18.2131 17.0994 19.1458 18.25 19.1458C19.4006 19.1458 20.3333 18.2131 20.3333 17.0625C20.3333 15.9119 19.4006 14.9792 18.25 14.9792C17.0994 14.9792 16.1667 15.9119 16.1667 17.0625Z" /><SVGIconPath d="M10.935 11.4283L12.1442 10.0458C13.2892 10.8207 14.6408 11.233 16.0233 11.2292H16.5833C17.2737 11.2292 17.8333 10.6695 17.8333 9.97917C17.8333 9.28881 17.2737 8.72917 16.5833 8.72917H16.0233C14.8464 8.72605 13.7183 8.25857 12.8842 7.42833C12.6447 7.17582 12.3057 7.0422 11.9583 7.06333C11.6125 7.07496 11.2869 7.22944 11.0592 7.49L8.1425 10.8233C7.90598 11.0945 7.79782 11.4545 7.84569 11.8112C7.89356 12.1679 8.09283 12.4866 8.3925 12.6858L8.94583 13.0542C10.4354 14.0585 11.1619 15.8697 10.7792 17.625C10.6713 18.0651 10.81 18.5291 11.1418 18.8377C11.4735 19.1464 11.9463 19.2513 12.3775 19.112C12.8086 18.9728 13.1307 18.6111 13.2192 18.1667C13.7623 15.671 12.8837 13.0793 10.935 11.4283Z" />
    </SVGIconGroup>
);

export const BikeIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`BikeIcon ${className || ''}`}
        >
            {BikeIconShape}
        </SVGIcon>
    );
};