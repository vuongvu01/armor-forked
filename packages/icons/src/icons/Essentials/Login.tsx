import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const LoginIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M7.5834 0H17.3333C18.2538 0 19 0.778635 19 1.73913V18.2609C19 19.2214 18.2538 20 17.3333 20H7.5834C6.66294 20 5.91675 19.2214 5.91675 18.2609V15.6522C5.91675 15.1719 6.28985 14.7826 6.75008 14.7826C7.21031 14.7826 7.5834 15.1719 7.5834 15.6522V17.8261C7.5834 18.0662 7.76995 18.2609 8.00007 18.2609H16.9167C17.1468 18.2609 17.3333 18.0662 17.3333 17.8261V2.17391C17.3333 1.93379 17.1468 1.73913 16.9167 1.73913H8.00007C7.76995 1.73913 7.5834 1.93379 7.5834 2.17391V4.34783C7.5834 4.82807 7.21031 5.21739 6.75008 5.21739C6.28985 5.21739 5.91675 4.82807 5.91675 4.34783V1.73913C5.91675 0.778635 6.66294 0 7.5834 0ZM0.00012207 10.4348C0.00012207 11.1552 0.559762 11.7391 1.25011 11.7391H8.75004V13.913C8.74992 14.2338 8.91903 14.5286 9.19004 14.68C9.46164 14.8291 9.78942 14.8124 10.0459 14.6365L15.0458 11.1583C15.2776 10.997 15.4168 10.7255 15.4168 10.4348C15.4168 10.1441 15.2776 9.87259 15.0458 9.71131L10.0459 6.23304C9.79015 6.05502 9.46128 6.03835 9.19023 6.18968C8.91919 6.341 8.74999 6.63575 8.75004 6.95652V9.13044H1.25011C0.559762 9.13044 0.00012207 9.71441 0.00012207 10.4348Z" />
    </SVGIconGroup>
);

export const LoginIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`LoginIcon ${className || ''}`}
        >
            {LoginIconShape}
        </SVGIcon>
    );
};
