import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const UploadIconShape = (
    <SVGIconGroup>
        <SVGIconPath 
            d="M20.9795833,15.6015059 C21.5320167,15.6015059 21.9842178,16.0409676 22,16.5931755 L22,16.5931755 L22,18.1573422 C21.9981625,20.013638 20.4937958,21.5180047 18.6375,21.5198422 L18.6375,21.5198422 L5.3625,21.5198422 C3.50620416,21.5180047 2.00183746,20.013638 2,18.1573422 L2,18.1573422 L2,16.5931755 C2.0157822,16.0409676 2.46798325,15.6015059 3.02041667,15.6015059 C3.57285008,15.6015059 4.02505113,16.0409676 4.04083333,16.5931755 L4.04083333,16.5931755 L4.04083333,18.1548422 C4.04175159,18.8843978 4.63294435,19.4755906 5.3625,19.4765088 L5.3625,19.4765088 L18.6375,19.4765088 C19.3670557,19.4755906 19.9582484,18.8843978 19.9591667,18.1548422 L19.9591667,18.1548422 L19.9591667,16.5931755 C19.9749489,16.0409676 20.4271499,15.6015059 20.9795833,15.6015059 Z M10.9483333,2.3431755 C11.4277951,1.88560817 12.1822049,1.88560817 12.6616667,2.3431755 L12.6616667,2.3431755 L17.7433333,7.42234217 C18.0556264,7.6890174 18.1607933,8.12639595 18.0038712,8.50589311 C17.8469491,8.88539026 17.4635981,9.12076666 17.0541667,9.08900883 L17.0541667,9.08900883 L14.6375,9.08900883 C14.5224407,9.08900883 14.4291667,9.18228285 14.4291667,9.29734217 L14.4291667,9.29734217 L14.4291667,16.1540088 C14.4287077,16.8226784 13.8870024,17.3647565 13.2183333,17.3656755 L13.2183333,17.3656755 L10.3916667,17.3656755 C9.72267212,17.3652159 9.18045963,16.8230034 9.18,16.1540088 L9.18,16.1540088 L9.18083333,9.30150883 C9.18105596,9.24618745 9.15917811,9.19306761 9.12005967,9.15394916 C9.08094123,9.11483072 9.02782138,9.09295288 8.9725,9.0931755 L8.9725,9.0931755 L6.55583333,9.0931755 C6.14590478,9.12609111 5.76154667,8.89081382 5.6044004,8.51077448 C5.44725413,8.13073513 5.55320397,7.69271551 5.86666667,7.42650883 L5.86666667,7.42650883 Z"
        />
    </SVGIconGroup>
);

export const UploadIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{UploadIconShape}</SVGIcon>;
};
