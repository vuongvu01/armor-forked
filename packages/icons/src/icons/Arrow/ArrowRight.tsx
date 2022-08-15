/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowRightLarge = (
    <Fragment>
        <SVGIconPath d="M18.5009 12C18.5016 12.5527 18.2642 13.0789 17.8494 13.4442L8.53442 21.639C7.89244 22.1777 6.93782 22.1054 6.38434 21.4761C5.83086 20.8468 5.88097 19.8908 6.49719 19.3228L14.6428 12.157C14.688 12.1174 14.7139 12.0602 14.7139 12C14.7139 11.9398 14.688 11.8826 14.6428 11.843L6.49719 4.67717C5.88097 4.1092 5.83086 3.15316 6.38434 2.52388C6.93782 1.89461 7.89244 1.82227 8.53442 2.36096L17.846 10.5533C18.2618 10.9192 18.5004 11.4461 18.5009 12Z" />
    </Fragment>
);

const ArrowRightMedium = (
    <Fragment>
        <SVGIconPath d="M17.0007 12C17.0013 12.4422 16.8113 12.8631 16.4795 13.1553L9.02754 19.7112C8.51395 20.1422 7.75026 20.0843 7.30747 19.5809C6.86469 19.0775 6.90477 18.3126 7.39776 17.8583L13.9142 12.1256C13.9504 12.0939 13.9711 12.0481 13.9711 12C13.9711 11.9519 13.9504 11.9061 13.9142 11.8744L7.39776 6.14174C6.90477 5.68736 6.86469 4.92253 7.30747 4.41911C7.75026 3.91569 8.51395 3.85782 9.02754 4.28877L16.4768 10.8426C16.8095 11.1354 17.0003 11.5569 17.0007 12Z" />
    </Fragment>
);

const ArrowRightSmall = (
    <Fragment>
        <SVGIconPath d="M15.5005 12C15.5009 12.3316 15.3585 12.6474 15.1096 12.8665L9.52065 17.7834C9.13546 18.1066 8.56269 18.0632 8.2306 17.6857C7.89852 17.3081 7.92858 16.7345 8.29832 16.3937L13.1857 12.0942C13.2128 12.0704 13.2284 12.0361 13.2284 12C13.2284 11.9639 13.2128 11.9296 13.1857 11.9058L8.29832 7.6063C7.92858 7.26552 7.89852 6.6919 8.2306 6.31433C8.56269 5.93676 9.13546 5.89336 9.52065 6.21658L15.1076 11.132C15.3571 11.3515 15.5002 11.6677 15.5005 12Z" />
    </Fragment>
);

export const ArrowRightIcon: FunctionComponent<SVGIconPropsType> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`ArrowRightIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && ArrowRightSmall}
                {medium && ArrowRightMedium}
                {(large || hasNoSize) && ArrowRightLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

ArrowRightIcon.displayName = 'ArrowRightIcon';
