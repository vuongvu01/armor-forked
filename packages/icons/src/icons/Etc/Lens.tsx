/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent } from 'react';
import { SVGIconPropsType, SVGIcon } from '../../components/SVGIcon';

const LensIconShapeSmall = ({ fill = '#1C5ECE', stroke = 'none' }) => (
    <circle cx="12" cy="12" r="6" fill={fill} stroke={stroke} />
);

const LensIconShapeMedium = ({ fill = '#1C5ECE', stroke = 'none' }) => (
    <circle cx="12" cy="12" r="8" fill={fill} stroke={stroke} />
);

const LensIconShapeLarge = ({ fill = '#1C5ECE', stroke = 'none' }) => (
    <circle cx="12" cy="12" r="10" fill={fill} stroke={stroke} />
);

export const LensIcon: FunctionComponent<
    React.PropsWithChildren<SVGIconPropsType>
> = (props) => {
    const { className, fill, stroke, ...restProps } = props;

    const { small, medium, large } = restProps;

    const sharedIconProps = {
        fill,
        stroke,
    };

    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`LensIcon ${className || ''}`}>
            {small && <LensIconShapeSmall {...sharedIconProps} />}
            {medium && <LensIconShapeMedium {...sharedIconProps} />}
            {(large || hasNoSize) && (
                <LensIconShapeLarge {...sharedIconProps} />
            )}
        </SVGIcon>
    );
};
