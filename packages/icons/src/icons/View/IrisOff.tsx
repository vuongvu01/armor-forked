import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const IrisOffIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M19.5256 7.92342C18.449 6.74333 17.2187 5.7133 15.8677 4.861L19.2704 1.46257C19.4915 1.24899 19.5802 0.932706 19.5024 0.635286C19.4245 0.337867 19.1923 0.105595 18.8948 0.0277454C18.5974 -0.0501042 18.2811 0.0385834 18.0676 0.259721L18.0522 0.275033C18.0231 0.36785 17.9727 0.452601 17.9051 0.522579L1.31698 17.1107C1.31384 17.1134 1.31033 17.1153 1.3068 17.1171C1.30268 17.1193 1.29852 17.1215 1.29486 17.1251C1.14108 17.4998 1.27283 17.931 1.60977 18.1558C1.94671 18.3805 2.39541 18.3366 2.68231 18.0507L6.20919 14.5238C7.36671 15.0292 8.61274 15.3006 9.87559 15.3226H10.1308C13.7512 15.3226 17.3521 12.7842 19.5316 10.3887C20.1586 9.68567 20.156 8.62339 19.5256 7.92342ZM13.6671 10.2381C13.2921 11.4643 12.3378 12.4275 11.1151 12.8139C10.2467 13.0905 9.30623 13.0328 8.47804 12.6523C8.41529 12.6219 8.37119 12.5629 8.3597 12.4941C8.3482 12.4253 8.37075 12.3552 8.42019 12.3061L13.1499 7.57718C13.1988 7.5273 13.2689 7.50436 13.3378 7.51571C13.4068 7.52705 13.4658 7.57126 13.4962 7.63418C13.8713 8.45161 13.9322 9.37861 13.6671 10.2381ZM6.31969 10.1445C6.34078 10.2169 6.32091 10.2951 6.2678 10.3487L3.6775 12.9432C3.60308 13.0172 3.4865 13.0275 3.40018 12.9679C2.33508 12.2169 1.35449 11.3526 0.475575 10.3904C-0.160801 9.69027 -0.158219 8.62041 0.481529 7.9234C2.68222 5.49984 6.34011 2.94102 9.99799 2.99036C10.9336 2.98508 11.8642 3.12806 12.755 3.41399C12.8263 3.43747 12.8803 3.49626 12.8976 3.56928C12.915 3.6423 12.8932 3.7191 12.8401 3.77212L11.1889 5.42413C11.1355 5.47754 11.0574 5.49774 10.9848 5.47687C10.6642 5.38272 10.3321 5.3332 9.99799 5.3297C7.88383 5.3297 6.16997 7.04357 6.16997 9.15773C6.17472 9.49194 6.22509 9.82393 6.31969 10.1445Z" />
    </SVGIconGroup>
);

export const IrisOffIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon {...restProps} className={`IrisOffIcon ${className || ''}`}>
            {IrisOffIconShape}
        </SVGIcon>
    );
};
