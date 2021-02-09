import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowDownIconShape = (
    <SVGIconGroup>
        <SVGIconPath
            d="M18.500887,12 C18.5015696,12.5527013 18.2641769,13.0789216 17.8493735,13.4441849 L8.53442245,21.6390365 C7.8924401,22.1777278 6.93782279,22.105393 6.38434148,21.4761172 C5.83086017,20.8468414 5.88096595,19.8907996 6.49719454,19.3228278 L14.6427651,12.1570311 C14.687999,12.1173814 14.713938,12.0601515 14.713938,12 C14.713938,11.9398485 14.687999,11.8826186 14.6427651,11.8429689 L6.49719454,4.67717216 C5.88096595,4.1092004 5.83086017,3.15315859 6.38434148,2.52388279 C6.93782279,1.894607 7.8924401,1.82227223 8.53442245,2.36096346 L17.8460324,10.5533092 C18.26184,10.919198 18.5003596,11.4461316 18.500887,12 Z"
            transform="translate(12.250444, 12.000000) scale(-1, 1) rotate(-270.000000) translate(-12.250444, -12.000000) "
        />
    </SVGIconGroup>
);

export const ArrowDownIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon {...restProps} className={`ArrowDownIcon ${className || ''}`}>
            {ArrowDownIconShape}
        </SVGIcon>
    );
};
