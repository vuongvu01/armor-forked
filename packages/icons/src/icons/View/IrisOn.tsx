import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const IrisOnIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M19.5295 4.93922C17.3245 2.51336 13.6674 -0.0508923 9.99942 0.000792844C6.33144 -0.0517259 2.6743 2.51419 0.469349 4.93922C-0.15645 5.63889 -0.15645 6.6971 0.469349 7.39677C2.64846 9.79679 6.25391 12.3385 9.8652 12.3385H10.122C13.7458 12.3385 17.3504 9.79679 19.532 7.39593C20.157 6.69591 20.1559 5.63798 19.5295 4.93922ZM6.16472 6.16967C6.16472 4.05183 7.88157 2.33497 9.99942 2.33497C12.1173 2.33497 13.8341 4.05183 13.8341 6.16967C13.8341 8.28752 12.1173 10.0044 9.99942 10.0044C7.88157 10.0044 6.16472 8.28752 6.16472 6.16967ZM11.6668 6.16965C11.6668 7.09046 10.9203 7.83692 9.9995 7.83692C9.0787 7.83692 8.33224 7.09046 8.33224 6.16965C8.33224 5.24885 9.0787 4.50239 9.9995 4.50239C10.9203 4.50239 11.6668 5.24885 11.6668 6.16965Z" />
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
