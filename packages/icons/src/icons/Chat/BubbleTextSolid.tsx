import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const BubbleTextSolidIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M2.83333 2H21.1667C22.1792 2 23 2.814 23 3.81813V16.0905C23 17.0946 22.1792 17.9086 21.1667 17.9086H12.286L6.56325 21.8385C6.28282 22.0309 5.91786 22.0531 5.61586 21.896C5.31387 21.7389 5.12477 21.4285 5.125 21.0903V17.9086H2.83333C2.3519 17.9201 1.88611 17.7388 1.54113 17.4055C1.19615 17.0723 1.00109 16.6153 1 16.1378V3.81813C1 2.814 1.82081 2 2.83333 2ZM6.5 8.818H17.5C18.0063 8.818 18.4167 8.411 18.4167 7.90894C18.4167 7.40688 18.0063 6.99988 17.5 6.99988H6.5C5.99374 6.99988 5.58334 7.40688 5.58334 7.90894C5.58334 8.411 5.99374 8.818 6.5 8.818ZM6.50003 12.9088H17.5C18.0063 12.9088 18.4167 12.5018 18.4167 11.9997C18.4167 11.4977 18.0063 11.0907 17.5 11.0907H6.50003C5.99377 11.0907 5.58336 11.4977 5.58336 11.9997C5.58336 12.5018 5.99377 12.9088 6.50003 12.9088Z" />
    </SVGIconGroup>
);

export const BubbleTextSolidIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`BubbleTextSolidIcon ${className || ''}`}
        >
            {BubbleTextSolidIconShape}
        </SVGIcon>
    );
};
