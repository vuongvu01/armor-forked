import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const CogIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M20.749999,9.91666623 L19.1983324,9.91666623 C19.0440694,9.38350003 18.830806,8.86920813 18.5624991,8.38333298 L19.659999,7.28666637 C19.8945928,7.05222293 20.0263988,6.73415915 20.0263988,6.40249976 C20.0263988,6.07084036 19.8945928,5.75277658 19.659999,5.51833314 L18.4808324,4.3408332 C17.9927076,3.85285581 17.2014573,3.85285581 16.7133325,4.3408332 L15.6149992,5.43833314 C15.1298013,5.16983239 14.6160391,4.9565568 14.0833327,4.80249984 L14.0833327,3.24999993 C14.0833327,2.55964403 13.5236886,2 12.8333327,2 L11.1666662,2 C10.4763103,2 9.91666623,2.55964403 9.91666623,3.24999993 L9.91666623,4.80249984 C9.38381863,4.95691255 8.86981917,5.17017062 8.38416631,5.43833314 L7.28583304,4.3408332 C6.79770825,3.85285581 6.00645792,3.85285581 5.51833314,4.3408332 L4.33916654,5.51916647 C4.10457279,5.75360992 3.97276675,6.07167369 3.97276675,6.40333309 C3.97276675,6.73499249 4.10457279,7.05305626 4.33916654,7.28749971 L5.43749981,8.38499964 C5.16882168,8.87011201 4.95553762,9.38389458 4.80166651,9.91666623 L3.24999993,9.91666623 C2.55964403,9.91666623 2,10.4763103 2,11.1666662 L2,12.8333327 C2,13.5236886 2.55964403,14.0833327 3.24999993,14.0833327 L4.80166651,14.0833327 C4.95547894,14.6163908 5.16876425,15.1304559 5.43749981,15.6158326 L4.3383332,16.7149992 C3.85035581,17.203124 3.85035581,17.9943743 4.3383332,18.4824991 L5.51666647,19.6608324 C6.01289786,20.1296346 6.78876832,20.1296346 7.28499971,19.6608324 L8.38333298,18.5633324 C8.86923817,18.8317896 9.38351563,19.0453266 9.91666623,19.199999 L9.91666623,20.749999 C9.91666623,21.4403549 10.4763103,22 11.1666662,22 L12.8333327,22 C13.5236886,22 14.0833327,21.4403549 14.0833327,20.749999 L14.0833327,19.199999 C14.6161894,19.0456125 15.1301917,18.8323532 15.6158326,18.5641657 L16.7141658,19.6616657 C17.2022906,20.1496431 17.993541,20.1496431 18.4816657,19.6616657 L19.659999,18.4833324 C20.1479764,17.9952076 20.1479764,17.2039573 19.659999,16.7158325 L18.5624991,15.6183326 C18.8310954,15.1325969 19.0443726,14.6182718 19.1983324,14.0849993 L20.749999,14.0849993 C21.0818085,14.0849996 21.4000037,13.9530748 21.6344722,13.7182938 C21.8689406,13.4835127 22.0004413,13.165142 22,12.8333327 L22,11.1666662 C22,10.4763103 21.4403549,9.91666623 20.749999,9.91666623 Z M11.9999994,16.1666659 C9.69881311,16.1666659 7.83333301,14.3011858 7.83333301,11.9999994 C7.83333301,9.69881311 9.69881311,7.83333301 11.9999994,7.83333301 C14.3011858,7.83333301 16.1666659,9.69881311 16.1666659,11.9999994 C16.1639108,14.3000436 14.3000436,16.1639108 11.9999994,16.1666659 Z" />
    </SVGIconGroup>
);

export const CogIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{CogIconShape}</SVGIcon>;
};
