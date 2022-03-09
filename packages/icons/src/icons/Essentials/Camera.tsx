import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const CameraIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M6.58575 5.95377H4.08682C3.97636 5.95377 3.87042 5.90762 3.79232 5.82546C3.71421 5.74331 3.67033 5.63189 3.67033 5.5157V5.31419C3.67033 4.96565 3.80197 4.63138 4.03629 4.38492C4.27061 4.13846 4.58842 4 4.91979 4H5.75277C6.08415 4 6.40196 4.13846 6.63628 4.38492C6.8706 4.63138 7.00224 4.96565 7.00224 5.31419V5.5157C7.00337 5.57356 6.99337 5.63106 6.97284 5.68475C6.95231 5.73843 6.92168 5.7872 6.88278 5.82812C6.84387 5.86904 6.79751 5.90126 6.74646 5.92285C6.69542 5.94445 6.64075 5.95496 6.58575 5.95377ZM19.8633 6.83862H18.7721C18.6849 6.83605 18.6004 6.80638 18.5293 6.75337C18.4581 6.70036 18.4035 6.62637 18.3723 6.54073L18.308 6.40409C17.7895 5.30105 17.2768 4.21023 16.1649 4.21023H12C11.1087 4.21023 10.6339 4.89361 9.78429 6.13771C9.73071 6.21482 9.6831 6.28591 9.63964 6.35081L9.63963 6.35081C9.42632 6.66932 9.31294 6.83862 9.08459 6.83862H4.08673C2.36247 6.83862 2.00429 7.89873 2.00429 8.79238V17.8954C1.98542 18.1881 2.02894 18.4817 2.13166 18.7545C2.23439 19.0274 2.39374 19.2726 2.59807 19.4724C2.80241 19.6723 3.04659 19.8216 3.31278 19.9095C3.57897 19.9974 3.86046 20.0217 4.13671 19.9806H19.8633C20.1395 20.0217 20.421 19.9974 20.6872 19.9095C20.9534 19.8216 21.1976 19.6723 21.4019 19.4724C21.6063 19.2726 21.7656 19.0274 21.8683 18.7545C21.9711 18.4817 22.0146 18.1881 21.9957 17.8954V8.79238C21.9957 7.89873 21.6292 6.83862 19.8633 6.83862ZM19.0803 12.9715C19.0819 13.9683 18.8024 14.9431 18.2772 15.7727C17.7519 16.6023 17.0044 17.2494 16.1294 17.632C15.2543 18.0147 14.291 18.1157 13.3614 17.9223C12.4318 17.7289 11.5775 17.2498 10.9069 16.5456C10.2362 15.8414 9.77921 14.9438 9.59372 13.9663C9.40824 12.9889 9.5026 11.9755 9.86487 11.0544C10.2271 10.1334 10.841 9.34611 11.6289 8.79216C12.4167 8.23822 13.343 7.94254 14.2907 7.94254C15.5589 7.94485 16.7746 8.47515 17.6721 9.41751C18.5696 10.3599 19.0759 11.6377 19.0803 12.9715ZM6.16917 10.1329C6.16753 10.3491 6.10506 10.56 5.98966 10.7389C5.87425 10.9178 5.71107 11.0568 5.52067 11.1384C5.33027 11.2199 5.12119 11.2404 4.91976 11.1971C4.71834 11.1539 4.53359 11.0489 4.3888 10.8954C4.24402 10.7419 4.14568 10.5468 4.10617 10.3346C4.06667 10.1224 4.08777 9.90261 4.16681 9.703C4.24586 9.5034 4.37931 9.33287 4.55036 9.21292C4.7214 9.09296 4.92237 9.02895 5.12795 9.02894C5.2657 9.02775 5.40229 9.05556 5.52968 9.11073C5.65706 9.16589 5.77266 9.2473 5.86968 9.35017C5.9667 9.45303 6.04318 9.57527 6.09461 9.70969C6.14605 9.8441 6.1714 9.98799 6.16917 10.1329ZM14.2907 16.2657C16.0158 16.2657 17.4143 14.7948 17.4143 12.9802C17.4143 11.1657 16.0158 9.69475 14.2907 9.69475C12.5655 9.69475 11.167 11.1657 11.167 12.9802C11.167 14.7948 12.5655 16.2657 14.2907 16.2657Z" />
    </SVGIconGroup>
);

export const CameraIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`CameraIcon ${className || ''}`}
        >
            {CameraIconShape}
        </SVGIcon>
    );
};