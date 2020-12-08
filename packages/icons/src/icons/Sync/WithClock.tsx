import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const WithClockIconShape = (
    <SVGIconGroup>
        <SVGIconPath 
            d="M12.454462,3.0084931 C15.7345783,2.86733593 18.8389994,4.49398654 20.5899036,7.27129147 C22.3408079,10.0485964 22.4699043,13.5509894 20.9282136,16.4496577 C19.3865229,19.348326 16.4102782,21.1991069 13.1286708,21.2999846 L13.1286708,21.2999846 L13.088661,21.2999846 C12.7084975,21.3066545 12.3535612,21.1101628 12.1575533,20.784353 C11.9615454,20.4585432 11.9542441,20.0529136 12.1383996,19.7202609 C12.3225552,19.3876081 12.6701901,19.1784702 13.0503537,19.1716272 C16.5218923,19.0407663 19.3774122,16.3940001 19.7709349,12.9423562 C20.1644575,9.49071243 17.9779918,6.26910832 14.6249996,5.36018112 C11.2720075,4.45125393 7.75782712,6.12753017 6.35423457,9.30536481 C6.32682429,9.36626881 6.32959469,9.43650781 6.36171678,9.49506369 C6.39383886,9.55361958 6.45158638,9.59369971 6.51767912,9.60331062 L6.51767912,9.60331062 L7.97761355,9.82123669 C8.13718081,9.84471121 8.26977312,9.95635895 8.32007218,10.1095998 C8.37037125,10.2628407 8.3297357,10.431348 8.21511892,10.5448194 L8.21511892,10.5448194 L5.00581699,13.7336907 C4.91183964,13.8268128 4.77990338,13.87094 4.64881185,13.8530942 C4.51772032,13.8352484 4.40238086,13.757459 4.33671585,13.6426044 L4.33671585,13.6426044 L2.05615355,9.64161793 C1.97527784,9.50019808 1.98221885,9.3250204 2.0740303,9.19044286 C2.16751486,9.05828135 2.32632978,8.98853377 2.48689805,9.00912156 L2.48689805,9.00912156 L3.92469937,9.22534508 C4.0247995,9.23978393 4.12123517,9.18178019 4.15539455,9.08658747 C5.42713843,5.56025284 8.70879003,3.15615439 12.454462,3.00679056 L12.454462,3.00679056 Z M12.793269,7.04353054 C13.2634145,7.04353054 13.6445427,7.42465877 13.6445427,7.89480426 L13.6445427,7.89480426 L13.6445427,11.5127176 C13.6445427,11.6302539 13.7398248,11.725536 13.8573611,11.725536 L13.8573611,11.725536 L17.0496376,11.725536 C17.5197831,11.725536 17.9009113,12.1066642 17.9009113,12.5768097 C17.9009113,13.0469552 17.5197831,13.4280834 17.0496376,13.4280834 L17.0496376,13.4280834 L12.793269,13.4280834 C12.3231235,13.4280834 11.9419953,13.0469552 11.9419953,12.5768097 L11.9419953,12.5768097 L11.9419953,7.89480426 C11.9419953,7.42465877 12.3231235,7.04353054 12.793269,7.04353054 Z"
        />
    </SVGIconGroup>
);

export const WithClockIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{WithClockIconShape}</SVGIcon>;
};
