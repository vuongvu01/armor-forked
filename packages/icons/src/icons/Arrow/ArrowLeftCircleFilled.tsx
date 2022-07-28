/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowLeftCircleFilledLarge = (
    <Fragment>
        <SVGIconPath d="M12 2C17.5228 2 22 6.47715 22 12C21.994 17.5204 17.5204 21.994 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM8.87939 11.3314C8.68879 11.4993 8.5797 11.7411 8.58002 11.995C8.58026 12.2495 8.68986 12.4917 8.88092 12.6598L13.1596 16.4242C13.4546 16.6717 13.8932 16.6385 14.1476 16.3493C14.4019 16.0602 14.3789 15.6208 14.0957 15.3599L10.3528 12.0672C10.332 12.049 10.3201 12.0227 10.3201 11.995C10.3201 11.9674 10.332 11.9411 10.3528 11.9229L14.0957 8.63019C14.3789 8.3692 14.4019 7.9299 14.1476 7.64075C13.8932 7.3516 13.4546 7.31836 13.1596 7.56589L8.87939 11.3314Z" />
    </Fragment>
);

const ArrowLeftCircleFilledMedium = (
    <Fragment>
        <SVGIconPath d="M12 4C16.4183 4 20 7.58172 20 12C19.9952 16.4163 16.4163 19.9952 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM9.23943 11.4642C9.08699 11.5985 8.99975 11.7919 9 11.995C9.00019 12.1985 9.08785 12.3922 9.24066 12.5266L12.6627 15.5373C12.8986 15.7353 13.2494 15.7087 13.4528 15.4775C13.6562 15.2462 13.6378 14.8949 13.4114 14.6861L10.4179 12.0527C10.4012 12.0381 10.3917 12.0171 10.3917 11.995C10.3917 11.9729 10.4012 11.9518 10.4179 11.9373L13.4114 9.30384C13.6378 9.09511 13.6562 8.74377 13.4528 8.51251C13.2494 8.28125 12.8986 8.25467 12.6627 8.45264L9.23943 11.4642Z" />
    </Fragment>
);

const ArrowLeftCircleFilledSmall = (
    <Fragment>
        <SVGIconPath d="M12 6C15.3137 6 18 8.68629 18 12C17.9964 15.3122 15.3122 17.9964 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6ZM9.92949 11.6071C9.81521 11.7078 9.74981 11.8527 9.75 12.005C9.75015 12.1576 9.81586 12.3028 9.93041 12.4036L12.4958 14.6606C12.6726 14.809 12.9356 14.789 13.0881 14.6157C13.2406 14.4423 13.2268 14.1789 13.057 14.0224L10.8129 12.0483C10.8005 12.0373 10.7933 12.0216 10.7933 12.005C10.7933 11.9884 10.8005 11.9727 10.8129 11.9617L13.057 9.98757C13.2268 9.83109 13.2406 9.56771 13.0881 9.39434C12.9356 9.22097 12.6726 9.20105 12.4958 9.34946L9.92949 11.6071Z" />
    </Fragment>
);

export const ArrowLeftCircleFilledIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (
    props,
) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon
            {...restProps}
            className={`ArrowLeftCircleFilledIcon ${className || ''}`}
        >
            <SVGIconGroup>
                {small && ArrowLeftCircleFilledSmall}
                {medium && ArrowLeftCircleFilledMedium}
                {(large || hasNoSize) && ArrowLeftCircleFilledLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

ArrowLeftCircleFilledIcon.displayName = 'ArrowLeftCircleFilledIcon';
