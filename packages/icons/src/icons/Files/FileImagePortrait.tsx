import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const FileImagePortraitIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M19.768 6.75833L15.432 2.24167C15.283 2.08771 15.0819 2.00092 14.872 2H5.6C5.17565 2 4.76869 2.17559 4.46863 2.48816C4.16857 2.80072 4 3.22464 4 3.66667V20.3333C4 20.7754 4.16857 21.1993 4.46863 21.5118C4.76869 21.8244 5.17565 22 5.6 22H18.4C18.8243 22 19.2313 21.8244 19.5314 21.5118C19.8314 21.1993 20 20.7754 20 20.3333V7.34167C19.9991 7.12305 19.9158 6.91355 19.768 6.75833ZM18.4 19.9167C18.4 20.0272 18.3579 20.1332 18.2828 20.2113C18.2078 20.2894 18.1061 20.3333 18 20.3333H6C5.89391 20.3333 5.79217 20.2894 5.71716 20.2113C5.64214 20.1332 5.6 20.0272 5.6 19.9167V4.08333C5.6 3.97283 5.64214 3.86685 5.71716 3.78871C5.79217 3.71057 5.89391 3.66667 6 3.66667H14.4C14.4537 3.66586 14.5069 3.67653 14.5565 3.69803C14.606 3.71954 14.6508 3.7514 14.688 3.79167L18.312 7.56667C18.3708 7.64185 18.402 7.73638 18.4 7.83333V19.9167ZM9.44 10.3333C10.3237 10.3333 11.04 9.58714 11.04 8.66667C11.04 7.74619 10.3237 7 9.44 7C8.55634 7 7.84 7.74619 7.84 8.66667C7.84 9.58714 8.55634 10.3333 9.44 10.3333ZM13.633 10.755C13.6919 10.7897 13.7412 10.8396 13.776 10.9L17.232 16.6834C17.2496 16.715 17.2588 16.751 17.2588 16.7875C17.2588 16.8241 17.2496 16.86 17.232 16.8917C17.2141 16.924 17.1885 16.951 17.1577 16.9699C17.1268 16.9889 17.0918 16.9993 17.056 17H7.376C7.34019 16.9993 7.30517 16.9889 7.27434 16.9699C7.24351 16.951 7.2179 16.924 7.2 16.8917C7.18244 16.86 7.1732 16.8241 7.1732 16.7875C7.1732 16.751 7.18244 16.715 7.2 16.6834L9.488 12.9834C9.52387 12.9231 9.57393 12.8733 9.63343 12.8388C9.69293 12.8043 9.7599 12.7862 9.828 12.7862C9.8961 12.7862 9.96307 12.8043 10.0226 12.8388C10.0821 12.8733 10.1321 12.9231 10.168 12.9834L10.856 14.1334C10.8754 14.1636 10.9015 14.1885 10.9322 14.2059C10.9628 14.2233 10.9971 14.2328 11.032 14.2334C11.0655 14.2315 11.0982 14.2214 11.1273 14.2041C11.1565 14.1867 11.1814 14.1625 11.2 14.1334L13.104 10.9C13.1388 10.8396 13.1881 10.7897 13.247 10.755C13.3059 10.7203 13.3724 10.702 13.44 10.702C13.5076 10.702 13.5741 10.7203 13.633 10.755Z" />
    </SVGIconGroup>
);

export const FileImagePortraitIcon: FunctionComponent<SVGIconPropsType> = (
    props,
) => {
    const { className, ...restProps } = props;

    return (
        <SVGIcon
            {...restProps}
            className={`FileImagePortraitIcon ${className || ''}`}
        >
            {FileImagePortraitIconShape}
        </SVGIcon>
    );
};
