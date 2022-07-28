/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const FlashLarge = (
    <Fragment>
        <SVGIconPath d="M19.7082 9.72703C19.6336 9.58882 19.485 9.50205 19.3229 9.50207H12.9211L14.5389 2.50819C14.5843 2.31466 14.4813 2.11724 14.2926 2.0363C14.104 1.95535 13.882 2.01334 13.7621 2.17491L5.08295 13.8397C4.98675 13.9667 4.97315 14.1349 5.04778 14.2747C5.12241 14.4145 5.27259 14.5021 5.43619 14.5013H11.8379L10.2201 21.4918C10.1747 21.6853 10.2778 21.8828 10.4664 21.9637C10.6551 22.0446 10.877 21.9867 10.9969 21.8251L19.6761 10.1603C19.7706 10.0331 19.783 9.86581 19.7082 9.72703Z" />
    </Fragment>
);

const FlashMedium = (
    <Fragment>
        <SVGIconPath d="M17.7666 10.1816C17.7069 10.0711 17.588 10.0016 17.4583 10.0017H12.3369L13.6311 4.40655C13.6674 4.25173 13.585 4.09379 13.4341 4.02904C13.2832 3.96428 13.1056 4.01067 13.0097 4.13993L6.06636 13.4718C5.9894 13.5734 5.97852 13.7079 6.03822 13.8198C6.09793 13.9316 6.21807 14.0017 6.34896 14.001H11.4704L10.1761 19.5934C10.1398 19.7483 10.2222 19.9062 10.3731 19.971C10.5241 20.0357 10.7016 19.9893 10.7975 19.8601L17.7409 10.5282C17.8165 10.4265 17.8264 10.2926 17.7666 10.1816Z" />
    </Fragment>
);

const FlashSmall = (
    <Fragment>
        <SVGIconPath d="M16.8249 10.6362C16.7802 10.5533 16.691 10.5012 16.5937 10.5012H12.7527L13.7233 6.30491C13.7506 6.1888 13.6888 6.07034 13.5756 6.02178C13.4624 5.97321 13.3292 6.00801 13.2573 6.10495L8.04977 13.1038C7.99205 13.18 7.98389 13.281 8.02867 13.3648C8.07345 13.4487 8.16355 13.5012 8.26172 13.5008H12.1028L11.1321 17.6951C11.1048 17.8112 11.1667 17.9297 11.2799 17.9782C11.3931 18.0268 11.5262 17.992 11.5982 17.8951L16.8057 10.8962C16.8624 10.8198 16.8698 10.7195 16.8249 10.6362Z" />
    </Fragment>
);

export const FlashIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`FlashIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && FlashSmall}
                {medium && FlashMedium}
                {(large || hasNoSize) && FlashLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

FlashIcon.displayName = 'FlashIcon';
