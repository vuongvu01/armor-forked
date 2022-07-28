/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowDownFilledLarge = (
    <Fragment>
        <SVGIconPath d="M21.7805 3.86822C21.4782 3.33191 20.9104 3.0001 20.2948 3H3.7049C3.08963 3.0003 2.5222 3.33192 2.21997 3.86785C1.91774 4.40377 1.92756 5.06093 2.24565 5.58759L10.5406 19.2931C10.8496 19.8037 11.403 20.1156 11.9999 20.1156C12.5967 20.1156 13.1501 19.8037 13.4591 19.2931L21.7541 5.58759C22.0723 5.06116 22.0824 4.40418 21.7805 3.86822Z" />
    </Fragment>
);

const ArrowDownFilledMedium = (
    <Fragment>
        <SVGIconPath d="M19.8244 5.69457C19.5826 5.26553 19.1283 5.00008 18.6358 5H5.36392C4.8717 5.00024 4.41776 5.26554 4.17598 5.69428C3.9342 6.12302 3.94204 6.64874 4.19652 7.07007L10.8325 18.0345C11.0797 18.443 11.5224 18.6925 11.9999 18.6925C12.4773 18.6925 12.9201 18.443 13.1673 18.0345L19.8033 7.07007C20.0578 6.64893 20.0659 6.12335 19.8244 5.69457Z" />
    </Fragment>
);

const ArrowDownFilledSmall = (
    <Fragment>
        <SVGIconPath d="M17.8683 7.52093C17.6869 7.19915 17.3463 7.00006 16.9769 7H7.02294C6.65378 7.00018 6.31332 7.19915 6.13198 7.52071C5.95065 7.84226 5.95653 8.23656 6.14739 8.55255L11.1244 16.7759C11.3098 17.0822 11.6418 17.2694 11.9999 17.2694C12.358 17.2694 12.69 17.0822 12.8755 16.7759L17.8524 8.55255C18.0434 8.23669 18.0494 7.84251 17.8683 7.52093Z" />
    </Fragment>
);

export const ArrowDownFilledIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (
    props,
) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon
            {...restProps}
            className={`ArrowDownFilledIcon ${className || ''}`}
        >
            <SVGIconGroup>
                {small && ArrowDownFilledSmall}
                {medium && ArrowDownFilledMedium}
                {(large || hasNoSize) && ArrowDownFilledLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

ArrowDownFilledIcon.displayName = 'ArrowDownFilledIcon';
