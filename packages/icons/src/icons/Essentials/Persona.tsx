import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const PersonaIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M15.1818 4.20833C15.1818 5.98025 13.7573 7.41667 12 7.41667C10.2427 7.41667 8.81818 5.98025 8.81818 4.20833C8.81818 2.43642 10.2427 1 12 1C13.7573 1 15.1818 2.43642 15.1818 4.20833ZM8.46712 10.271C9.40428 9.32604 10.6747 8.79409 12 8.79167C13.3253 8.79409 14.5957 9.32604 15.5329 10.271C16.47 11.216 16.9976 12.4969 17 13.8333V17.0417C17 17.1632 16.9521 17.2798 16.8669 17.3658C16.7816 17.4517 16.666 17.5 16.5455 17.5H14.9C14.8427 17.4998 14.7875 17.5214 14.7454 17.5605C14.7033 17.5996 14.6773 17.6533 14.6727 17.7108L14.2727 22.5783C14.2636 22.6934 14.2117 22.8008 14.1274 22.879C14.0431 22.9571 13.9327 23.0004 13.8182 23H10.1818C10.0673 23.0004 9.95688 22.9571 9.87261 22.879C9.78834 22.8008 9.73643 22.6934 9.72727 22.5783L9.32727 17.7108C9.32269 17.6533 9.29674 17.5996 9.2546 17.5605C9.21247 17.5214 9.15726 17.4998 9.1 17.5H7.45455C7.33399 17.5 7.21838 17.4517 7.13313 17.3658C7.04789 17.2798 7 17.1632 7 17.0417V13.8333C7.0024 12.4969 7.52996 11.216 8.46712 10.271Z" />
    </SVGIconGroup>
);

export const PersonaIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`PersonaIcon ${className || ''}`}
        >
            {PersonaIconShape}
        </SVGIcon>
    );
};
