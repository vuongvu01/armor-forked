import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const AddIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M2,12 C2,12.6903559 2.55964406,13.25 3.25,13.25 L10.5416667,13.25 C10.656726,13.25 10.75,13.343274 10.75,13.4583333 L10.75,20.75 C10.75,21.4403559 11.3096441,22 12,22 C12.6903559,22 13.25,21.4403559 13.25,20.75 L13.25,13.4583333 C13.25,13.343274 13.343274,13.25 13.4583333,13.25 L20.75,13.25 C21.4403559,13.25 22,12.6903559 22,12 C22,11.3096441 21.4403559,10.75 20.75,10.75 L13.4583333,10.75 C13.343274,10.75 13.25,10.656726 13.25,10.5416667 L13.25,3.25 C13.25,2.55964406 12.6903559,2 12,2 C11.3096441,2 10.75,2.55964406 10.75,3.25 L10.75,10.5416667 C10.75,10.656726 10.656726,10.75 10.5416667,10.75 L3.25,10.75 C2.55964406,10.75 2,11.3096441 2,12 Z" />
    </SVGIconGroup>
);

export const AddIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`AddIcon ${className || ''}`}
        >
            {AddIconShape}
        </SVGIcon>
    );
};
