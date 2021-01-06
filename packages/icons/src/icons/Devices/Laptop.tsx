import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const LaptopIconShape = (
    <SVGIconGroup>
        <SVGIconPath
            d="M9.08328192,15.2500951 C9.31340251,15.2500951 9.49995211,15.4366448 9.49995211,15.6667654 C9.49995211,16.258437 10.5266275,16.9167759 11.9999733,16.9167759 C13.4733191,16.9167759 14.5,16.258437 14.5,15.6667654 C14.5,15.4366448 14.686544,15.2500951 14.9166646,15.2500951 L14.9166646,15.2500951 L21.5833877,15.2500951 C21.7116231,15.2500951 21.8327307,15.3090795 21.9117238,15.4100965 C21.9907016,15.51123 22.0186766,15.6431122 21.9875577,15.7675995 C21.4535892,17.9135025 19.5255231,19.4190305 17.3141849,19.4167996 L17.3141849,19.4167996 L6.68576164,19.4167996 C4.47442341,19.4190305 2.54635734,17.9135025 2.01238877,15.7675995 C1.98135303,15.6431646 2.00934898,15.5113701 2.08828761,15.4102961 C2.16722625,15.3092221 2.28831199,15.2500951 2.41655886,15.2500951 L2.41655886,15.2500951 Z M17.6941881,4 C18.9212704,4.00091916 19.9157877,4.99543649 19.9167069,6.2225188 L19.9167069,6.2225188 L19.9167069,13.1525774 C19.9167069,13.6128186 19.5436077,13.9859178 19.0833665,13.9859178 C18.6231253,13.9859178 18.2500261,13.6128186 18.2500261,13.1525774 L18.2500261,13.1525774 L18.2500261,6.2225188 C18.2500261,5.91553793 18.001169,5.66668076 17.6941881,5.66668076 L17.6941881,5.66668076 L6.30575842,5.66668076 C5.99877755,5.66668076 5.74992039,5.91553793 5.74992039,6.2225188 L5.74992039,6.2225188 L5.74992039,13.1525774 C5.74992039,13.6128186 5.37682119,13.9859178 4.91658001,13.9859178 C4.45633882,13.9859178 4.08323962,13.6128186 4.08323962,13.1525774 L4.08323962,13.1525774 L4.08323962,6.2225188 C4.08415879,4.99543649 5.07867612,4.00091916 6.30575842,4 L6.30575842,4 Z"
        />
    </SVGIconGroup>
);

export const LaptopIcon: FunctionComponent<SVGIconPropsType> = props => {
    const {className, ...restProps} = props;
    return <SVGIcon {...restProps} className={`LaptopIcon ${className || ''}`}>{LaptopIconShape}</SVGIcon>;
};
