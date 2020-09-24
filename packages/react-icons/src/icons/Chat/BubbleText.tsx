import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const BubbleTextIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M20.9993953,2 C22.003519,2 22.8175221,2.81400312 22.8175221,3.81812685 L22.8175221,3.81812685 L22.8175221,16.0904831 C22.8175221,17.0946068 22.003519,17.9086099 20.9993953,17.9086099 L20.9993953,17.9086099 L12.1923889,17.9086099 L6.51710591,21.8384911 C6.23900145,22.03092 5.87706447,22.0530628 5.57757677,21.8959701 C5.27808907,21.7388775 5.09056131,21.4285196 5.0907854,21.0903319 L5.0907854,21.0903319 L5.0907854,17.9086099 L2.81812685,17.9086099 C2.34069011,17.9201042 1.87875565,17.7387659 1.53664087,17.4055461 C1.1945261,17.0723263 1.00108433,16.6153282 1,16.1377544 L1,16.1377544 L1,3.81812685 C1,2.81400312 1.81400312,2 2.81812685,2 L2.81812685,2 Z M20.7721294,3.81812685 L3.0453927,3.81812685 C2.91987724,3.81812685 2.81812685,3.91987724 2.81812685,4.0453927 L2.81812685,4.0453927 L2.81812685,15.8632172 C2.81812685,15.9887327 2.91987724,16.0904831 3.0453927,16.0904831 L3.0453927,16.0904831 L5.99984883,16.0904831 C6.50191069,16.0904831 6.90891225,16.4974846 6.90891225,16.9995465 L6.90891225,16.9995465 L6.90891225,19.3549298 L11.391504,16.2522963 C11.5434598,16.1470202 11.7239,16.0905732 11.9087611,16.0904831 L11.9087611,16.0904831 L20.7721294,16.0904831 C20.8976449,16.0904831 20.9993953,15.9887327 20.9993953,15.8632172 L20.9993953,15.8632172 L20.9993953,4.0453927 C20.9993953,3.91987724 20.8976449,3.81812685 20.7721294,3.81812685 L20.7721294,3.81812685 Z M17.3631416,11.0906342 C17.8652035,11.0906342 18.272205,11.4976358 18.272205,11.9996977 C18.272205,12.5017595 17.8652035,12.9087611 17.3631416,12.9087611 L17.3631416,12.9087611 L6.45438054,12.9087611 C5.95231867,12.9087611 5.54531711,12.5017595 5.54531711,11.9996977 C5.54531711,11.4976358 5.95231867,11.0906342 6.45438054,11.0906342 L6.45438054,11.0906342 Z M17.3631416,6.99984883 C17.8652035,6.99984883 18.272205,7.40685038 18.272205,7.90891225 C18.272205,8.41097411 17.8652035,8.81797567 17.3631416,8.81797567 L17.3631416,8.81797567 L6.45438054,8.81797567 C5.95231867,8.81797567 5.54531711,8.41097411 5.54531711,7.90891225 C5.54531711,7.40685038 5.95231867,6.99984883 6.45438054,6.99984883 L6.45438054,6.99984883 Z" />
    </SVGIconGroup>
);

export const BubbleTextIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{BubbleTextIconShape}</SVGIcon>;
};
