import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const TickDefaultIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M21.4783057,2.23433368 C20.9172749,1.83188078 20.1364118,1.96066975 19.7341535,2.52199942 L8.03841747,18.8380663 L4.13428329,14.9283138 C3.81855245,14.6122493 3.35828531,14.4887326 2.92686004,14.6042913 C2.49543477,14.7198499 2.15839514,15.0569277 2.04270071,15.4885507 C1.92700629,15.9201738 2.05023381,16.3807682 2.36596467,16.6968327 L7.31175685,21.6446833 C7.57442251,21.8975853 7.93297918,22.0254509 8.29629543,21.9957816 C8.65961169,21.9661123 8.99270208,21.7817651 9.21090772,21.4895939 L21.7658033,3.9795058 C22.168021,3.41814697 22.0393073,2.63682725 21.4783057,2.23433368 Z" />
    </SVGIconGroup>
);

export const TickDefaultIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`TickDefaultIcon ${className || ''}`}
        >
            {TickDefaultIconShape}
        </SVGIcon>
    );
};
