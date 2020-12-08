import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const QuestionCircleFilledIconShape = (
    <SVGIconGroup>
        <SVGIconPath 
            d="M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C21.9940293,6.47962754 17.5203725,2.00597071 12,2 Z M12,17.8333333 C11.3096441,17.8333333 10.75,17.2736893 10.75,16.5833333 C10.75,15.8929774 11.3096441,15.3333333 12,15.3333333 C12.6903559,15.3333333 13.25,15.8929774 13.25,16.5833333 C13.25,17.2736893 12.6903559,17.8333333 12,17.8333333 Z M13.3333333,12.7666667 C13.0295099,12.899266 12.8331726,13.1993349 12.8333333,13.5308333 C12.8333333,13.9910706 12.4602373,14.3641667 12,14.3641667 C11.5397627,14.3641667 11.1666667,13.9910706 11.1666667,13.5308333 C11.166516,12.5366404 11.7554738,11.6368438 12.6666667,11.2391667 C13.4296819,10.9061594 13.8299406,10.0611846 13.6042605,9.25983914 C13.3785803,8.45849371 12.5961872,7.94658505 11.7715286,8.06070886 C10.94687,8.17483267 10.3329045,8.87998222 10.3333333,9.7125 C10.3333333,10.1727373 9.96023729,10.5458333 9.5,10.5458333 C9.03976271,10.5458333 8.66666667,10.1727373 8.66666667,9.7125 C8.66666667,8.04767531 9.89497424,6.638101 11.5441583,6.41043205 C13.1933424,6.1827631 14.7576362,7.20681685 15.208672,8.80937978 C15.6597079,10.4119427 14.8591704,12.1015701 13.3333333,12.7675 L13.3333333,12.7666667 Z"
        />
    </SVGIconGroup>
);

export const QuestionCircleFilledIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{QuestionCircleFilledIconShape}</SVGIcon>;
};
