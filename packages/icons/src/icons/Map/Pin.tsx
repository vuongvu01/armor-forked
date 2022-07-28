/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const PinLarge = (
    <Fragment>
        <SVGIconPath d="M11.9383 11.8765C14.6656 11.8765 16.8765 9.6656 16.8765 6.93827C16.8765 4.21094 14.6656 2 11.9383 2C9.21094 2 7 4.21094 7 6.93827C7 9.6656 9.21094 11.8765 11.9383 11.8765ZM10.7037 14.3457C10.7037 13.6638 11.2564 13.1111 11.9383 13.1111C12.6201 13.1111 13.1728 13.6638 13.1728 14.3457V20.7654C13.1728 21.4473 12.6201 22 11.9383 22C11.2564 22 10.7037 21.4473 10.7037 20.7654V14.3457Z" />
    </Fragment>
);

const PinMedium = (
    <Fragment>
        <SVGIconPath d="M11.9506 11.9012C14.1325 11.9012 15.9012 10.1325 15.9012 7.95062C15.9012 5.76875 14.1325 4 11.9506 4C9.76875 4 8 5.76875 8 7.95062C8 10.1325 9.76875 11.9012 11.9506 11.9012ZM10.9629 13.8765C10.9629 13.3311 11.4051 12.8889 11.9506 12.8889C12.4961 12.8889 12.9382 13.3311 12.9382 13.8765V19.0123C12.9382 19.5578 12.4961 20 11.9506 20C11.4051 20 10.9629 19.5578 10.9629 19.0123V13.8765Z" />
    </Fragment>
);

const PinSmall = (
    <Fragment>
        <SVGIconPath d="M11.963 11.9259C13.5994 11.9259 14.9259 10.5994 14.9259 8.96296C14.9259 7.32656 13.5994 6 11.963 6C10.3266 6 9 7.32656 9 8.96296C9 10.5994 10.3266 11.9259 11.963 11.9259ZM11.2222 13.4074C11.2222 12.9983 11.5538 12.6666 11.9629 12.6666C12.372 12.6666 12.7036 12.9983 12.7036 13.4074V17.2592C12.7036 17.6683 12.372 18 11.9629 18C11.5538 18 11.2222 17.6683 11.2222 17.2592V13.4074Z" />
    </Fragment>
);

export const PinIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`PinIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && PinSmall}
                {medium && PinMedium}
                {(large || hasNoSize) && PinLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

PinIcon.displayName = 'PinIcon';
