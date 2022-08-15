/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const AddLarge = (
    <Fragment>
        <SVGIconPath d="M2 12C2 12.6904 2.55964 13.25 3.25 13.25H10.5417C10.6567 13.25 10.75 13.3433 10.75 13.4583V20.75C10.75 21.4404 11.3096 22 12 22C12.6904 22 13.25 21.4404 13.25 20.75V13.4583C13.25 13.3433 13.3433 13.25 13.4583 13.25H20.75C21.4404 13.25 22 12.6904 22 12C22 11.3096 21.4404 10.75 20.75 10.75H13.4583C13.3433 10.75 13.25 10.6567 13.25 10.5417V3.25C13.25 2.55964 12.6904 2 12 2C11.3096 2 10.75 2.55964 10.75 3.25V10.5417C10.75 10.6567 10.6567 10.75 10.5417 10.75H3.25C2.55964 10.75 2 11.3096 2 12Z" />
    </Fragment>
);

const AddMedium = (
    <Fragment>
        <SVGIconPath d="M4 12C4 12.5523 4.44772 13 5 13H10.8333C10.9254 13 11 13.0746 11 13.1667V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13.1667C13 13.0746 13.0746 13 13.1667 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13.1667C13.0746 11 13 10.9254 13 10.8333V5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V10.8333C11 10.9254 10.9254 11 10.8333 11H5C4.44772 11 4 11.4477 4 12Z" />
    </Fragment>
);

const AddSmall = (
    <Fragment>
        <SVGIconPath d="M6 12C6 12.4142 6.33579 12.75 6.75 12.75H11.125C11.194 12.75 11.25 12.806 11.25 12.875V17.25C11.25 17.6642 11.5858 18 12 18C12.4142 18 12.75 17.6642 12.75 17.25V12.875C12.75 12.806 12.806 12.75 12.875 12.75H17.25C17.6642 12.75 18 12.4142 18 12C18 11.5858 17.6642 11.25 17.25 11.25H12.875C12.806 11.25 12.75 11.194 12.75 11.125V6.75C12.75 6.33579 12.4142 6 12 6C11.5858 6 11.25 6.33579 11.25 6.75V11.125C11.25 11.194 11.194 11.25 11.125 11.25H6.75C6.33579 11.25 6 11.5858 6 12Z" />
    </Fragment>
);

export const AddIcon: FunctionComponent<SVGIconPropsType> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`AddIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && AddSmall}
                {medium && AddMedium}
                {(large || hasNoSize) && AddLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

AddIcon.displayName = 'AddIcon';
