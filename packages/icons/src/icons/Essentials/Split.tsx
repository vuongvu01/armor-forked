import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const SplitIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M16.518 6.17981L10.8148 0.345623C10.3643 -0.115229 9.63582 -0.115229 9.19011 0.345623L3.48212 6.17981C2.75844 6.92011 3.27125 8.1899 4.29686 8.1899H15.7032C16.7289 8.1899 17.2417 6.92011 16.518 6.17981ZM16.518 15.8201L10.8149 21.6543C10.3644 22.1151 9.63588 22.1151 9.19017 21.6543L3.48218 15.8201C2.7585 15.0798 3.27131 13.81 4.29693 13.81H15.7033C16.7289 13.81 17.2417 15.0798 16.518 15.8201ZM0 11.0042C0 10.5324 0.374096 10.15 0.835566 10.15H19.1644C19.6259 10.15 20 10.5324 20 11.0042C20 11.4759 19.6259 11.8583 19.1644 11.8583H0.835566C0.374096 11.8583 0 11.4759 0 11.0042Z" />
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
