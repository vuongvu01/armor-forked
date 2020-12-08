import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const TwoDirectionIconShape = (
    <SVGIconGroup>
        <SVGIconPath 
            d="M19.3568913,9.88510992 L19.4383152,9.88794757 C19.5746801,9.90359614 19.6956759,9.98264673 19.7647835,10.1012402 L19.7647835,10.1012402 L21.9412384,13.8699895 C22.024056,14.0127624 22.018999,14.1900943 21.9281796,14.3279156 C21.8469809,14.4493059 21.7103186,14.5218873 21.5642764,14.5211848 C21.5468868,14.5224242 21.5294311,14.5224242 21.5120415,14.5211848 L21.5120415,14.5211848 L20.5909657,14.4106209 C20.4850931,14.3982847 20.3857676,14.4641338 20.3559086,14.5664551 C19.4760037,17.6289187 17.0314795,19.9908419 13.9405901,20.7649987 C10.8950568,21.4874377 7.69921532,20.473363 5.62740288,18.1271353 C5.35916044,17.8375525 5.26876131,17.4254193 5.39117193,17.0501489 C5.51358256,16.6748786 5.82960748,16.3953181 6.21700805,16.3196016 C6.60440863,16.2438851 7.00243577,16.3838859 7.25713233,16.6854516 C8.79768336,18.4298149 11.1738008,19.1838138 13.4382643,18.6468727 C15.6125878,18.0977849 17.3674214,16.4962419 18.1124189,14.3810211 C18.1343619,14.3185174 18.1270082,14.249457 18.0923955,14.1929754 C18.0576779,14.1364292 17.9989748,14.0988977 17.933079,14.0911173 L17.933079,14.0911173 L16.3242435,13.8987187 C16.1608078,13.8785689 16.0227339,13.7679157 15.967465,13.6127944 C15.9121961,13.4576731 15.949195,13.2846424 16.0630689,13.1656887 L16.0630689,13.1656887 L19.0718002,10.0194054 C19.1655999,9.91900823 19.3020882,9.87005398 19.4383152,9.88794757 Z M10.0334182,4.22916478 C13.0788619,3.50668115 16.2746096,4.52116705 18.3457349,6.86789872 C18.7440852,7.31793608 18.7021846,8.00569023 18.2521473,8.40404061 C17.8021099,8.80239098 17.1143558,8.7604904 16.7160054,8.31045305 C15.1756983,6.56573655 12.7992038,5.81195266 10.5348734,6.34990245 C8.36086561,6.90120447 6.60660342,8.50320624 5.86071885,10.6183658 C5.83828446,10.6800456 5.84488214,10.7485556 5.8786749,10.8048205 C5.91246766,10.8610855 5.96984645,10.8990963 6.03483524,10.9082696 L6.03483524,10.9082696 L7.66978818,11.1102447 C7.83395004,11.1299058 7.97280156,11.2408723 8.02817583,11.3966586 C8.0835501,11.5524448 8.04588647,11.7261536 7.93096277,11.8450158 L7.93096277,11.8450158 L4.90394927,14.9730168 C4.8219654,15.0575971 4.70920325,15.1053404 4.59141034,15.1053453 C4.57344175,15.1066441 4.55540285,15.1066441 4.53743426,15.1053453 C4.40120658,15.0885975 4.28085723,15.0085797 4.21270719,14.889441 L4.21270719,14.889441 L2.05714623,11.1093741 C1.97537023,10.9659472 1.98177627,10.788601 2.07368729,10.651448 C2.1632458,10.5139622 2.32359915,10.4398749 2.48634314,10.4607905 L2.48634314,10.4607905 L3.38565432,10.5739662 C3.49176085,10.5876037 3.59195069,10.5217964 3.62158203,10.4190026 C4.50478663,7.36155464 6.94675899,5.00413123 10.0334182,4.22916478 Z"
        />
    </SVGIconGroup>
);

export const TwoDirectionIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{TwoDirectionIconShape}</SVGIcon>;
};
