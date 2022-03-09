import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowRightCircleFilledIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M12 2C6.47715 2 2 6.47715 2 12C2.00597 17.5204 6.47963 21.994 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.1206 11.3314C15.3112 11.4993 15.4203 11.7411 15.42 11.995C15.4197 12.2495 15.3101 12.4917 15.1191 12.6598L10.8404 16.4242C10.5454 16.6717 10.1068 16.6385 9.85243 16.3493C9.59811 16.0602 9.62113 15.6208 9.90429 15.3599L13.6472 12.0672C13.668 12.049 13.6799 12.0227 13.6799 11.995C13.6799 11.9674 13.668 11.9411 13.6472 11.9229L9.90429 8.63019C9.62113 8.3692 9.59811 7.9299 9.85243 7.64075C10.1068 7.3516 10.5454 7.31836 10.8404 7.56589L15.1206 11.3314Z" />
    </SVGIconGroup>
);

export const ArrowRightCircleFilledIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`ArrowRightCircleFilledIcon ${className || ''}`}
        >
            {ArrowRightCircleFilledIconShape}
        </SVGIcon>
    );
};