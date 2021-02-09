import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ListBulletIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M4.08333333,16.3333333 C5.23392656,16.3333333 6.16666667,17.2660734 6.16666667,18.4166667 C6.16666667,19.5672599 5.23392656,20.5 4.08333333,20.5 C2.9327401,20.5 2,19.5672599 2,18.4166667 C2,17.2660734 2.9327401,16.3333333 4.08333333,16.3333333 Z M21.1666667,17.585 C21.626904,17.585 22,17.958096 22,18.4183333 C22,18.8785706 21.626904,19.2516667 21.1666667,19.2516667 L21.1666667,19.2516667 L9.08333333,19.2516667 C8.62309604,19.2516667 8.25,18.8785706 8.25,18.4183333 C8.25,17.958096 8.62309604,17.585 9.08333333,17.585 L9.08333333,17.585 Z M4.08333333,9.66666667 C5.23392656,9.66666667 6.16666667,10.5994068 6.16666667,11.75 C6.16666667,12.9005932 5.23392656,13.8333333 4.08333333,13.8333333 C2.9327401,13.8333333 2,12.9005932 2,11.75 C2,10.5994068 2.9327401,9.66666667 4.08333333,9.66666667 Z M21.1666667,10.9183333 C21.626904,10.9183333 22,11.2914294 22,11.7516667 C22,12.211904 21.626904,12.585 21.1666667,12.585 L21.1666667,12.585 L9.08333333,12.585 C8.62309604,12.585 8.25,12.211904 8.25,11.7516667 C8.25,11.2914294 8.62309604,10.9183333 9.08333333,10.9183333 L9.08333333,10.9183333 Z M4.08333333,3 C5.23392656,3 6.16666667,3.9327401 6.16666667,5.08333333 C6.16666667,6.23392656 5.23392656,7.16666667 4.08333333,7.16666667 C2.9327401,7.16666667 2,6.23392656 2,5.08333333 C2,3.9327401 2.9327401,3 4.08333333,3 Z M21.1666667,4.25166667 C21.626904,4.25166667 22,4.62476271 22,5.085 C22,5.54523729 21.626904,5.91833333 21.1666667,5.91833333 L21.1666667,5.91833333 L9.08333333,5.91833333 C8.62309604,5.91833333 8.25,5.54523729 8.25,5.085 C8.25,4.62476271 8.62309604,4.25166667 9.08333333,4.25166667 L9.08333333,4.25166667 Z" />
    </SVGIconGroup>
);

export const ListBulletIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon {...restProps} className={`ListBulletIcon ${className || ''}`}>
            {ListBulletIconShape}
        </SVGIcon>
    );
};
