import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const CalendarIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M19.5,4.5 L17.2083333,4.5 C17.093274,4.5 17,4.40672599 17,4.29166667 L17,2.83333333 C17,2.37309604 16.626904,2 16.1666667,2 C15.7064294,2 15.3333333,2.37309604 15.3333333,2.83333333 L15.3333333,6.79166667 C15.3333333,7.13684464 15.0535113,7.41666667 14.7083333,7.41666667 L14.7083333,7.41666667 C14.3631554,7.41666667 14.0833333,7.13684464 14.0833333,6.79166667 L14.0833333,4.91666667 C14.0833333,4.68654802 13.8967853,4.5 13.6666667,4.5 L8.45833333,4.5 C8.34359866,4.5 8.25045894,4.40723375 8.25,4.2925 L8.25,2.83333333 C8.25,2.37309604 7.87690396,2 7.41666667,2 C6.95642938,2 6.58333333,2.37309604 6.58333333,2.83333333 L6.58333333,6.79166667 C6.58333333,7.13684464 6.3035113,7.41666667 5.95833333,7.41666667 L5.95833333,7.41666667 C5.61315536,7.41666667 5.33333333,7.13684464 5.33333333,6.79166667 L5.33333333,4.91666667 C5.33333333,4.68654802 5.14678531,4.5 4.91666667,4.5 L3.66666667,4.5 C2.74619208,4.5 2,5.24619208 2,6.16666667 L2,20.3333333 C2,21.2538079 2.74619208,22 3.66666667,22 L19.5,22 C20.4204746,22 21.1666667,21.2538079 21.1666667,20.3333333 L21.1666667,6.16666667 C21.1666667,5.24619208 20.4204746,4.5 19.5,4.5 Z M19.0833333,20.3333333 L4.08333333,20.3333333 C3.85321469,20.3333333 3.66666667,20.1467853 3.66666667,19.9166667 L3.66666667,9.91666667 C3.66666667,9.68654802 3.85321469,9.5 4.08333333,9.5 L19.0833333,9.5 C19.313452,9.5 19.5,9.68654802 19.5,9.91666667 L19.5,19.9166667 C19.5,20.1467853 19.313452,20.3333333 19.0833333,20.3333333 Z" />
    </SVGIconGroup>
);

export const CalendarIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`CalendarIcon ${className || ''}`}
        >
            {CalendarIconShape}
        </SVGIcon>
    );
};
