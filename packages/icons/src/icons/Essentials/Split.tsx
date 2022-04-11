import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const SplitIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M18.518 7.17981L12.8148 1.34562C12.3643 0.884772 11.6358 0.884772 11.1901 1.34562L5.48212 7.17981C4.75844 7.92011 5.27125 9.1899 6.29686 9.1899H17.7032C18.7289 9.1899 19.2417 7.92011 18.518 7.17981ZM18.518 16.8201L12.8149 22.6543C12.3644 23.1151 11.6359 23.1151 11.1902 22.6543L5.48218 16.8201C4.7585 16.0798 5.27131 14.81 6.29693 14.81H17.7033C18.7289 14.81 19.2417 16.0798 18.518 16.8201ZM2 12.0042C2 11.5324 2.3741 11.15 2.83557 11.15H21.1644C21.6259 11.15 22 11.5324 22 12.0042C22 12.4759 21.6259 12.8583 21.1644 12.8583H2.83557C2.3741 12.8583 2 12.4759 2 12.0042Z" />
    </SVGIconGroup>
);

export const SplitIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`SplitIcon ${className || ''}`}
        >
            {SplitIconShape}
        </SVGIcon>
    );
};
