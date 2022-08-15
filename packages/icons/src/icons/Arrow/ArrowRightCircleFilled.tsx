/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowRightCircleFilledLarge = (
    <Fragment>
        <SVGIconPath d="M12 2C6.47715 2 2 6.47715 2 12C2.00597 17.5204 6.47963 21.994 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.1206 11.3314C15.3112 11.4993 15.4203 11.7411 15.42 11.995C15.4197 12.2495 15.3101 12.4917 15.1191 12.6598L10.8404 16.4242C10.5454 16.6717 10.1068 16.6385 9.85243 16.3493C9.59811 16.0602 9.62113 15.6208 9.90429 15.3599L13.6472 12.0672C13.668 12.049 13.6799 12.0227 13.6799 11.995C13.6799 11.9674 13.668 11.9411 13.6472 11.9229L9.90429 8.63019C9.62113 8.3692 9.59811 7.9299 9.85243 7.64075C10.1068 7.3516 10.5454 7.31836 10.8404 7.56589L15.1206 11.3314Z" />
    </Fragment>
);

const ArrowRightCircleFilledMedium = (
    <Fragment>
        <SVGIconPath d="M12 4C7.58172 4 4 7.58172 4 12C4.00478 16.4163 7.5837 19.9952 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM14.7606 11.4642C14.913 11.5985 15.0003 11.7919 15 11.995C14.9998 12.1985 14.9122 12.3922 14.7593 12.5266L11.3373 15.5373C11.1014 15.7353 10.7506 15.7087 10.5472 15.4775C10.3438 15.2462 10.3622 14.8949 10.5886 14.6861L13.5821 12.0527C13.5988 12.0381 13.6083 12.0171 13.6083 11.995C13.6083 11.9729 13.5988 11.9518 13.5821 11.9373L10.5886 9.30384C10.3622 9.09511 10.3438 8.74377 10.5472 8.51251C10.7506 8.28125 11.1014 8.25467 11.3373 8.45264L14.7606 11.4642Z" />
    </Fragment>
);

const ArrowRightCircleFilledSmall = (
    <Fragment>
        <SVGIconPath d="M12 6C8.68629 6 6 8.68629 6 12C6.00358 15.3122 8.68778 17.9964 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM14.0705 11.6071C14.1848 11.7078 14.2502 11.8527 14.25 12.005C14.2499 12.1576 14.1841 12.3028 14.0696 12.4036L11.5042 14.6606C11.3274 14.809 11.0644 14.789 10.9119 14.6157C10.7594 14.4423 10.7732 14.1789 10.943 14.0224L13.1871 12.0483C13.1995 12.0373 13.2067 12.0216 13.2067 12.005C13.2067 11.9884 13.1995 11.9727 13.1871 11.9617L10.943 9.98757C10.7732 9.83109 10.7594 9.56771 10.9119 9.39434C11.0644 9.22097 11.3274 9.20105 11.5042 9.34946L14.0705 11.6071Z" />
    </Fragment>
);

export const ArrowRightCircleFilledIcon: FunctionComponent<SVGIconPropsType> = (
    props,
) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon
            {...restProps}
            className={`ArrowRightCircleFilledIcon ${className || ''}`}
        >
            <SVGIconGroup>
                {small && ArrowRightCircleFilledSmall}
                {medium && ArrowRightCircleFilledMedium}
                {(large || hasNoSize) && ArrowRightCircleFilledLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

ArrowRightCircleFilledIcon.displayName = 'ArrowRightCircleFilledIcon';
