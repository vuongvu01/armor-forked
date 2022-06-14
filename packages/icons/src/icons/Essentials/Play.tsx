import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const PlayIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M21.4264 10.955L7.50197 3.12224C7.18013 2.94224 6.79846 2.9621 6.49275 3.17474C6.18704 3.38738 6.00069 3.76262 6 4.16696V19.8318C6.00055 20.2362 6.18692 20.6115 6.49272 20.824C6.79852 21.0366 7.18026 21.0562 7.50197 20.8758L21.4264 13.0437C21.7779 12.8459 22 12.4416 22 11.9994C22 11.5572 21.7779 11.1529 21.4264 10.955Z" />
    </SVGIconGroup>
);

export const PlayIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`PlayIcon ${className || ''}`}
        >
            {PlayIconShape}
        </SVGIcon>
    );
};
