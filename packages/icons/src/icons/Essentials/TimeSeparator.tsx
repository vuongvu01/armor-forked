import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const TimeSeparatorIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M11.8461538,14.3076923 C13.970326,14.3076923 15.6923077,16.029674 15.6923077,18.1538462 C15.6923077,20.2780183 13.970326,22 11.8461538,22 C9.72198173,22 8,20.2780183 8,18.1538462 C8,16.029674 9.72198173,14.3076923 11.8461538,14.3076923 Z M11.8461538,2 C13.970326,2 15.6923077,3.72198173 15.6923077,5.84615385 C15.6923077,7.97032596 13.970326,9.69230769 11.8461538,9.69230769 C9.72198173,9.69230769 8,7.97032596 8,5.84615385 C8,3.72198173 9.72198173,2 11.8461538,2 Z" />
    </SVGIconGroup>
);

export const TimeSeparatorIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`TimeSeparatorIcon ${className || ''}`}
        >
            {TimeSeparatorIconShape}
        </SVGIcon>
    );
};
