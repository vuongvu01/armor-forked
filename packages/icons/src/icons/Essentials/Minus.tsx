import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const MinusIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M3.25 13.25C2.55964 13.25 2 12.6904 2 12C2 11.3096 2.55964 10.75 3.25 10.75H20.75C21.4404 10.75 22 11.3096 22 12C22 12.6904 21.4404 13.25 20.75 13.25H3.25Z" />
    </SVGIconGroup>
);

export const MinusIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`MinusIcon ${className || ''}`}
        >
            {MinusIconShape}
        </SVGIcon>
    );
};
