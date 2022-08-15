/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const DashLarge = (
    <Fragment>
        <SVGIconPath d="M2 10.5C2 9.94772 2.44772 9.5 3 9.5H21C21.5523 9.5 22 9.94772 22 10.5V13.5C22 14.0523 21.5523 14.5 21 14.5H3C2.44772 14.5 2 14.0523 2 13.5V10.5Z" />
    </Fragment>
);

const DashMedium = (
    <Fragment>
        <SVGIconPath d="M4 10.8C4 10.3582 4.35817 10 4.8 10H19.2C19.6418 10 20 10.3582 20 10.8V13.2C20 13.6418 19.6418 14 19.2 14H4.8C4.35817 14 4 13.6418 4 13.2V10.8Z" />
    </Fragment>
);

const DashSmall = (
    <Fragment>
        <SVGIconPath d="M6 11.5C6 11.2239 6.22386 11 6.5 11H17.5C17.7761 11 18 11.2239 18 11.5V12.5C18 12.7761 17.7761 13 17.5 13H6.5C6.22386 13 6 12.7761 6 12.5V11.5Z" />

        <SVGIconPath d="M6 11.1C6 10.7686 6.26863 10.5 6.6 10.5H17.4C17.7314 10.5 18 10.7686 18 11.1V12.9C18 13.2314 17.7314 13.5 17.4 13.5H6.6C6.26863 13.5 6 13.2314 6 12.9V11.1Z" />
    </Fragment>
);

export const DashIcon: FunctionComponent<SVGIconPropsType> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`DashIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && DashSmall}
                {medium && DashMedium}
                {(large || hasNoSize) && DashLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

DashIcon.displayName = 'DashIcon';
