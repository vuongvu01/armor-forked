import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const LensIconShape = (
    <SVGIconGroup>
        <SVGIconPath
            d="M 12, 12
        m -10, 0
        a 10,10 0 1,0 20,0
        a 10,10 0 1,0 -20,0"
        />
    </SVGIconGroup>
);

export const LensIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon {...restProps} className={`LensIcon ${className || ''}`}>
            {LensIconShape}
        </SVGIcon>
    );
};
