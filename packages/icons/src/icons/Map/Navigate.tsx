/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const NavigateLarge = (
    <Fragment>
        <SVGIconPath d="M2.54699 9.5898L20.7835 2.06354C21.1129 1.93167 21.4893 2.00887 21.7402 2.25979C21.9911 2.51072 22.0683 2.88706 21.9365 3.21651L14.4084 21.4504C14.2639 21.7986 13.915 22.0174 13.5385 21.9959C13.1621 21.9743 12.8404 21.7171 12.7366 21.3546L10.5273 13.6225C10.5062 13.549 10.4485 13.4916 10.3748 13.4709L2.64277 11.2616C2.28027 11.1578 2.02303 10.8362 2.00146 10.4597C1.97989 10.0833 2.19871 9.73432 2.54699 9.5898Z" />
    </Fragment>
);

const NavigateMedium = (
    <Fragment>
        <SVGIconPath d="M4.43759 10.0718L19.0268 4.05083C19.2904 3.94533 19.5914 4.00709 19.7922 4.20784C19.9929 4.40858 20.0547 4.70965 19.9492 4.97321L13.9267 19.5603C13.8111 19.8389 13.532 20.014 13.2308 19.9967C12.9297 19.9794 12.6723 19.7737 12.5893 19.4837L10.8219 13.298C10.805 13.2392 10.7588 13.1933 10.6998 13.1767L4.51422 11.4093C4.22422 11.3263 4.01842 11.0689 4.00117 10.7678C3.98391 10.4666 4.15897 10.1875 4.43759 10.0718Z" />
    </Fragment>
);

const NavigateSmall = (
    <Fragment>
        <SVGIconPath d="M6.32819 10.5539L17.2701 6.03812C17.4678 5.959 17.6936 6.00532 17.8441 6.15588C17.9947 6.30643 18.041 6.53224 17.9619 6.72991L13.4451 17.6702C13.3583 17.8792 13.149 18.0105 12.9231 17.9975C12.6972 17.9846 12.5042 17.8302 12.442 17.6127L11.1164 12.9735C11.1037 12.9294 11.0691 12.895 11.0249 12.8825L6.38566 11.557C6.16816 11.4947 6.01382 11.3017 6.00088 11.0758C5.98794 10.85 6.11923 10.6406 6.32819 10.5539Z" />
    </Fragment>
);

export const NavigateIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`NavigateIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && NavigateSmall}
                {medium && NavigateMedium}
                {(large || hasNoSize) && NavigateLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

NavigateIcon.displayName = 'NavigateIcon';
