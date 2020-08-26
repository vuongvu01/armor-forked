import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const UnlinkIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M5.92876576,11.8837716 C6.13802141,11.6671132 6.44789746,11.580222 6.73929281,11.6564947 C7.03068816,11.7327674 7.2582549,11.9603341 7.33452758,12.2517295 C7.41080026,12.5431248 7.32390907,12.8530009 7.10725071,13.0622565 L7.10725071,13.0622565 L4.27355282,15.8959544 C3.46462467,16.7117723 3.46462467,18.0271823 4.27355282,18.8430002 L4.27355282,18.8430002 L5.15783325,19.7264472 C5.98397144,20.5091013 7.27790743,20.5091013 8.10404561,19.7264472 L8.10404561,19.7264472 L10.9377435,16.8927493 C11.1469991,16.6760909 11.4568752,16.5891997 11.7482705,16.6654724 C12.0396659,16.7417451 12.2672326,16.9693118 12.3435053,17.2607072 C12.419778,17.5521025 12.3328868,17.8619786 12.1162284,18.0712342 L12.1162284,18.0712342 L9.28253056,20.9049321 C7.81626124,22.3649263 5.44561762,22.3649263 3.9793483,20.9049321 L3.9793483,20.9049321 L3.09506787,20.0214851 C1.63497738,18.5549304 1.63497738,16.1840242 3.09506787,14.7174694 L3.09506787,14.7174694 Z M18.1470043,7.83408389 C20.2525679,7.8513416 21.961228,9.54263051 22,11.6479079 L22,11.6479079 L22,13.314789 C21.9454394,15.401027 20.2134006,17.0499488 18.1270017,17.00193 L14.3965218,17.00193 C13.9362253,17.00193 13.5630813,16.628786 13.5630813,16.1684894 C13.5630813,15.7081929 13.9362253,15.3350489 14.3965218,15.3350489 L14.3965218,15.3350489 L18.1270017,15.3350489 C19.2877125,15.3690482 20.2650982,14.4740036 20.3331189,13.314789 L20.3331189,13.314789 L20.3331189,11.6479079 C20.2794138,10.4700503 19.3256403,9.53336693 18.1470043,9.500965 L18.1470043,9.500965 L14.3965218,9.500965 C13.9362253,9.500965 13.5630813,9.12782095 13.5630813,8.66752445 C13.5630813,8.20722794 13.9362253,7.83408389 14.3965218,7.83408389 L14.3965218,7.83408389 Z M6.50550663,7.83408389 C6.96580314,7.83408389 7.33894718,8.20722794 7.33894718,8.66752445 C7.33894718,9.12782095 6.96580314,9.500965 6.50550663,9.500965 L6.50550663,9.500965 L4.42190524,9.500965 C3.96160873,9.500965 3.58846468,9.12782095 3.58846468,8.66752445 C3.58846468,8.20722794 3.96160873,7.83408389 4.42190524,7.83408389 L4.42190524,7.83408389 Z M5.11381211,3.56785289 C5.4352983,3.2463667 5.95512008,3.24184959 6.28214456,3.5577004 L6.28214456,3.5577004 L7.94902567,5.22458151 C8.27438581,5.55003992 8.27438581,6.07760804 7.94902567,6.40306646 C7.62063226,6.72126045 7.09893414,6.72126045 6.77054072,6.40306646 L6.77054072,6.40306646 L5.10365961,4.73618534 C4.7878088,4.40916087 4.79232592,3.88933908 5.11381211,3.56785289 Z M9.91511194,2 C10.3754085,2 10.7485525,2.37314405 10.7485525,2.83344056 L10.7485525,2.83344056 L10.7485525,4.91704195 C10.7485525,5.37733845 10.3754085,5.7504825 9.91511194,5.7504825 C9.45481543,5.7504825 9.08167139,5.37733845 9.08167139,4.91704195 L9.08167139,4.91704195 L9.08167139,2.83344056 C9.08167139,2.37314405 9.45481543,2 9.91511194,2 Z" />
    </SVGIconGroup>
);

export const UnlinkIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{UnlinkIconShape}</SVGIcon>;
};