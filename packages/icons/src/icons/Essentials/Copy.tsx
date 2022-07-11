/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const CopyLarge = (
    <Fragment>
        <SVGIconPath d="M3.66667 22H17.4167C18.3371 22 19.0833 21.2538 19.0833 20.3333V6.58333C19.0833 5.66286 18.3371 4.91667 17.4167 4.91667H3.66667C2.74619 4.91667 2 5.66286 2 6.58333V20.3333C2 21.2538 2.74619 22 3.66667 22ZM17 6.58333C17.2301 6.58333 17.4167 6.76988 17.4167 7V19.9167C17.4167 20.1468 17.2301 20.3333 17 20.3333H4.08333C3.85321 20.3333 3.66667 20.1468 3.66667 19.9167V7C3.66667 6.76988 3.85321 6.58333 4.08333 6.58333H17ZM19.9167 3.66667H5.75C5.28976 3.66667 4.91667 3.29357 4.91667 2.83333C4.91667 2.3731 5.28976 2 5.75 2H20.3333C21.2538 2 22 2.74619 22 3.66667V18.25C22 18.7102 21.6269 19.0833 21.1667 19.0833C20.7064 19.0833 20.3333 18.7102 20.3333 18.25V4.08333C20.3333 3.85321 20.1468 3.66667 19.9167 3.66667Z" />
    </Fragment>
);

const CopyMedium = (
    <Fragment>
        <SVGIconPath d="M5.33327 20H16.3333C17.0696 20 17.6666 19.403 17.6666 18.6667V7.66667C17.6666 6.93029 17.0696 6.33333 16.3333 6.33333H5.33327C4.59689 6.33333 3.99994 6.93029 3.99994 7.66667V18.6667C3.99994 19.403 4.59689 20 5.33327 20ZM16 7.66667C16.1841 7.66667 16.3333 7.81591 16.3333 8.00001V18.3333C16.3333 18.5174 16.1841 18.6667 16 18.6667H5.66663C5.48254 18.6667 5.3333 18.5174 5.3333 18.3333V8.00001C5.3333 7.81591 5.48254 7.66667 5.66663 7.66667H16ZM18.3333 5.33334H7C6.63181 5.33334 6.33333 5.03486 6.33333 4.66667C6.33333 4.29848 6.63181 4.00001 7 4.00001H18.6667C19.403 4.00001 20 4.59696 20 5.33334V17C20 17.3682 19.7015 17.6667 19.3333 17.6667C18.9651 17.6667 18.6667 17.3682 18.6667 17V5.66667C18.6667 5.48258 18.5174 5.33334 18.3333 5.33334Z" />
    </Fragment>
);

const CopySmall = (
    <Fragment>
        <SVGIconPath d="M6.99995 18H15.25C15.8022 18 16.25 17.5523 16.25 17V8.75C16.25 8.19772 15.8022 7.75 15.25 7.75H6.99995C6.44767 7.75 5.99995 8.19772 5.99995 8.75V17C5.99995 17.5523 6.44767 18 6.99995 18ZM14.9999 8.75001C15.1379 8.75001 15.2499 8.86193 15.2499 9.00001V16.75C15.2499 16.8881 15.1379 17 14.9999 17H7.24985C7.11178 17 6.99985 16.8881 6.99985 16.75V9.00001C6.99985 8.86193 7.11178 8.75001 7.24985 8.75001H14.9999ZM16.75 7.00001H8.25C7.97386 7.00001 7.75 6.77615 7.75 6.50001C7.75 6.22386 7.97386 6.00001 8.25 6.00001H17C17.5523 6.00001 18 6.44772 18 7.00001V15.75C18 16.0261 17.7761 16.25 17.5 16.25C17.2239 16.25 17 16.0261 17 15.75V7.25001C17 7.11193 16.8881 7.00001 16.75 7.00001Z" />
    </Fragment>
);

export const CopyIcon: FunctionComponent<SVGIconPropsType> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`CopyIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && CopySmall}
                {medium && CopyMedium}
                {(large || hasNoSize) && CopyLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

CopyIcon.displayName = 'CopyIcon';
