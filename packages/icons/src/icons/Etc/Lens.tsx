import React, { FunctionComponent } from 'react';
import { SVGIconPropsType, SVGIcon } from '../../components/SVGIcon';

const LensIconShape = ({ fill = '#1C5ECE', stroke = 'none' }) => (
    <circle cx="12" cy="12" r="10" fill={fill} stroke={stroke} />
);

export const LensIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, fill, stroke, ...restProps } = props;
    return (
        <SVGIcon {...restProps} className={`LensIcon ${className || ''}`}>
            <LensIconShape fill={fill} stroke={stroke} />
        </SVGIcon>
    );
};
