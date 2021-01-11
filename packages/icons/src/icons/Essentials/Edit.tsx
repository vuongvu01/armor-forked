import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const EditIconShape = (
    <SVGIconGroup>
        <SVGIconPath
            d="M4.10414227,15.8053767 C4.24488284,15.7713814 4.39318262,15.8128578 4.4958668,15.914934 L4.4958668,15.914934 L8.06716327,19.4870641 C8.16965316,19.5897254 8.21139639,19.7382891 8.17737516,19.8793071 C8.14335393,20.0203252 8.03846205,20.1335125 7.90043607,20.1781483 L7.90043607,20.1781483 L2.54849319,21.9612956 C2.39853314,22.0097007 2.2340981,21.9708401 2.12167158,21.8604257 C2.0101589,21.7485923 1.971428,21.5833405 2.02163526,21.4336041 L2.02163526,21.4336041 L3.80561622,16.0816612 C3.85038517,15.9439683 3.96340171,15.839372 4.10414227,15.8053767 Z M14.8996436,4.9117729 C15.06491,4.75520539 15.3237579,4.75520539 15.4890242,4.9117729 L15.4890242,4.9117729 L19.0569862,8.4814021 C19.2197044,8.64416946 19.2197044,8.90801536 19.0569862,9.07078272 L19.0569862,9.07078272 L9.54269892,18.5834027 C9.37993156,18.7461209 9.11608565,18.7461209 8.9533183,18.5834027 L8.9533183,18.5834027 L5.38535637,15.0154408 C5.22263816,14.8526734 5.22263816,14.5888275 5.38535637,14.4260601 L5.38535637,14.4260601 Z M16.9837335,2.83268481 C18.1474627,1.7224384 19.9781805,1.7224384 21.1419097,2.83268481 C22.2860301,3.98101406 22.2860301,5.83836356 21.1419097,6.98669281 L21.1419097,6.98669281 L20.5466936,7.5844098 C20.3839263,7.74712801 20.1200804,7.74712801 19.957313,7.5844098 L19.957313,7.5844098 L16.3901847,4.01644788 C16.2274665,3.85368052 16.2274665,3.58983461 16.3901847,3.42706725 L16.3901847,3.42706725 Z"
        />
    </SVGIconGroup>
);

export const EditIcon: FunctionComponent<SVGIconPropsType> = props => {
    const {className, ...restProps} = props;
    return <SVGIcon {...restProps} className={`EditIcon ${className || ''}`}>{EditIconShape}</SVGIcon>;
};
