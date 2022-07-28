/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const HamburgerMenuLarge = (
    <Fragment>
        <SVGIconPath d="M2 5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5V5.6087C22 6.16098 21.5523 6.6087 21 6.6087H3C2.44772 6.6087 2 6.16098 2 5.6087V5ZM2 11.9565C2 11.4042 2.44772 10.9565 3 10.9565H21C21.5523 10.9565 22 11.4042 22 11.9565V12.5652C22 13.1175 21.5523 13.5652 21 13.5652H3C2.44772 13.5652 2 13.1175 2 12.5652V11.9565ZM3 17.913C2.44772 17.913 2 18.3608 2 18.913V19.5217C2 20.074 2.44772 20.5217 3 20.5217H21C21.5523 20.5217 22 20.074 22 19.5217V18.913C22 18.3608 21.5523 17.913 21 17.913H3Z" />
    </Fragment>
);

const HamburgerMenuMedium = (
    <Fragment>
        <SVGIconPath d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V6.08696C20 6.63924 19.5523 7.08696 19 7.08696H5C4.44772 7.08696 4 6.63924 4 6.08696V6ZM4 11.5652C4 11.0129 4.44772 10.5652 5 10.5652H19C19.5523 10.5652 20 11.0129 20 11.5652V11.6522C20 12.2045 19.5523 12.6522 19 12.6522H5C4.44772 12.6522 4 12.2045 4 11.6522V11.5652ZM5 16.1304C4.44772 16.1304 4 16.5781 4 17.1304V17.2174C4 17.7697 4.44772 18.2174 5 18.2174H19C19.5523 18.2174 20 17.7697 20 17.2174V17.1304C20 16.5781 19.5523 16.1304 19 16.1304H5Z" />
    </Fragment>
);

const HamburgerMenuSmall = (
    <Fragment>
        <SVGIconPath d="M6 7.78261C6 7.35039 6.35039 7 6.78261 7H17.2174C17.6496 7 18 7.35039 18 7.78261C18 8.21483 17.6496 8.56522 17.2174 8.56522H6.78261C6.35039 8.56522 6 8.21483 6 7.78261ZM6 11.9565C6 11.5243 6.35039 11.1739 6.78261 11.1739H17.2174C17.6496 11.1739 18 11.5243 18 11.9565C18 12.3888 17.6496 12.7392 17.2174 12.7392H6.78261C6.35039 12.7392 6 12.3888 6 11.9565ZM6.78261 15.3478C6.35039 15.3478 6 15.6982 6 16.1304C6 16.5627 6.35039 16.913 6.78261 16.913H17.2174C17.6496 16.913 18 16.5627 18 16.1304C18 15.6982 17.6496 15.3478 17.2174 15.3478H6.78261Z" />
    </Fragment>
);

export const HamburgerMenuIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (
    props,
) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon
            {...restProps}
            className={`HamburgerMenuIcon ${className || ''}`}
        >
            <SVGIconGroup>
                {small && HamburgerMenuSmall}
                {medium && HamburgerMenuMedium}
                {(large || hasNoSize) && HamburgerMenuLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

HamburgerMenuIcon.displayName = 'HamburgerMenuIcon';
