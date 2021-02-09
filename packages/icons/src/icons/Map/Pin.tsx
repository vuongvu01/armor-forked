import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const PinIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M11.9382716,13.1111111 C12.6201046,13.1111111 13.1728395,13.663846 13.1728395,14.345679 L13.1728395,14.345679 L13.1728395,20.7654321 C13.1728395,21.4472651 12.6201046,22 11.9382716,22 C11.2564386,22 10.7037037,21.4472651 10.7037037,20.7654321 L10.7037037,20.7654321 L10.7037037,14.345679 C10.7037037,13.663846 11.2564386,13.1111111 11.9382716,13.1111111 Z M11.9382716,2 C14.6656037,2 16.8765432,4.21093951 16.8765432,6.9382716 C16.8765432,9.6656037 14.6656037,11.8765432 11.9382716,11.8765432 C9.21093951,11.8765432 7,9.6656037 7,6.9382716 C7,4.21093951 9.21093951,2 11.9382716,2 Z" />
    </SVGIconGroup>
);

export const PinIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon {...restProps} className={`PinIcon ${className || ''}`}>
            {PinIconShape}
        </SVGIcon>
    );
};
