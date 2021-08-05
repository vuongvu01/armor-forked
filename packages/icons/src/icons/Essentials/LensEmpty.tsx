import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const LensEmptyIconShape = (
    <SVGIconGroup>
        <SVGIconPath
            d="M 12, 12
        m -9.5, 0
        a 9.5,9.5 0 1,0 19,0
        a 9.5,9.5 0 1,0 -19,0"
        />
    </SVGIconGroup>
);

export const LensEmptyIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon {...restProps} className={`LensEmptyIcon ${className || ''}`}>
            {LensEmptyIconShape}
        </SVGIcon>
    );
};
