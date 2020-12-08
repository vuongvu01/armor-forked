import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const AlignCenterIconShape = (
    <SVGIconGroup>
        <SVGIconPath 
            d="M20.8888889,20.6666667 C21.5025386,20.6666667 22,21.1641281 22,21.7777778 C22,22.3914275 21.5025386,22.8888889 20.8888889,22.8888889 L3.11111111,22.8888889 C2.49746139,22.8888889 2,22.3914275 2,21.7777778 C2,21.1641281 2.49746139,20.6666667 3.11111111,20.6666667 L20.8888889,20.6666667 Z M16.8888889,14.4444444 C17.5025386,14.4444444 18,14.9419058 18,15.5555556 C18,16.1692053 17.5025386,16.6666667 16.8888889,16.6666667 L7.11111111,16.6666667 C6.49746139,16.6666667 6,16.1692053 6,15.5555556 C6,14.9419058 6.49746139,14.4444444 7.11111111,14.4444444 L16.8888889,14.4444444 Z M19.1111111,8.22222222 C19.7247608,8.22222222 20.2222222,8.71968361 20.2222222,9.33333333 C20.2222222,9.94698306 19.7247608,10.4444444 19.1111111,10.4444444 L4.88888889,10.4444444 C4.27523917,10.4444444 3.77777778,9.94698306 3.77777778,9.33333333 C3.77777778,8.71968361 4.27523917,8.22222222 4.88888889,8.22222222 L19.1111111,8.22222222 Z M20.8888889,2 C21.5025386,2 22,2.49746139 22,3.11111111 C22,3.72476083 21.5025386,4.22222222 20.8888889,4.22222222 L3.11111111,4.22222222 C2.49746139,4.22222222 2,3.72476083 2,3.11111111 C2,2.49746139 2.49746139,2 3.11111111,2 L20.8888889,2 Z"
        />
    </SVGIconGroup>
);

export const AlignCenterIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{AlignCenterIconShape}</SVGIcon>;
};
