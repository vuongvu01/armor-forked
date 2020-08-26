import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../components/SVGIcon';

const PlayIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M21.282978,10.8389978 L3.87746541,2.13582482 C3.47515954,1.93582507 2.99807321,1.95788344 2.61593848,2.19415228 C2.23380375,2.43042111 2.00086713,2.84736051 2,3.29663677 L2,20.7021494 C2.0006906,21.1514677 2.2336529,21.5684882 2.61589898,21.8046562 C2.99814505,22.0408242 3.4753295,22.0625628 3.87746541,21.862128 L21.282978,13.1597884 C21.7224294,12.9399655 22,12.4907581 22,11.9993931 C22,11.508028 21.7224294,11.0588206 21.282978,10.8389978 Z" />
    </SVGIconGroup>
);

/**
 * @deprecated
 */
export const PlayIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{PlayIconShape}</SVGIcon>;
};