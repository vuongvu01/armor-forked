import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const PaymentIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M10.5158 11.1478C10.4685 11.1558 10.4206 11.1597 10.3727 11.1594C9.94895 11.1593 9.58734 10.8653 9.51743 10.4642L8.21637 2.97007C8.1743 2.72861 8.24503 2.48161 8.40978 2.29474C8.57453 2.10787 8.81659 2.00007 9.0716 2H17.3116C17.7907 2 18.179 2.3728 18.179 2.83268C18.179 3.29255 17.7907 3.66535 17.3116 3.66535H10.3518C10.2881 3.66526 10.2275 3.69213 10.1862 3.73881C10.1449 3.7855 10.1271 3.84726 10.1376 3.90766L11.2288 10.1894C11.2666 10.4072 11.2128 10.6306 11.0791 10.8104C10.9454 10.9901 10.7427 11.1115 10.5158 11.1478ZM21.0092 4.7928C20.8445 4.60592 20.6024 4.49811 20.3474 4.49803H12.5411C12.2911 4.49809 12.0533 4.60167 11.8887 4.78223C11.724 4.96278 11.6485 5.20275 11.6815 5.44062L12.5489 11.6857C12.5835 11.9858 12.7845 12.2444 13.0744 12.3615C13.3642 12.4787 13.6974 12.4361 13.9452 12.2502C14.1929 12.0643 14.3165 11.7642 14.268 11.4659L13.5646 6.39903C13.556 6.33891 13.575 6.27817 13.6166 6.2325C13.6582 6.18809 13.7175 6.16292 13.7797 6.16338H19.0707C19.1344 6.16324 19.195 6.19004 19.2363 6.23666C19.2766 6.28294 19.2943 6.34357 19.2849 6.40319L18.3308 11.8747C18.2922 12.0933 18.3461 12.3177 18.4804 12.4981C18.6147 12.6784 18.8184 12.7999 19.0464 12.8356C19.0937 12.8432 19.1415 12.8471 19.1895 12.8473C19.6132 12.8467 19.9744 12.5524 20.0439 12.1512L21.2044 5.4681C21.246 5.2264 21.1746 4.97938 21.0092 4.7928ZM18.179 13.6575H12.9488C12.8656 13.6575 12.7898 13.6119 12.7536 13.5401L11.9547 11.9513C11.8901 11.8229 11.7614 11.7353 11.6139 11.719C11.4657 11.701 11.3186 11.7589 11.2262 11.8714L9.59202 13.829L9.58595 13.8373C9.4535 13.9779 9.26874 14.0629 9.0716 14.0738H8.20423C7.96471 14.0738 7.77054 14.2602 7.77054 14.4902V19.4862C7.77054 19.6173 7.83481 19.7407 7.94402 19.8193C9.93897 21.2557 11.4855 21.9842 12.5411 21.9842H17.3515C18.1294 22.0956 18.863 21.6057 19.0247 20.8668C19.4548 18.9005 19.7518 16.9096 19.9137 14.9065C19.9137 14.2853 19.3179 13.6575 18.179 13.6575ZM3.21684 13.2411H5.89095C6.03783 13.2253 6.1848 13.2702 6.29518 13.3645C6.40556 13.4589 6.46893 13.5939 6.46949 13.7357V20.657C6.46893 20.7988 6.40556 20.9338 6.29518 21.0282C6.1848 21.1226 6.03783 21.1674 5.89095 21.1516H3.21684C3.09708 21.1516 3 21.0584 3 20.9434V13.4493C3 13.3343 3.09708 13.2411 3.21684 13.2411ZM17.7453 9.49409C17.7453 10.1839 17.1628 10.7431 16.4443 10.7431C15.7257 10.7431 15.1432 10.1839 15.1432 9.49409C15.1432 8.80428 15.7257 8.24508 16.4443 8.24508C17.1628 8.24508 17.7453 8.80428 17.7453 9.49409Z" />
    </SVGIconGroup>
);

export const PaymentIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`PaymentIcon ${className || ''}`}
        >
            {PaymentIconShape}
        </SVGIcon>
    );
};
