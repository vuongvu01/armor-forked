import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const HamburgerMenuIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M21,17.9130435 C21.5522847,17.9130435 22,18.3607587 22,18.9130435 L22,19.5217391 C22,20.0740239 21.5522847,20.5217391 21,20.5217391 L3,20.5217391 C2.44771525,20.5217391 2,20.0740239 2,19.5217391 L2,18.9130435 C2,18.3607587 2.44771525,17.9130435 3,17.9130435 L21,17.9130435 Z M21,10.9565217 C21.5522847,10.9565217 22,11.404237 22,11.9565217 L22,12.5652174 C22,13.1175021 21.5522847,13.5652174 21,13.5652174 L3,13.5652174 C2.44771525,13.5652174 2,13.1175021 2,12.5652174 L2,11.9565217 C2,11.404237 2.44771525,10.9565217 3,10.9565217 L21,10.9565217 Z M21,4 C21.5522847,4 22,4.44771525 22,5 L22,5.60869565 C22,6.1609804 21.5522847,6.60869565 21,6.60869565 L3,6.60869565 C2.44771525,6.60869565 2,6.1609804 2,5.60869565 L2,5 C2,4.44771525 2.44771525,4 3,4 L21,4 Z" />
    </SVGIconGroup>
);

export const HamburgerMenuIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`HamburgerMenuIcon ${className || ''}`}
        >
            {HamburgerMenuIconShape}
        </SVGIcon>
    );
};
