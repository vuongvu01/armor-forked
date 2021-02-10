import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const EllipsisHorizontalIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M4.70833333,9 C6.20410453,9 7.41666667,10.2125621 7.41666667,11.7083333 C7.41666667,13.2041045 6.20410453,14.4166667 4.70833333,14.4166667 C3.21256214,14.4166667 2,13.2041045 2,11.7083333 C2,10.2125621 3.21256214,9 4.70833333,9 Z M12,9 C13.4957712,9 14.7083333,10.2125621 14.7083333,11.7083333 C14.7083333,13.2041045 13.4957712,14.4166667 12,14.4166667 C10.5042288,14.4166667 9.29166667,13.2041045 9.29166667,11.7083333 C9.29166667,10.2125621 10.5042288,9 12,9 Z M19.2916667,9 C20.7874379,9 22,10.2125621 22,11.7083333 C22,13.2041045 20.7874379,14.4166667 19.2916667,14.4166667 C17.7958955,14.4166667 16.5833333,13.2041045 16.5833333,11.7083333 C16.5833333,10.2125621 17.7958955,9 19.2916667,9 Z" />
    </SVGIconGroup>
);

export const EllipsisHorizontalIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`EllipsisHorizontalIcon ${className || ''}`}
        >
            {EllipsisHorizontalIconShape}
        </SVGIcon>
    );
};
