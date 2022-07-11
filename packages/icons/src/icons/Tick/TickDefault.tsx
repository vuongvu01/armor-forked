/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const TickDefaultLarge = (
    <Fragment>
        <SVGIconPath d="M21.4783 2.23433C20.9173 1.83188 20.1364 1.96067 19.7342 2.522L8.03842 18.8381L4.13428 14.9283C3.81855 14.6122 3.35829 14.4887 2.92686 14.6043C2.49543 14.7198 2.1584 15.0569 2.0427 15.4886C1.92701 15.9202 2.05023 16.3808 2.36596 16.6968L7.31176 21.6447C7.57442 21.8976 7.93298 22.0254 8.2963 21.9958C8.65961 21.9661 8.9927 21.7818 9.21091 21.4896L21.7658 3.97951C22.168 3.41815 22.0393 2.63683 21.4783 2.23433Z" />
    </Fragment>
);

const TickDefaultMedium = (
    <Fragment>
        <SVGIconPath d="M19.5826 4.18747C19.1338 3.8655 18.5091 3.96854 18.1873 4.4176L8.83073 17.4705L5.70743 14.3427C5.45484 14.0898 5.08663 13.991 4.74149 14.0834C4.39635 14.1759 4.12672 14.4455 4.03416 14.7908C3.94161 15.1361 4.04019 15.5046 4.29277 15.7575L8.24941 19.7157C8.45954 19.9181 8.74638 20.0204 9.03704 19.9966C9.32769 19.9729 9.59416 19.8254 9.76873 19.5917L19.8126 5.5836C20.1344 5.13452 20.0314 4.50946 19.5826 4.18747Z" />
    </Fragment>
);

const TickDefaultSmall = (
    <Fragment>
        <SVGIconPath d="M17.687 6.1406C17.3504 5.89913 16.8818 5.9764 16.6405 6.3132L9.62305 16.1028L7.28057 13.757C7.09113 13.5674 6.81497 13.4932 6.55612 13.5626C6.29726 13.6319 6.09504 13.8342 6.02562 14.0931C5.9562 14.3521 6.03014 14.6285 6.21958 14.8181L9.18705 17.7868C9.34465 17.9386 9.55979 18.0153 9.77778 17.9975C9.99577 17.9797 10.1956 17.8691 10.3265 17.6938L17.8595 7.1877C18.1008 6.85089 18.0236 6.3821 17.687 6.1406Z" />
    </Fragment>
);

export const TickDefaultIcon: FunctionComponent<SVGIconPropsType> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon
            {...restProps}
            className={`TickDefaultIcon ${className || ''}`}
        >
            <SVGIconGroup>
                {small && TickDefaultSmall}
                {medium && TickDefaultMedium}
                {(large || hasNoSize) && TickDefaultLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

TickDefaultIcon.displayName = 'TickDefaultIcon';
