/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent } from 'react';
import { SVGIconPropsType, SVGIcon } from '../../components/SVGIcon';

const LensEmptyIconShapeSmall = ({ fill = 'none', stroke = '#A3A3A3' }) => (
    <circle cx="12" cy="12" r="5.5" fill={fill} stroke={stroke} />
);

const LensEmptyIconShapeMedium = ({ fill = 'none', stroke = '#A3A3A3' }) => (
    <circle cx="12" cy="12" r="7.5" fill={fill} stroke={stroke} />
);

const LensEmptyIconShapeLarge = ({ fill = 'none', stroke = '#A3A3A3' }) => (
    <circle cx="12" cy="12" r="9.5" fill={fill} stroke={stroke} />
);

export const LensEmptyIcon: FunctionComponent<SVGIconPropsType> = (props) => {
    const { className, fill, stroke, ...restProps } = props;

    const { small, medium, large } = restProps;

    const sharedIconProps = {
        fill,
        stroke,
    };

    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`LensEmptyIcon ${className || ''}`}>
            {small && <LensEmptyIconShapeSmall {...sharedIconProps} />}
            {medium && <LensEmptyIconShapeMedium {...sharedIconProps} />}
            {(large || hasNoSize) && (
                <LensEmptyIconShapeLarge {...sharedIconProps} />
            )}
        </SVGIcon>
    );
};
