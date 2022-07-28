/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowLeftLarge = (
    <Fragment>
        <SVGIconPath d="M6 12C5.99932 11.4473 6.23671 10.9211 6.65151 10.5558L15.9665 2.36096C16.6084 1.82227 17.5631 1.89461 18.1165 2.52388C18.67 3.15316 18.6199 4.1092 18.0037 4.67717L9.85812 11.843C9.81289 11.8826 9.78695 11.9398 9.78695 12C9.78695 12.0602 9.81289 12.1174 9.85812 12.157L18.0037 19.3228C18.6199 19.8908 18.67 20.8468 18.1165 21.4761C17.5631 22.1054 16.6084 22.1777 15.9665 21.639L6.65485 13.4467C6.23905 13.0808 6.00053 12.5539 6 12Z" />
    </Fragment>
);

const ArrowLeftMedium = (
    <Fragment>
        <SVGIconPath d="M6.9993 12C6.99875 11.5578 7.18867 11.1369 7.52051 10.8447L14.9725 4.28877C15.4861 3.85782 16.2497 3.91569 16.6925 4.41911C17.1353 4.92253 17.0952 5.68736 16.6023 6.14174L10.0858 11.8744C10.0496 11.9061 10.0289 11.9519 10.0289 12C10.0289 12.0481 10.0496 12.0939 10.0858 12.1256L16.6023 17.8583C17.0952 18.3126 17.1353 19.0775 16.6925 19.5809C16.2497 20.0843 15.4861 20.1422 14.9725 19.7112L7.52318 13.1574C7.19053 12.8646 6.99972 12.4431 6.9993 12Z" />
    </Fragment>
);

const ArrowLeftSmall = (
    <Fragment>
        <SVGIconPath d="M8.49948 12C8.49907 11.6684 8.64151 11.3526 8.89039 11.1335L14.4794 6.21658C14.8645 5.89336 15.4373 5.93676 15.7694 6.31433C16.1015 6.6919 16.0714 7.26552 15.7017 7.6063L10.8144 11.9058C10.7872 11.9296 10.7717 11.9639 10.7717 12C10.7717 12.0361 10.7872 12.0704 10.8144 12.0942L15.7017 16.3937C16.0714 16.7345 16.1015 17.3081 15.7694 17.6857C15.4373 18.0632 14.8645 18.1066 14.4794 17.7834L8.89239 12.868C8.64291 12.6485 8.4998 12.3323 8.49948 12Z" />
    </Fragment>
);

export const ArrowLeftIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`ArrowLeftIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && ArrowLeftSmall}
                {medium && ArrowLeftMedium}
                {(large || hasNoSize) && ArrowLeftLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

ArrowLeftIcon.displayName = 'ArrowLeftIcon';
