/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const PinMarkerLarge = (
    <Fragment>
        <SVGIconPath d="M12 2C7.58384 2.00505 4.0051 5.54648 4 9.91661C4 15.3724 9.50568 20.3232 11.1924 21.7107C11.6603 22.0954 12.3388 22.0954 12.8067 21.7107C14.4909 20.3232 20 15.3707 20 9.91578C19.9944 5.54597 16.4158 2.00505 12 2ZM12 14.0833C9.67462 14.0833 7.7895 12.2178 7.7895 9.91664C7.7895 7.61547 9.67462 5.75 12 5.75C14.3254 5.75 16.2106 7.61547 16.2106 9.91664C16.2106 11.0217 15.7669 12.0815 14.9773 12.8629C14.1877 13.6443 13.1167 14.0833 12 14.0833Z" />
    </Fragment>
);

const PinMarkerMedium = (
    <Fragment>
        <SVGIconPath d="M12 4C8.41187 4.00404 5.50415 6.8373 5.5 10.3335C5.5 14.6984 9.97337 18.6592 11.3438 19.7692C11.724 20.0769 12.2753 20.0769 12.6555 19.7692C14.0239 18.6592 18.5 14.697 18.5 10.3329C18.4955 6.83689 15.5879 4.00404 12 4ZM12 13.667C10.1106 13.667 8.57898 12.1746 8.57898 10.3336C8.57898 8.49257 10.1106 7.00013 12 7.00013C13.8894 7.00013 15.4211 8.49257 15.4211 10.3336C15.4211 11.2177 15.0607 12.0655 14.4191 12.6907C13.7775 13.3158 12.9074 13.667 12 13.667Z" />
    </Fragment>
);

const PinMarkerSmall = (
    <Fragment>
        <SVGIconPath d="M11.7502 6C9.12798 6.00303 7.00303 8.12798 7 10.7502C7 14.0238 10.2691 16.9944 11.2706 17.8269C11.5485 18.0577 11.9513 18.0577 12.2292 17.8269C13.2292 16.9944 16.5003 14.0228 16.5003 10.7497C16.497 8.12767 14.3721 6.00303 11.7502 6ZM11.7502 13.2503C10.3694 13.2503 9.25009 12.1309 9.25009 10.7502C9.25009 9.36942 10.3694 8.25009 11.7502 8.25009C13.1309 8.25009 14.2503 9.36942 14.2503 10.7502C14.2503 11.4132 13.9869 12.0491 13.518 12.518C13.0491 12.9869 12.4132 13.2503 11.7502 13.2503Z" />
    </Fragment>
);

export const PinMarkerIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`PinMarkerIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && PinMarkerSmall}
                {medium && PinMarkerMedium}
                {(large || hasNoSize) && PinMarkerLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

PinMarkerIcon.displayName = 'PinMarkerIcon';
