import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const PlayCircleFilledIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M11 0C8.82441 0 6.69767 0.645139 4.88873 1.85383C3.07979 3.06253 1.66989 4.78049 0.83733 6.79048C0.00476615 8.80047 -0.213071 11.0122 0.211367 13.146C0.635804 15.2798 1.68345 17.2398 3.22183 18.7782C4.76021 20.3165 6.72022 21.3642 8.85401 21.7886C10.9878 22.2131 13.1995 21.9952 15.2095 21.1627C17.2195 20.3301 18.9375 18.9202 20.1462 17.1113C21.3549 15.3023 22 13.1756 22 11C22 8.08262 20.8411 5.28472 18.7782 3.22182C16.7153 1.15892 13.9174 0 11 0V0ZM15.4275 11.8158L8.6625 15.1983C8.52296 15.2686 8.36776 15.3021 8.21164 15.2956C8.05551 15.289 7.90365 15.2427 7.77048 15.161C7.6373 15.0792 7.52724 14.9648 7.45073 14.8285C7.37422 14.6923 7.33381 14.5388 7.33334 14.3825V7.6175C7.33224 7.46046 7.3715 7.30578 7.44737 7.16828C7.52323 7.03078 7.63314 6.91508 7.76657 6.83226C7.89999 6.74944 8.05246 6.70229 8.20934 6.69533C8.36622 6.68837 8.52227 6.72183 8.6625 6.7925L15.4275 10.175C15.58 10.251 15.7084 10.3681 15.7981 10.513C15.8878 10.6579 15.9353 10.825 15.9353 10.9954C15.9353 11.1659 15.8878 11.3329 15.7981 11.4778C15.7084 11.6228 15.58 11.7398 15.4275 11.8158Z" />
    </SVGIconGroup>
);

export const PlayCircleFilledIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`PlayCircleFilledIcon ${className || ''}`}
        >
            {PlayCircleFilledIconShape}
        </SVGIcon>
    );
};