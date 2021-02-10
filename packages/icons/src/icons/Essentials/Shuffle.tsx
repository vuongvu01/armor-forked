import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ShuffleIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M19.2481171,13.0657748 C19.6109213,12.9558641 20.0029077,13.0964112 20.2132162,13.4118119 L20.2132162,13.4118119 L21.8553561,15.8745917 C22.0482146,16.1636538 22.0482146,16.5403621 21.8553561,16.8294242 L21.8553561,16.8294242 L20.2132162,19.2956448 C20.0536262,19.5348431 19.7850714,19.678449 19.4975219,19.678449 C19.4129707,19.6788718 19.3288486,19.6663985 19.2480611,19.6414491 C18.8827777,19.5324256 18.6328159,19.1959924 18.6338715,18.8147877 L18.6338715,18.8147877 L18.6338715,17.6423222 C18.6338715,17.5235521 18.5375893,17.4272698 18.4188192,17.4272698 L18.4188192,17.4272698 L17.0304411,17.4272698 C15.4062823,17.3562248 13.8802525,16.6299873 12.800791,15.4143796 C12.5337271,15.1377887 12.4345094,14.7397313 12.5405122,14.3701517 C12.646515,14.0005721 12.941634,13.7156183 13.3147007,13.6226296 C13.6877675,13.5296409 14.0821042,13.6427446 14.3491681,13.9193355 C15.0293496,14.7090388 15.9946816,15.1971175 17.0338819,15.2767461 L17.0338819,15.2767461 L18.42226,15.2767461 C18.5410302,15.2767461 18.6373124,15.1804639 18.6373124,15.0616937 L18.6373124,15.0616937 L18.6373124,13.8892282 C18.6372273,13.5101408 18.8853129,13.1756855 19.2481171,13.0657748 Z M19.2481171,4.03701603 C19.6109213,3.92710536 20.0029077,4.06765245 20.2132162,4.38305317 L20.2132162,4.38305317 L21.8553561,6.84239209 C22.0482146,7.1314542 22.0482146,7.50816252 21.8553561,7.79722462 L21.8553561,7.79722462 L20.2132162,10.2634452 C20.0536262,10.5026434 19.7850714,10.6462815 19.4975219,10.6462384 C19.4129707,10.6466722 19.3288486,10.6341989 19.2480611,10.6092494 C18.8853615,10.4993435 18.6373225,10.1650149 18.6373124,9.78602896 L18.6373124,9.78602896 L18.6373124,8.61442364 C18.6373124,8.49565349 18.5410302,8.39937126 18.42226,8.39937126 L18.42226,8.39937126 L17.0338819,8.39937126 C15.6759798,8.39937126 14.4582611,10.1601938 13.2863695,11.9937569 L13.0167036,12.4174098 C11.4476815,14.8827702 9.82532639,17.4315709 7.18276285,17.4315709 L7.18276285,17.4315709 L3.07526255,17.4315709 C2.48141182,17.4315709 2.00000069,16.9501597 2.00000069,16.356309 C2.00000069,15.7624583 2.48141182,15.2810472 3.07526255,15.2810472 L3.07526255,15.2810472 L7.18276285,15.2810472 C8.64511898,15.2810472 9.94317509,13.2371894 11.1999412,11.2621484 C12.7689633,8.79678805 14.3913184,6.24798734 17.0338819,6.24798734 L17.0338819,6.24798734 L18.42226,6.24798734 C18.5410302,6.24798734 18.6373124,6.15170511 18.6373124,6.03293496 L18.6373124,6.03293496 L18.6373124,4.86046943 C18.6372273,4.48138205 18.8853129,4.14692669 19.2481171,4.03701603 Z M7.18276285,6.24884755 C8.81686853,6.32026786 10.3104391,7.19355599 11.1741349,8.58259588 C11.5117689,9.06717031 11.3953715,9.73336321 10.9134269,10.0747406 C10.4314823,10.416118 9.76440781,10.3048844 9.41930752,9.82559859 C8.94360583,9.02100556 8.11293105,8.49129064 7.18276285,8.39937126 L7.18276285,8.39937126 L3.07526255,8.39937126 C2.78993627,8.39937136 2.51630876,8.28596709 2.3146333,8.08413029 C2.11295784,7.88229349 1.99977243,7.60857538 2.00000034,7.3232492 C2.0004755,6.72973443 2.48174759,6.24884755 3.07526255,6.24884755 L3.07526255,6.24884755 Z" />
    </SVGIconGroup>
);

export const ShuffleIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon {...restProps} className={`ShuffleIcon ${className || ''}`}>
            {ShuffleIconShape}
        </SVGIcon>
    );
};
