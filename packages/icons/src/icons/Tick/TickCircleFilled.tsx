import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const TickCircleFilledIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C21.993571,6.47981766 17.5201823,2.00642897 12,2 Z M17.7725,8.83333333 L12.0683333,16.5741667 C11.9322947,16.754658 11.7294402,16.8729209 11.5053516,16.9023815 C11.2812629,16.9318421 11.0547342,16.8700296 10.8766667,16.7308333 L6.80333333,13.4741667 C6.44388801,13.1865184 6.38568503,12.6619453 6.67333333,12.3025 C6.96098164,11.9430547 7.48555468,11.8848517 7.845,12.1725 L11.2416667,14.89 L16.4308333,7.8475 C16.6009933,7.59215835 16.8977092,7.45098554 17.2031763,7.48003127 C17.5086433,7.50907699 17.7734353,7.70364148 17.892422,7.98647701 C18.0114087,8.26931254 17.9653375,8.59465473 17.7725,8.83333333 Z" />
    </SVGIconGroup>
);

export const TickCircleFilledIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`TickCircleFilledIcon ${className || ''}`}
        >
            {TickCircleFilledIconShape}
        </SVGIcon>
    );
};
