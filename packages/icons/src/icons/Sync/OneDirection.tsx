import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const OneDirectionIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M12.45103,3.0084901 C8.7077606,3.15712332 5.42757302,5.55846692 4.1548974,9.08188207 C4.12098365,9.17715191 4.02425571,9.23497451 3.9242838,9.21973964 L2.48699096,9.00784744 C2.32653546,8.98765381 2.1679677,9.05729285 2.07426921,9.18910462 C1.98213729,9.32383199 1.97519437,9.49938864 2.05639879,9.64097111 L4.33615458,13.6405427 C4.40191431,13.7553526 4.51734117,13.8330378 4.64846155,13.8507329 C4.66744443,13.8520311 4.68649383,13.8520311 4.70547672,13.8507329 C4.8178101,13.8504841 4.92548714,13.8058226 5.0050191,13.7264909 L8.21318607,10.5387473 C8.32725119,10.4252626 8.36754295,10.2571413 8.31730973,10.1042811 C8.26707652,9.95142093 8.13491205,9.83997254 7.9757647,9.81627148 L6.51634656,9.59927345 C6.45045567,9.5893374 6.39297705,9.54921931 6.36092809,9.49079672 C6.32887912,9.43237412 6.3259322,9.36234151 6.35295981,9.30143302 C7.756056,6.12472219 11.2689936,4.44903876 14.6208,5.35764451 C17.9726064,6.26625027 20.1582989,9.48671508 19.7649154,12.9371382 C19.3715319,16.3875614 16.5170218,19.0333916 13.0467109,19.1642063 C10.7202667,19.2556318 8.50084974,18.1834081 7.12649397,16.3040871 C6.76698884,15.8690091 6.13027087,15.7904455 5.67579122,16.1250872 C5.22131158,16.4597289 5.10730547,17.0910645 5.4160389,17.5635267 C7.13947312,19.9121541 9.87829772,21.2997367 12.7914191,21.3001477 C12.9037474,21.3001477 13.0169268,21.3001477 13.1318081,21.2933399 C16.412255,21.1926709 19.3874471,19.3425445 20.9285926,16.4449013 C22.4697381,13.5472581 22.3406874,10.0461037 20.5904023,7.26978095 C18.8401173,4.4934582 15.7367941,2.86738285 12.4578378,3.0084901 L12.45103,3.0084901 Z" />
    </SVGIconGroup>
);

export const OneDirectionIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`OneDirectionIcon ${className || ''}`}
        >
            {OneDirectionIconShape}
        </SVGIcon>
    );
};
