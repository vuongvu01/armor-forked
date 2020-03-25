import React, { FunctionComponent } from 'react';
import { PropsSVGIconType, SVGIcon } from '../components/SVGIcon';

export const EditIconShape = (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-175.000000, -11.000000)" fill="currentColor">
            <g transform="translate(174.000000, 10.000000)">
                <path d="M1,12.0837384 L1,15 L3.91626163,15 L12.5172893,6.39897236 L9.60102764,3.48271073 L1,12.0837384 Z M14.7725316,4.14373004 C15.0758228,3.84043883 15.0758228,3.35050687 14.7725316,3.04721566 L12.9527843,1.22746841 C12.6494931,0.924177198 12.1595612,0.924177198 11.85627,1.22746841 L10.4331343,2.65060408 L13.3493959,5.56686571 L14.7725316,4.14373004 Z" />
            </g>
        </g>
    </g>
);

export const EditIcon: FunctionComponent<PropsSVGIconType> = props => {
    return <SVGIcon {...props}>{EditIconShape}</SVGIcon>;
};
