import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const MergeIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M18.5179 4.0101L12.8147 9.84429C12.3642 10.3051 11.6358 10.3051 11.1901 9.84429L5.48206 4.0101C4.75838 3.26979 5.27119 2 6.2968 2H17.7032C18.7288 2 19.2416 3.26979 18.5179 4.0101ZM18.6632 19.94L12.8142 13.9608C12.3522 13.4885 11.6051 13.4885 11.148 13.9608L5.29411 19.94C4.55193 20.6987 5.07785 22 6.12968 22H17.8276C18.8795 22 19.4054 20.6987 18.6632 19.94ZM2.83557 11.0441C2.3741 11.0441 2 11.4265 2 11.8983C2 12.37 2.3741 12.7524 2.83557 12.7524H21.1644C21.6259 12.7524 22 12.37 22 11.8983C22 11.4265 21.6259 11.0441 21.1644 11.0441H2.83557Z" />
    </SVGIconGroup>
);

export const MergeIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`MergeIcon ${className || ''}`}
        >
            {MergeIconShape}
        </SVGIcon>
    );
};
