import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowLeftCircleFilledIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M12 2C17.5228 2 22 6.47715 22 12C21.994 17.5204 17.5204 21.994 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM8.87939 11.3314C8.68879 11.4993 8.5797 11.7411 8.58002 11.995C8.58026 12.2495 8.68986 12.4917 8.88092 12.6598L13.1596 16.4242C13.4546 16.6717 13.8932 16.6385 14.1476 16.3493C14.4019 16.0602 14.3789 15.6208 14.0957 15.3599L10.3528 12.0672C10.332 12.049 10.3201 12.0227 10.3201 11.995C10.3201 11.9674 10.332 11.9411 10.3528 11.9229L14.0957 8.63019C14.3789 8.3692 14.4019 7.9299 14.1476 7.64075C13.8932 7.3516 13.4546 7.31836 13.1596 7.56589L8.87939 11.3314Z" />
    </SVGIconGroup>
);

export const ArrowLeftCircleFilledIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`ArrowLeftCircleFilledIcon ${className || ''}`}
        >
            {ArrowLeftCircleFilledIconShape}
        </SVGIcon>
    );
};
