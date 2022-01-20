import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const MergeIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M16.5179 2.0101L10.8147 7.84429C10.3642 8.30514 9.63576 8.30514 9.19005 7.84429L3.48206 2.0101C2.75838 1.26979 3.27119 0 4.2968 0H15.7032C16.7288 0 17.2416 1.26979 16.5179 2.0101ZM16.6632 17.94L10.8142 11.9608C10.3522 11.4885 9.6051 11.4885 9.148 11.9608L3.29411 17.94C2.55193 18.6987 3.07785 20 4.12968 20H15.8276C16.8795 20 17.4054 18.6987 16.6632 17.94ZM0.835567 9.04409C0.374096 9.04409 0 9.42651 0 9.89825C0 10.37 0.374096 10.7524 0.835567 10.7524H19.1644C19.6259 10.7524 20 10.37 20 9.89825C20 9.42651 19.6259 9.04409 19.1644 9.04409H0.835567Z" />
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
