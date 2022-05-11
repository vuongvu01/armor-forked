import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowUpFilledIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M21.7805 19.2474C21.4782 19.7837 20.9104 20.1155 20.2948 20.1156H3.7049C3.08963 20.1153 2.5222 19.7837 2.21997 19.2478C1.91774 18.7118 1.92756 18.0547 2.24565 17.528L10.5406 3.82248C10.8496 3.31191 11.403 2.99999 11.9999 2.99999C12.5967 2.99999 13.1501 3.31191 13.4591 3.82248L21.7541 17.528C22.0723 18.0544 22.0824 18.7114 21.7805 19.2474Z" />
    </SVGIconGroup>
);

export const ArrowUpFilledIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`ArrowUpFilledIcon ${className || ''}`}
        >
            {ArrowUpFilledIconShape}
        </SVGIcon>
    );
};