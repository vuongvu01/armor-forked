/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const MinusLarge = (
    <Fragment>
        <SVGIconPath d="M3.25 13.25C2.55964 13.25 2 12.6904 2 12C2 11.3096 2.55964 10.75 3.25 10.75H20.75C21.4404 10.75 22 11.3096 22 12C22 12.6904 21.4404 13.25 20.75 13.25H3.25Z" />
    </Fragment>
);

const MinusMedium = (
    <Fragment>
        <SVGIconPath d="M5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5Z" />
    </Fragment>
);

const MinusSmall = (
    <Fragment>
        <SVGIconPath d="M6.75 12.75C6.33579 12.75 6 12.4142 6 12C6 11.5858 6.33579 11.25 6.75 11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H6.75Z" />
    </Fragment>
);

export const MinusIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`MinusIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && MinusSmall}
                {medium && MinusMedium}
                {(large || hasNoSize) && MinusLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

MinusIcon.displayName = 'MinusIcon';
