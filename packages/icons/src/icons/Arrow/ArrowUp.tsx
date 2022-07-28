/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowUpLarge = (
    <Fragment>
        <SVGIconPath d="M12.2504 5.74956C12.8031 5.74888 13.3294 5.98627 13.6946 6.40107L21.8895 15.716C22.4282 16.358 22.3558 17.3126 21.7266 17.8661C21.0973 18.4196 20.1412 18.3695 19.5733 17.7532L12.4075 9.60768C12.3678 9.56245 12.3106 9.53651 12.2504 9.53651C12.1903 9.53651 12.1331 9.56245 12.0934 9.60768L4.92761 17.7532C4.35964 18.3695 3.4036 18.4196 2.77433 17.8661C2.14505 17.3126 2.07271 16.358 2.61141 15.716L10.8038 6.40441C11.1696 5.9886 11.6966 5.75009 12.2504 5.74956Z" />
    </Fragment>
);

const ArrowUpMedium = (
    <Fragment>
        <SVGIconPath d="M11.9996 6.99965C12.4418 6.9991 12.8628 7.18902 13.155 7.52086L19.7109 14.9728C20.1418 15.4864 20.0839 16.2501 19.5805 16.6929C19.0771 17.1357 18.3123 17.0956 17.8579 16.6026L12.1253 10.0861C12.0935 10.05 12.0478 10.0292 11.9996 10.0292C11.9515 10.0292 11.9057 10.05 11.874 10.0861L6.14137 16.6026C5.68699 17.0956 4.92216 17.1357 4.41874 16.6929C3.91532 16.2501 3.85745 15.4864 4.2884 14.9728L10.8423 7.52353C11.135 7.19089 11.5565 7.00007 11.9996 6.99965Z" />
    </Fragment>
);

const ArrowUpSmall = (
    <Fragment>
        <SVGIconPath d="M12.2497 8.24974C12.5813 8.24933 12.8971 8.39177 13.1162 8.64065L18.0331 14.2296C18.3564 14.6148 18.313 15.1876 17.9354 15.5197C17.5578 15.8518 16.9842 15.8217 16.6434 15.452L12.3439 10.5646C12.3202 10.5375 12.2858 10.5219 12.2497 10.5219C12.2136 10.5219 12.1793 10.5375 12.1555 10.5646L7.85603 15.452C7.51525 15.8217 6.94162 15.8518 6.56405 15.5197C6.18649 15.1876 6.14309 14.6148 6.4663 14.2296L11.3817 8.64265C11.6012 8.39317 11.9174 8.25006 12.2497 8.24974Z" />
    </Fragment>
);

export const ArrowUpIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`ArrowUpIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && ArrowUpSmall}
                {medium && ArrowUpMedium}
                {(large || hasNoSize) && ArrowUpLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

ArrowUpIcon.displayName = 'ArrowUpIcon';
