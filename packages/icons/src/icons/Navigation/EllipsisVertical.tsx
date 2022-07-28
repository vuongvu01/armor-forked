/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const EllipsisVerticalLarge = (
    <Fragment>
        <SVGIconPath d="M14.4167 4.70833C14.4167 6.2041 13.2041 7.41667 11.7083 7.41667C10.2126 7.41667 9 6.2041 9 4.70833C9 3.21256 10.2126 2 11.7083 2C13.2041 2 14.4167 3.21256 14.4167 4.70833ZM14.4167 12C14.4167 13.4958 13.2041 14.7084 11.7083 14.7084C10.2126 14.7084 9 13.4958 9 12C9 10.5042 10.2126 9.29169 11.7083 9.29169C13.2041 9.29169 14.4167 10.5042 14.4167 12ZM11.7083 22C13.2041 22 14.4167 20.7874 14.4167 19.2916C14.4167 17.7959 13.2041 16.5833 11.7083 16.5833C10.2126 16.5833 9 17.7959 9 19.2916C9 20.7874 10.2126 22 11.7083 22Z" />
    </Fragment>
);

const EllipsisVerticalMedium = (
    <Fragment>
        <SVGIconPath d="M14.3333 6.16667C14.3333 7.36328 13.3633 8.33333 12.1667 8.33333C10.97 8.33333 10 7.36328 10 6.16667C10 4.97005 10.97 4 12.1667 4C13.3633 4 14.3333 4.97005 14.3333 6.16667ZM14.3333 12C14.3333 13.1966 13.3633 14.1667 12.1667 14.1667C10.97 14.1667 10 13.1966 10 12C10 10.8034 10.97 9.83335 12.1667 9.83335C13.3633 9.83335 14.3333 10.8034 14.3333 12ZM12.1667 20C13.3633 20 14.3333 19.0299 14.3333 17.8333C14.3333 16.6367 13.3633 15.6667 12.1667 15.6667C10.97 15.6667 10 16.6367 10 17.8333C10 19.0299 10.97 20 12.1667 20Z" />
    </Fragment>
);

const EllipsisVerticalSmall = (
    <Fragment>
        <SVGIconPath d="M13.25 7.625C13.25 8.52246 12.5225 9.25 11.625 9.25C10.7275 9.25 10 8.52246 10 7.625C10 6.72754 10.7275 6 11.625 6C12.5225 6 13.25 6.72754 13.25 7.625ZM13.25 12C13.25 12.8975 12.5225 13.625 11.625 13.625C10.7275 13.625 10 12.8975 10 12C10 11.1025 10.7275 10.375 11.625 10.375C12.5225 10.375 13.25 11.1025 13.25 12ZM11.625 18C12.5225 18 13.25 17.2725 13.25 16.375C13.25 15.4775 12.5225 14.75 11.625 14.75C10.7275 14.75 10 15.4775 10 16.375C10 17.2725 10.7275 18 11.625 18Z" />
    </Fragment>
);

export const EllipsisVerticalIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (
    props,
) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon
            {...restProps}
            className={`EllipsisVerticalIcon ${className || ''}`}
        >
            <SVGIconGroup>
                {small && EllipsisVerticalSmall}
                {medium && EllipsisVerticalMedium}
                {(large || hasNoSize) && EllipsisVerticalLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

EllipsisVerticalIcon.displayName = 'EllipsisVerticalIcon';
