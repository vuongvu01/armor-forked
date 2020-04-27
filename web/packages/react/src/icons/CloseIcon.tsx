import React, { FunctionComponent } from 'react';
import { SVGIconPropsType, SVGIcon } from '../components/SVGIcon';

export const CloseIconShape = (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-353.000000, -37.000000)" fill="currentColor">
            <g transform="translate(348.000000, 32.000000)">
                <polygon points="15 5.875 14.125 5 10 9.125 5.875 5 5 5.875 9.125 10 5 14.125 5.875 15 10 10.875 14.125 15 15 14.125 10.875 10"></polygon>
            </g>
        </g>
    </g>
);

export const CloseIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{CloseIconShape}</SVGIcon>;
};
