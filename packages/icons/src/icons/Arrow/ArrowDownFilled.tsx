import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowDownFilledIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M21.7805012,3.8682156 C21.4782321,3.33191299 20.9104313,3 20.294812,3 L3.7049005,3 C3.08963077,3.00029861 2.52220362,3.33192496 2.21997381,3.86784853 C1.917744,4.40377211 1.92755555,5.0609276 2.24565011,5.58758953 L10.5406059,19.2931148 C10.8496367,19.8036873 11.4030445,20.1156121 11.9998563,20.1156121 C12.5966681,20.1156121 13.1500758,19.8036873 13.4591066,19.2931148 L21.7540624,5.58758953 C22.0722524,5.0611573 22.0823547,4.40418223 21.7805012,3.8682156 Z" />
    </SVGIconGroup>
);

export const ArrowDownFilledIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`ArrowDownFilledIcon ${className || ''}`}
        >
            {ArrowDownFilledIconShape}
        </SVGIcon>
    );
};
