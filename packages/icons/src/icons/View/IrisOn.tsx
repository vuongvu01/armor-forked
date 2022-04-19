import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const IrisOnIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M21.5295 10.9392C19.3245 8.51336 15.6674 5.94911 11.9994 6.00079C8.33144 5.94827 4.6743 8.51419 2.46935 10.9392C1.84355 11.6389 1.84355 12.6971 2.46935 13.3968C4.64846 15.7968 8.25391 18.3385 11.8652 18.3385H12.122C15.7458 18.3385 19.3504 15.7968 21.532 13.3959C22.157 12.6959 22.1559 11.638 21.5295 10.9392ZM8.16472 12.1697C8.16472 10.0518 9.88157 8.33497 11.9994 8.33497C14.1173 8.33497 15.8341 10.0518 15.8341 12.1697C15.8341 14.2875 14.1173 16.0044 11.9994 16.0044C9.88157 16.0044 8.16472 14.2875 8.16472 12.1697ZM13.6668 12.1697C13.6668 13.0905 12.9203 13.8369 11.9995 13.8369C11.0787 13.8369 10.3322 13.0905 10.3322 12.1697C10.3322 11.2488 11.0787 10.5024 11.9995 10.5024C12.9203 10.5024 13.6668 11.2488 13.6668 12.1697Z" />
    </SVGIconGroup>
);

export const IrisOnIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`IrisOnIcon ${className || ''}`}
        >
            {IrisOnIconShape}
        </SVGIcon>
    );
};
