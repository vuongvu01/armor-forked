import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const AttachmentIconShape = (
    <SVGIconGroup>
        <SVGIconPath 
            d="M20.2819197,4.71773114 C19.1824657,3.61790632 17.6910634,3 16.1359384,3 C14.5808133,3 13.0894111,3.61790632 11.989957,4.71773114 L3.24996218,13.4568838 C1.57753718,15.1457877 1.58421153,17.8686503 3.26489615,19.5493349 C4.94558077,21.2300196 7.66844343,21.2366939 9.35734728,19.5642689 L16.4559613,12.4639705 C17.2019743,11.773566 17.5105096,10.7303605 17.2600445,9.74524066 C17.0095795,8.76012082 16.2402532,7.9909598 15.2550795,7.74070647 C14.2699059,7.49045314 13.2267667,7.79921256 12.5365225,8.5453739 L8.16652509,12.9111605 C7.95350431,13.1238804 7.87014971,13.4340869 7.94786015,13.7249283 C8.0255706,14.0157696 8.25254003,14.2430601 8.54327125,14.3211815 C8.83400248,14.399303 9.14432651,14.3163869 9.35734728,14.103667 L13.7273447,9.73198526 C14.155668,9.32330905 14.8319161,9.33133726 15.2504167,9.75006669 C15.6689173,10.1687961 15.6765759,10.8450485 15.2676656,11.2731483 L8.16652509,18.3734467 C7.13769019,19.4022816 5.4696193,19.4022815 4.44078443,18.3734467 C3.41194956,17.3446118 3.41194954,15.6765409 4.44078437,14.647706 L13.1807792,5.90855333 C14.8128685,4.27646399 17.4590082,4.27646399 19.0910975,5.90855333 C20.7231869,7.54064267 20.7231869,10.1867823 19.0910975,11.8188717 L12.5365225,18.3734467 C12.317596,18.584893 12.2297952,18.8980131 12.3068663,19.1924589 C12.3839375,19.4869048 12.6138866,19.7168539 12.9083325,19.7939251 C13.2027783,19.8709962 13.5158984,19.7831954 13.7273447,19.5642689 L20.2819197,13.0088517 C21.3819511,11.9095073 22,10.4180639 22,8.86287034 C22,7.30767675 21.3819511,5.8162334 20.2819197,4.71688897 L20.2819197,4.71773114 Z"
        />
    </SVGIconGroup>
);

export const AttachmentIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{AttachmentIconShape}</SVGIcon>;
};
