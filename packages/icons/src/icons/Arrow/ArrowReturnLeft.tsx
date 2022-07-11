/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowReturnLeftLarge = (
    <Fragment>
        <SVGIconPath d="M15.3577 20.313H12.1239C11.4386 20.313 10.883 19.7343 10.883 19.0204C10.883 18.3065 11.4386 17.7278 12.1239 17.7278H15.3577C16.8186 17.7715 18.1869 16.9846 18.9297 15.6735C19.6725 14.3624 19.6725 12.7343 18.9297 11.4232C18.1869 10.1121 16.8186 9.32523 15.3577 9.36894H7.90403C7.7898 9.36894 7.69721 9.46539 7.69721 9.58437V12.2833C7.69714 12.6318 7.49558 12.9459 7.1865 13.0793C6.87742 13.2126 6.52166 13.139 6.28507 12.8926L2.24221 8.68213C1.91926 8.34563 1.91926 7.80015 2.24221 7.46364L6.28507 3.25233C6.52166 3.00596 6.87742 2.93227 7.1865 3.06561C7.49558 3.19896 7.69714 3.5131 7.69721 3.86158V6.56485C7.69721 6.68383 7.7898 6.78028 7.90403 6.78028H15.3577C17.7127 6.7249 19.912 8.00198 21.1051 10.1177C22.2983 12.2335 22.2983 14.8563 21.1051 16.9721C19.912 19.0878 17.7127 20.3649 15.3577 20.3095V20.313Z" />
    </Fragment>
);

const ArrowReturnLeftMedium = (
    <Fragment>
        <SVGIconPath d="M14.6862 19H12.0991C11.5509 19 11.1064 18.537 11.1064 17.9659C11.1064 17.3948 11.5509 16.9318 12.0991 16.9318H14.6862C15.8549 16.9668 16.9495 16.3373 17.5438 15.2884C18.138 14.2395 18.138 12.9371 17.5438 11.8882C16.9495 10.8393 15.8549 10.2098 14.6862 10.2448H8.72322C8.63184 10.2448 8.55777 10.3219 8.55777 10.4171V12.5763C8.55771 12.8551 8.39647 13.1064 8.1492 13.213C7.90193 13.3197 7.61733 13.2608 7.42805 13.0637L4.19377 9.69532C3.93541 9.42611 3.93541 8.98973 4.19377 8.72052L7.42805 5.35148C7.61733 5.15438 7.90193 5.09542 8.1492 5.2021C8.39647 5.30878 8.55771 5.56009 8.55777 5.83887V8.00149C8.55777 8.09667 8.63184 8.17384 8.72322 8.17384H14.6862C16.5702 8.12953 18.3296 9.1512 19.2841 10.8438C20.2386 12.5364 20.2386 14.6347 19.2841 16.3273C18.3296 18.0199 16.5702 19.0415 14.6862 18.9972V19Z" />
    </Fragment>
);

const ArrowReturnLeftSmall = (
    <Fragment>
        <SVGIconPath d="M14.0146 17H12.0743C11.6632 17 11.3298 16.6528 11.3298 16.2244C11.3298 15.7961 11.6632 15.4489 12.0743 15.4489H14.0146C14.8912 15.4751 15.7121 15.003 16.1578 14.2163C16.6035 13.4296 16.6035 12.4528 16.1578 11.6661C15.7121 10.8795 14.8912 10.4073 14.0146 10.4336H9.54242C9.47388 10.4336 9.41833 10.4914 9.41833 10.5628V12.1822C9.41828 12.3913 9.29735 12.5798 9.1119 12.6598C8.92645 12.7398 8.713 12.6956 8.57104 12.5478L6.14533 10.0215C5.95156 9.81958 5.95156 9.49229 6.14533 9.29039L8.57104 6.76361C8.713 6.61578 8.92645 6.57157 9.1119 6.65158C9.29735 6.73158 9.41828 6.92007 9.41833 7.12916V8.75112C9.41833 8.8225 9.47388 8.88038 9.54242 8.88038H14.0146C15.4276 8.84715 16.7472 9.6134 17.4631 10.8829C18.179 12.1523 18.179 13.726 17.4631 14.9955C16.7472 16.2649 15.4276 17.0312 14.0146 16.9979V17Z" />
    </Fragment>
);

export const ArrowReturnLeftIcon: FunctionComponent<SVGIconPropsType> = (
    props,
) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon
            {...restProps}
            className={`ArrowReturnLeftIcon ${className || ''}`}
        >
            <SVGIconGroup>
                {small && ArrowReturnLeftSmall}
                {medium && ArrowReturnLeftMedium}
                {(large || hasNoSize) && ArrowReturnLeftLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

ArrowReturnLeftIcon.displayName = 'ArrowReturnLeftIcon';
