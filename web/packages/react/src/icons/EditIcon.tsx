import React, { FunctionComponent } from 'react';
import { SVGIconPropsType, SVGIcon } from '../components/SVGIcon';

/**
 * @deprecated
 */
export const EditIconShape = ({ color = 'white' }: { color?: string }) => (
    <svg className="svg-icon" viewBox="0 0 20 20">
        <path
            stroke={color}
            d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"
        />
    </svg>
);

/**
 * @deprecated
 */
export const EditIcon: FunctionComponent<SVGIconPropsType> = ({
    color,
    ...restProps
}) => {
    return (
        <SVGIcon {...restProps}>
            <EditIconShape color={color} />
        </SVGIcon>
    );
};
