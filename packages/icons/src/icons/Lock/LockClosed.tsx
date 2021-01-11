import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const LockClosedIconShape = (
    <SVGIconGroup>
        <SVGIconPath
            d="M18.1666667,9.91666667 L17.5416667,9.91666667 L17.5416667,7.625 C17.5416667,4.51839828 15.0232684,2 11.9166667,2 C8.81006495,2 6.29166667,4.51839828 6.29166667,7.625 L6.29166667,9.91666667 L5.66666667,9.91666667 C4.74619208,9.91666667 4,10.6628588 4,11.5833333 L4,20.3333333 C4,21.2538079 4.74619208,22 5.66666667,22 L18.1666667,22 C19.0871412,22 19.8333333,21.2538079 19.8333333,20.3333333 L19.8333333,11.5833333 C19.8333333,10.6628588 19.0871412,9.91666667 18.1666667,9.91666667 Z M10.2499827,14.9166667 C10.2463402,14.1069067 10.8252473,13.4116886 11.6222855,13.2686685 C12.4193237,13.1256485 13.2038299,13.5762166 13.481939,14.3367295 C13.760048,15.0972424 13.4512751,15.9476076 12.75,16.3525 L12.75,18.25 C12.75,18.7102373 12.376904,19.0833333 11.9166667,19.0833333 C11.4564294,19.0833333 11.0833333,18.7102373 11.0833333,18.25 L11.0833333,16.3525 C10.5692421,16.0568814 10.2516618,15.5096906 10.2499827,14.9166667 Z M8.375,7.625 C8.375,5.66899153 9.9606582,4.08333339 11.9166667,4.08333339 C13.8726751,4.08333339 15.4583333,5.66899153 15.4583333,7.625 L15.4583333,9.5 C15.4583333,9.73011865 15.2717853,9.91666667 15.0416667,9.91666667 L8.79166667,9.91666667 C8.56154802,9.91666667 8.375,9.73011865 8.375,9.5 L8.375,7.625 Z"
        />
    </SVGIconGroup>
);

export const LockClosedIcon: FunctionComponent<SVGIconPropsType> = props => {
    const {className, ...restProps} = props;
    return <SVGIcon {...restProps} className={`LockClosedIcon ${className || ''}`}>{LockClosedIconShape}</SVGIcon>;
};
