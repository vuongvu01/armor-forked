/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const TimeSeparatorLarge = (
    <Fragment>
        <SVGIconPath d="M11.8462 9.69231C13.9703 9.69231 15.6923 7.97033 15.6923 5.84615C15.6923 3.72198 13.9703 2 11.8462 2C9.72198 2 8 3.72198 8 5.84615C8 7.97033 9.72198 9.69231 11.8462 9.69231ZM11.8462 22C13.9703 22 15.6923 20.278 15.6923 18.1538C15.6923 16.0297 13.9703 14.3077 11.8462 14.3077C9.72198 14.3077 8 16.0297 8 18.1538C8 20.278 9.72198 22 11.8462 22Z" />
    </Fragment>
);

const TimeSeparatorMedium = (
    <Fragment>
        <SVGIconPath d="M12.0769 10.1538C13.7763 10.1538 15.1538 8.77626 15.1538 7.07692C15.1538 5.37759 13.7763 4 12.0769 4C10.3776 4 9 5.37759 9 7.07692C9 8.77626 10.3776 10.1538 12.0769 10.1538ZM12.0769 20C13.7763 20 15.1538 18.6224 15.1538 16.9231C15.1538 15.2237 13.7763 13.8462 12.0769 13.8462C10.3776 13.8462 9 15.2237 9 16.9231C9 18.6224 10.3776 20 12.0769 20Z" />
    </Fragment>
);

const TimeSeparatorSmall = (
    <Fragment>
        <SVGIconPath d="M12.3077 10.6154C13.5822 10.6154 14.6154 9.5822 14.6154 8.30769C14.6154 7.03319 13.5822 6 12.3077 6C11.0332 6 10 7.03319 10 8.30769C10 9.5822 11.0332 10.6154 12.3077 10.6154ZM12.3077 18C13.5822 18 14.6154 16.9668 14.6154 15.6923C14.6154 14.4178 13.5822 13.3846 12.3077 13.3846C11.0332 13.3846 10 14.4178 10 15.6923C10 16.9668 11.0332 18 12.3077 18Z" />
    </Fragment>
);

export const TimeSeparatorIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (
    props,
) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon
            {...restProps}
            className={`TimeSeparatorIcon ${className || ''}`}
        >
            <SVGIconGroup>
                {small && TimeSeparatorSmall}
                {medium && TimeSeparatorMedium}
                {(large || hasNoSize) && TimeSeparatorLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

TimeSeparatorIcon.displayName = 'TimeSeparatorIcon';
