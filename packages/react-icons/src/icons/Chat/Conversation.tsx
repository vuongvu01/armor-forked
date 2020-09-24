import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ConversationIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M20.5446467,11.9995867 C21.1473865,11.9995867 21.7254397,12.2390241 22.1516411,12.6652256 C22.5778426,13.091427 22.81728,13.6694802 22.81728,14.27222 L22.81728,14.27222 L22.81728,16.99938 C22.81728,17.6021199 22.5778426,18.180173 22.1516411,18.6063745 C21.7254397,19.0325759 21.1473865,19.2720134 20.5446467,19.2720134 L20.5446467,19.2720134 L19.1810667,19.2720134 L19.1810667,21.5446467 C19.1813961,21.7287381 19.0706505,21.894849 18.9005904,21.9653423 C18.7305303,22.0358356 18.5347427,21.9967888 18.4047351,21.8664516 L18.4047351,21.8664516 L15.811206,19.2720134 L14.1812733,19.2720134 C12.9261326,19.2720134 11.90864,18.2545208 11.90864,16.99938 L11.90864,16.99938 L11.90864,14.27222 C11.90864,13.0170793 12.9261326,11.9995867 14.1812733,11.9995867 L14.1812733,11.9995867 Z M14.1812733,2 C16.4394883,2.00250496 18.2695084,3.83252508 18.2720134,6.09074001 L18.2720134,6.09074001 L18.2720134,10.4087433 C18.2720134,10.5342574 18.1702641,10.6360067 18.04475,10.6360067 L18.04475,10.6360067 L14.1812733,10.6360067 C12.4273735,10.6428936 10.9295337,11.9034671 10.6232386,13.6304284 C10.604211,13.7389591 10.5097971,13.8180211 10.3996115,13.8176933 L10.3996115,13.8176933 L9.49055814,13.8176933 C9.42490047,13.8175122 9.36245314,13.8460786 9.31965612,13.8958719 L9.31965612,13.8958719 L6.34159739,17.2984586 C6.21689016,17.4407299 6.01709647,17.4908762 5.83998516,17.4243584 C5.66287385,17.3578406 5.54548658,17.1885704 5.54526667,16.99938 L5.54526667,16.99938 L5.54526667,13.8176933 L5.09074001,13.8176933 C2.83148668,13.8176933 1,11.9862067 1,9.72695334 L1,9.72695334 L1,6.09074001 C1.00250496,3.83252508 2.83252508,2.00250496 5.09074001,2 L5.09074001,2 Z" />
    </SVGIconGroup>
);

export const ConversationIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{ConversationIconShape}</SVGIcon>;
};
