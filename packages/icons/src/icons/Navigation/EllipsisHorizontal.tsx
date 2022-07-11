/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const EllipsisHorizontalLarge = (
    <Fragment>
        <SVGIconPath d="M4.41665 9.29171C5.91242 9.29171 7.12498 10.5043 7.12498 12C7.12498 13.4958 5.91242 14.7084 4.41665 14.7084C2.92088 14.7084 1.70831 13.4958 1.70831 12C1.70831 10.5043 2.92087 9.29171 4.41665 9.29171ZM11.7083 9.29171C13.2041 9.29171 14.4166 10.5043 14.4166 12C14.4166 13.4958 13.2041 14.7084 11.7083 14.7084C10.2125 14.7084 8.99998 13.4958 8.99998 12C8.99998 10.5043 10.2125 9.29171 11.7083 9.29171ZM21.7083 12C21.7083 10.5043 20.4958 9.29171 19 9.29171C17.5042 9.29171 16.2916 10.5043 16.2916 12C16.2916 13.4958 17.5042 14.7084 19 14.7084C20.4958 14.7084 21.7083 13.4958 21.7083 12Z" />
    </Fragment>
);

const EllipsisHorizontalMedium = (
    <Fragment>
        <SVGIconPath d="M6.33335 9.83329C7.52997 9.83329 8.50002 10.8033 8.50002 12C8.50002 13.1966 7.52997 14.1666 6.33335 14.1666C5.13674 14.1666 4.16669 13.1966 4.16669 12C4.16669 10.8033 5.13674 9.83329 6.33335 9.83329ZM12.1667 9.83329C13.3633 9.83329 14.3334 10.8033 14.3334 12C14.3334 13.1966 13.3633 14.1666 12.1667 14.1666C10.9701 14.1666 10 13.1966 10 12C10 10.8033 10.9701 9.83329 12.1667 9.83329ZM20.1667 12C20.1667 10.8033 19.1966 9.83329 18 9.83329C16.8034 9.83329 15.8333 10.8033 15.8333 12C15.8333 13.1966 16.8034 14.1666 18 14.1666C19.1966 14.1666 20.1667 13.1966 20.1667 12Z" />
    </Fragment>
);

const EllipsisHorizontalSmall = (
    <Fragment>
        <SVGIconPath d="M7.25 10.375C8.14746 10.375 8.875 11.1025 8.875 12C8.875 12.8975 8.14746 13.625 7.25 13.625C6.35254 13.625 5.625 12.8975 5.625 12C5.625 11.1025 6.35254 10.375 7.25 10.375ZM11.625 10.375C12.5225 10.375 13.25 11.1025 13.25 12C13.25 12.8975 12.5225 13.625 11.625 13.625C10.7275 13.625 10 12.8975 10 12C10 11.1025 10.7275 10.375 11.625 10.375ZM17.625 12C17.625 11.1025 16.8975 10.375 16 10.375C15.1025 10.375 14.375 11.1025 14.375 12C14.375 12.8975 15.1025 13.625 16 13.625C16.8975 13.625 17.625 12.8975 17.625 12Z" />
    </Fragment>
);

export const EllipsisHorizontalIcon: FunctionComponent<SVGIconPropsType> = (
    props,
) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon
            {...restProps}
            className={`EllipsisHorizontalIcon ${className || ''}`}
        >
            <SVGIconGroup>
                {small && EllipsisHorizontalSmall}
                {medium && EllipsisHorizontalMedium}
                {(large || hasNoSize) && EllipsisHorizontalLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

EllipsisHorizontalIcon.displayName = 'EllipsisHorizontalIcon';
