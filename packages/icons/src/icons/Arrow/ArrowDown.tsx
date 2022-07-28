/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowDownLarge = (
    <Fragment>
        <SVGIconPath d="M12.2504 18.2504C11.6977 18.2511 11.1715 18.0137 10.8063 17.5989L2.61141 8.28398C2.07271 7.642 2.14505 6.68738 2.77433 6.1339C3.4036 5.58042 4.35964 5.63052 4.92761 6.24675L12.0934 14.3923C12.1331 14.4376 12.1903 14.4635 12.2504 14.4635C12.3106 14.4635 12.3678 14.4376 12.4075 14.3923L19.5733 6.24675C20.1412 5.63052 21.0973 5.58042 21.7266 6.1339C22.3558 6.68738 22.4282 7.642 21.8895 8.28398L13.6971 17.5956C13.3312 18.0114 12.8043 18.2499 12.2504 18.2504Z" />
    </Fragment>
);

const ArrowDownMedium = (
    <Fragment>
        <SVGIconPath d="M12.0004 17.0004C11.5582 17.0009 11.1372 16.811 10.845 16.4791L4.28914 9.02719C3.85818 8.5136 3.91605 7.74991 4.41947 7.30712C4.92289 6.86434 5.68773 6.90442 6.1421 7.3974L11.8747 13.9139C11.9065 13.95 11.9522 13.9708 12.0004 13.9708C12.0485 13.9708 12.0943 13.95 12.126 13.9139L17.8586 7.3974C18.313 6.90442 19.0778 6.86434 19.5813 7.30712C20.0847 7.74991 20.1425 8.5136 19.7116 9.02719L13.1577 16.4765C12.865 16.8091 12.4435 16.9999 12.0004 17.0004Z" />
    </Fragment>
);

const ArrowDownSmall = (
    <Fragment>
        <SVGIconPath d="M11.7503 15.7503C11.4187 15.7507 11.1029 15.6082 10.8838 15.3594L5.96685 9.77039C5.64364 9.3852 5.68704 8.81243 6.0646 8.48034C6.44217 8.14825 7.01579 8.17831 7.35658 8.54805L11.6561 13.4354C11.6798 13.4625 11.7142 13.4781 11.7503 13.4781C11.7864 13.4781 11.8207 13.4625 11.8445 13.4354L16.144 8.54805C16.4848 8.17831 17.0584 8.14825 17.4359 8.48034C17.8135 8.81243 17.8569 9.3852 17.5337 9.77039L12.6183 15.3574C12.3988 15.6068 12.0826 15.7499 11.7503 15.7503Z" />
    </Fragment>
);

export const ArrowDownIcon: FunctionComponent<React.PropsWithChildren<SVGIconPropsType>> = (props) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`ArrowDownIcon ${className || ''}`}>
            <SVGIconGroup>
                {small && ArrowDownSmall}
                {medium && ArrowDownMedium}
                {(large || hasNoSize) && ArrowDownLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

ArrowDownIcon.displayName = 'ArrowDownIcon';
