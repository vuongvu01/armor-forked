import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const AlignRightIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M20.930764,19.053206 C21.5194031,19.053206 21.9965894,19.5303923 21.9965894,20.1190314 C21.9965894,20.7076705 21.5194031,21.1848568 20.930764,21.1848568 L3.06582538,21.1848568 C2.47718627,21.1848568 2,20.7076705 2,20.1190314 C2,19.5303923 2.47718627,19.053206 3.06582538,19.053206 L20.930764,19.053206 Z M20.930764,13.3685198 C21.5194031,13.3685198 21.9965894,13.8457061 21.9965894,14.4343452 C21.9965894,15.0229843 21.5194031,15.5001705 20.930764,15.5001705 L6.31360846,15.5001705 C5.72496936,15.5001705 5.24778308,15.0229843 5.24778308,14.4343452 C5.24778308,13.8457061 5.72496936,13.3685198 6.31360846,13.3685198 L20.930764,13.3685198 Z M20.930764,7.68468622 C21.5194031,7.68468622 21.9965894,8.1618725 21.9965894,8.7505116 C21.9965894,9.3391507 21.5194031,9.81633697 20.930764,9.81633697 L8.74965894,9.81633697 C8.16101984,9.81633697 7.68383356,9.3391507 7.68383356,8.7505116 C7.68383356,8.1618725 8.16101984,7.68468622 8.74965894,7.68468622 L20.930764,7.68468622 Z M20.9341746,2 C21.5228137,2 22,2.47718627 22,3.06582538 C22,3.65446448 21.5228137,4.13165075 20.9341746,4.13165075 L5.50102319,4.13165075 C4.91238409,4.13165075 4.43519782,3.65446448 4.43519782,3.06582538 C4.43519782,2.47718627 4.91238409,2 5.50102319,2 L20.9341746,2 Z" />
    </SVGIconGroup>
);

export const AlignRightIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{AlignRightIconShape}</SVGIcon>;
};
