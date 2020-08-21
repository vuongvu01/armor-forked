import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ArrowUpTailIconShape = (
    <SVGIconGroup>
        <SVGIconPath
            d="M21.5935313,10.5329599 C21.0966743,10.1033864 20.3394547,10.1507679 19.9020851,10.6387989 L13.5841858,17.6925124 C13.5254617,17.7569531 13.4324244,17.7792399 13.3500998,17.7485869 C13.2677751,17.7179339 13.2131436,17.6406637 13.2126444,17.5541716 L13.2126444,3.17673009 C13.2126444,2.52684 12.6763916,2 12.0148901,2 C11.3533887,2 10.8171359,2.52684 10.8171359,3.17673009 L10.8171359,17.5541716 C10.8166367,17.6406637 10.7620052,17.7179339 10.6796805,17.7485869 C10.5973558,17.7792399 10.5043185,17.7569531 10.4455945,17.6925124 L4.12599863,10.6387989 C3.84815707,10.3054422 3.40718609,10.147777 2.97624703,10.2277155 C2.54530798,10.3076539 2.19321211,10.6124318 2.05822112,11.0223683 C1.92323013,11.4323047 2.02689904,11.8819422 2.32851894,12.1947161 L10.5160008,21.333542 C10.8947985,21.7571647 11.4409443,22 12.0148901,22 C12.588836,22 13.1349817,21.7571647 13.5137795,21.333542 L21.7012613,12.1938827 C21.9111889,11.9596072 22.0177773,11.6529904 21.9975735,11.3414986 C21.9773696,11.0300069 21.8320289,10.739162 21.5935313,10.5329599 L21.5935313,10.5329599 Z"
            transform="translate(12.000000, 12.000000) scale(1, -1) translate(-12.000000, -12.000000) "
        />
    </SVGIconGroup>
);

export const ArrowUpTailIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{ArrowUpTailIconShape}</SVGIcon>;
};
