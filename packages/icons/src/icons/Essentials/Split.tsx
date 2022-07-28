/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const SplitLarge = (
    <Fragment>
        <SVGIconPath d="M18.518 7.17981L12.8148 1.34562C12.3643 0.884771 11.6358 0.884771 11.1901 1.34562L5.48212 7.17981C4.75844 7.92011 5.27125 9.1899 6.29686 9.1899H17.7032C18.7289 9.1899 19.2417 7.92011 18.518 7.17981ZM18.518 16.8201L12.8149 22.6543C12.3644 23.1151 11.6359 23.1151 11.1902 22.6543L5.48218 16.8201C4.7585 16.0798 5.27131 14.81 6.29693 14.81H17.7033C18.7289 14.81 19.2417 16.0798 18.518 16.8201ZM2 12.0042C2 11.5324 2.3741 11.15 2.83557 11.15H21.1644C21.6259 11.15 22 11.5324 22 12.0042C22 12.4759 21.6259 12.8583 21.1644 12.8583H2.83557C2.3741 12.8583 2 12.4759 2 12.0042Z" />
    </Fragment>
);

const SplitMedium = (
    <Fragment>
        <SVGIconPath d="M17.2145 8.05623L12.6519 3.2828C12.2915 2.90573 11.7088 2.90573 11.3522 3.2828L6.7858 8.05623C6.20685 8.66194 6.6171 9.70086 7.43759 9.70086H16.5627C17.3832 9.70086 17.7934 8.66194 17.2145 8.05623ZM17.2145 15.9437L12.6519 20.7172C12.2915 21.0942 11.7088 21.0942 11.3522 20.7172L6.7858 15.9437C6.20685 15.338 6.6171 14.2991 7.43759 14.2991H16.5627C17.3832 14.2991 17.7934 15.338 17.2145 15.9437ZM4 12.0034C4 11.6174 4.29928 11.3046 4.66845 11.3046H19.3315C19.7007 11.3046 20 11.6174 20 12.0034C20 12.3894 19.7007 12.7023 19.3315 12.7023H4.66845C4.29928 12.7023 4 12.3894 4 12.0034Z" />
    </Fragment>
);

const SplitSmall = (
    <Fragment>
        <SVGIconPath d="M15.9109 8.93261L12.489 5.21994C12.2187 4.92667 11.7816 4.92667 11.5142 5.21994L8.08941 8.93261C7.6552 9.40372 7.96288 10.2118 8.57825 10.2118H15.4221C16.0375 10.2118 16.3451 9.40372 15.9109 8.93261ZM15.9109 15.0674L12.489 18.7801C12.2187 19.0733 11.7816 19.0733 11.5142 18.7801L8.08941 15.0674C7.6552 14.5963 7.96288 13.7882 8.57825 13.7882H15.4221C16.0375 13.7882 16.3451 14.5963 15.9109 15.0674ZM6 12.0027C6 11.7025 6.22446 11.4591 6.50134 11.4591H17.4987C17.7755 11.4591 18 11.7025 18 12.0027C18 12.3029 17.7755 12.5462 17.4987 12.5462H6.50134C6.22446 12.5462 6 12.3029 6 12.0027Z" />
    </Fragment>
);

export const SplitIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`SplitIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && SplitSmall}
                {medium && SplitMedium}
                {(large || hasNoSize) && SplitLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

SplitIcon.displayName = 'SplitIcon';
