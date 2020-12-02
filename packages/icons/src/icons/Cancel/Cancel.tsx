import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const CancelIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M13.9158102,12.146935 C13.8766294,12.1078531 13.8546095,12.0547873 13.8546095,11.9994472 C13.8546095,11.9441072 13.8766294,11.8910414 13.9158102,11.8519595 L21.634335,4.13426794 C22.122376,3.64553657 22.1218164,2.85370608 21.6330851,2.36566503 C21.1443537,1.87762397 20.3525232,1.87818356 19.8644822,2.3669149 L12.1467906,10.0812734 C12.1077087,10.1204542 12.054643,10.1424741 11.9993029,10.1424741 C11.9439628,10.1424741 11.890897,10.1204542 11.8518151,10.0812734 L4.13412356,2.3669149 C3.64608249,1.87864374 2.85462505,1.87845721 2.36635389,2.36649827 C1.87808273,2.85453934 1.87789619,3.64599678 2.36593726,4.13426794 L10.0827956,11.8519595 C10.1219763,11.8910414 10.1439962,11.9441072 10.1439962,11.9994472 C10.1439962,12.0547873 10.1219763,12.1078531 10.0827956,12.146935 L2.36593726,19.8654598 C2.05023005,20.1813159 1.92701175,20.6416067 2.04269752,21.0729452 C2.15838329,21.5042837 2.49539769,21.8411393 2.92679067,21.9566217 C3.35818365,22.0721041 3.81841635,21.9486689 4.13412356,21.6328128 L11.8518151,13.914288 C11.890897,13.8751072 11.9439628,13.8530874 11.9993029,13.8530874 C12.054643,13.8530874 12.1077087,13.8751072 12.1467906,13.914288 L19.8644822,21.6328128 C20.3525232,22.121084 21.1439807,22.1212705 21.6322518,21.6332295 C22.120523,21.1451884 22.1207095,20.353731 21.6326685,19.8654598 L13.9158102,12.146935 Z" />
    </SVGIconGroup>
);

export const CancelIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{CancelIconShape}</SVGIcon>;
};