/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const PlayLarge = (
    <Fragment>
        <SVGIconPath d="M21.4264 10.955L7.50197 3.12224C7.18013 2.94224 6.79846 2.9621 6.49275 3.17474C6.18704 3.38738 6.00069 3.76262 6 4.16696V19.8318C6.00055 20.2362 6.18692 20.6115 6.49272 20.824C6.79852 21.0366 7.18026 21.0562 7.50197 20.8758L21.4264 13.0437C21.7779 12.8459 22 12.4416 22 11.9994C22 11.5572 21.7779 11.1529 21.4264 10.955Z" />
    </Fragment>
);

const PlayMedium = (
    <Fragment>
        <SVGIconPath d="M19.5339 11.1872L8.22035 5.09508C7.95885 4.95508 7.64875 4.97052 7.40036 5.13591C7.15197 5.30129 7.00056 5.59315 7 5.90764V18.0914C7.00045 18.4059 7.15187 18.6978 7.40033 18.8631C7.64879 19.0284 7.95896 19.0436 8.22035 18.9033L19.5339 12.8118C19.8196 12.6579 20 12.3435 20 11.9995C20 11.6555 19.8196 11.3411 19.5339 11.1872Z" />
    </Fragment>
);

const PlaySmall = (
    <Fragment>
        <SVGIconPath d="M17.1773 11.4194L9.34486 7.06791C9.16382 6.96791 8.94913 6.97894 8.77717 7.09707C8.60521 7.21521 8.50039 7.42367 8.5 7.64831V16.3509C8.50031 16.5756 8.60514 16.7841 8.77715 16.9022C8.94917 17.0203 9.1639 17.0311 9.34486 16.9309L17.1773 12.5798C17.3751 12.4699 17.5 12.2453 17.5 11.9996C17.5 11.7539 17.3751 11.5293 17.1773 11.4194Z" />
    </Fragment>
);

export const PlayIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`PlayIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && PlaySmall}
                {medium && PlayMedium}
                {(large || hasNoSize) && PlayLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

PlayIcon.displayName = 'PlayIcon';
