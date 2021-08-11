import React, { FunctionComponent } from 'react';
import { SVGIconPropsType, SVGIcon } from '../../components/SVGIcon';

const LensEmptyIconShape = ({ fill = 'none', stroke = '#A3A3A3' }) => (
    <circle cx="12" cy="12" r="9.5" fill={fill} stroke={stroke} />
);

export const LensEmptyIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, fill, stroke, ...restProps } = props;
    return (
        <SVGIcon {...restProps} className={`LensEmptyIcon ${className || ''}`}>
            <LensEmptyIconShape fill={fill} stroke={stroke} />
        </SVGIcon>
    );
};
