import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const EllipsisVerticalIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M11.7083333,16.5833333 C13.2041045,16.5833333 14.4166667,17.7958955 14.4166667,19.2916667 C14.4166667,20.7874379 13.2041045,22 11.7083333,22 C10.2125621,22 9,20.7874379 9,19.2916667 C9,17.7958955 10.2125621,16.5833333 11.7083333,16.5833333 Z M11.7083333,9.29166667 C13.2041045,9.29166667 14.4166667,10.5042288 14.4166667,12 C14.4166667,13.4957712 13.2041045,14.7083333 11.7083333,14.7083333 C10.2125621,14.7083333 9,13.4957712 9,12 C9,10.5042288 10.2125621,9.29166667 11.7083333,9.29166667 Z M11.7083333,2 C13.2041045,2 14.4166667,3.21256214 14.4166667,4.70833333 C14.4166667,6.20410453 13.2041045,7.41666667 11.7083333,7.41666667 C10.2125621,7.41666667 9,6.20410453 9,4.70833333 C9,3.21256214 10.2125621,2 11.7083333,2 Z" />
    </SVGIconGroup>
);

export const EllipsisVerticalIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`EllipsisVerticalIcon ${className || ''}`}
        >
            {EllipsisVerticalIconShape}
        </SVGIcon>
    );
};
