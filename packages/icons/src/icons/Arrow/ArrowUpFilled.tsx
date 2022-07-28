/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowUpFilledLarge = (
    <Fragment>
        <SVGIconPath d="M21.7805 19.2474C21.4782 19.7837 20.9104 20.1155 20.2948 20.1156H3.7049C3.08963 20.1153 2.5222 19.7837 2.21997 19.2478C1.91774 18.7118 1.92756 18.0547 2.24565 17.528L10.5406 3.82248C10.8496 3.31191 11.403 2.99999 11.9999 2.99999C12.5967 2.99999 13.1501 3.31191 13.4591 3.82248L21.7541 17.528C22.0723 18.0544 22.0824 18.7114 21.7805 19.2474Z" />
    </Fragment>
);

const ArrowUpFilledMedium = (
    <Fragment>
        <SVGIconPath d="M19.8244 17.9979C19.5826 18.427 19.1283 18.6924 18.6358 18.6925H5.36392C4.8717 18.6923 4.41776 18.427 4.17598 17.9982C3.9342 17.5695 3.94204 17.0438 4.19652 16.6224L10.8325 5.65801C11.0797 5.24955 11.5224 5.00002 11.9999 5.00002C12.4773 5.00002 12.9201 5.24955 13.1673 5.65801L19.8033 16.6224C20.0578 17.0436 20.0659 17.5692 19.8244 17.9979Z" />
    </Fragment>
);

const ArrowUpFilledSmall = (
    <Fragment>
        <SVGIconPath d="M17.8683 16.7484C17.6869 17.0702 17.3463 17.2693 16.9769 17.2693H7.02294C6.65378 17.2692 6.31332 17.0702 6.13198 16.7486C5.95065 16.4271 5.95653 16.0328 6.14739 15.7168L11.1244 7.49348C11.3098 7.18713 11.6418 6.99998 11.9999 6.99998C12.358 6.99998 12.69 7.18713 12.8755 7.49348L17.8524 15.7168C18.0434 16.0327 18.0494 16.4268 17.8683 16.7484Z" />
    </Fragment>
);

export const ArrowUpFilledIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (
    props,
) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon
            {...restProps}
            className={`ArrowUpFilledIcon ${className || ''}`}
        >
            <SVGIconGroup>
                {small && ArrowUpFilledSmall}
                {medium && ArrowUpFilledMedium}
                {(large || hasNoSize) && ArrowUpFilledLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

ArrowUpFilledIcon.displayName = 'ArrowUpFilledIcon';
