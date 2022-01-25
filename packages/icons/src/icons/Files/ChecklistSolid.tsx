import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ChecklistSolidIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M19.9167 2H4.08333C3.5308 2 3.0009 2.21949 2.61019 2.61019C2.21949 3.0009 2 3.5308 2 4.08333L2 19.9167C2 20.1903 2.05389 20.4612 2.15858 20.7139C2.26328 20.9667 2.41674 21.1964 2.61019 21.3898C2.80365 21.5833 3.03331 21.7367 3.28608 21.8414C3.53884 21.9461 3.80975 22 4.08333 22H19.9167C20.1903 22 20.4612 21.9461 20.7139 21.8414C20.9667 21.7367 21.1964 21.5833 21.3898 21.3898C21.5833 21.1964 21.7367 20.9667 21.8414 20.7139C21.9461 20.4612 22 20.1903 22 19.9167V4.08333C22 3.80975 21.9461 3.53884 21.8414 3.28608C21.7367 3.03331 21.5833 2.80365 21.3898 2.61019C21.1964 2.41674 20.9667 2.26328 20.7139 2.15858C20.4612 2.05389 20.1903 2 19.9167 2V2ZM17.4167 9.91667H13.6667C13.4457 9.91667 13.2337 9.82887 13.0774 9.67259C12.9211 9.51631 12.8333 9.30435 12.8333 9.08333C12.8333 8.86232 12.9211 8.65036 13.0774 8.49408C13.2337 8.3378 13.4457 8.25 13.6667 8.25H17.4167C17.6377 8.25 17.8496 8.3378 18.0059 8.49408C18.1622 8.65036 18.25 8.86232 18.25 9.08333C18.25 9.30435 18.1622 9.51631 18.0059 9.67259C17.8496 9.82887 17.6377 9.91667 17.4167 9.91667ZM18.25 16.5833C18.25 16.8043 18.1622 17.0163 18.0059 17.1726C17.8496 17.3289 17.6377 17.4167 17.4167 17.4167H13.6667C13.4457 17.4167 13.2337 17.3289 13.0774 17.1726C12.9211 17.0163 12.8333 16.8043 12.8333 16.5833C12.8333 16.3623 12.9211 16.1504 13.0774 15.9941C13.2337 15.8378 13.4457 15.75 13.6667 15.75H17.4167C17.6377 15.75 17.8496 15.8378 18.0059 15.9941C18.1622 16.1504 18.25 16.3623 18.25 16.5833ZM11.4167 6.66667L8.91667 10C8.84516 10.096 8.75381 10.1755 8.64883 10.233C8.54386 10.2905 8.42772 10.3247 8.30833 10.3333C8.18899 10.3421 8.06916 10.325 7.957 10.2833C7.84484 10.2416 7.74297 10.1763 7.65833 10.0917L6.40833 8.84167C6.33063 8.76397 6.269 8.67173 6.22695 8.57021C6.1849 8.46869 6.16326 8.35988 6.16326 8.25C6.16326 8.14012 6.1849 8.03131 6.22695 7.92979C6.269 7.82827 6.33063 7.73603 6.40833 7.65833C6.48603 7.58063 6.57827 7.519 6.67979 7.47695C6.78131 7.4349 6.89012 7.41326 7 7.41326C7.10988 7.41326 7.21869 7.4349 7.32021 7.47695C7.42173 7.519 7.51397 7.58063 7.59167 7.65833L8.15833 8.23333L10.0833 5.66667C10.2159 5.48986 10.4134 5.37296 10.6321 5.34171C10.8509 5.31045 11.0732 5.36739 11.25 5.5C11.4268 5.63261 11.5437 5.83002 11.575 6.04882C11.6062 6.26761 11.5493 6.48986 11.4167 6.66667ZM11.4167 15L8.91667 18.3333C8.84523 18.4294 8.75393 18.509 8.64898 18.5666C8.54403 18.6242 8.42789 18.6585 8.30848 18.6672C8.18907 18.6759 8.06919 18.6588 7.957 18.617C7.84481 18.5752 7.74294 18.5097 7.65833 18.425L6.40833 17.175C6.25141 17.0181 6.16326 16.8053 6.16326 16.5833C6.16326 16.3614 6.25141 16.1486 6.40833 15.9917C6.56525 15.8347 6.77808 15.7466 7 15.7466C7.22192 15.7466 7.43475 15.8347 7.59167 15.9917L8.15833 16.5667L10.0833 14C10.2159 13.8232 10.4134 13.7063 10.6321 13.675C10.8509 13.6438 11.0732 13.7007 11.25 13.8333C11.4268 13.9659 11.5437 14.1634 11.575 14.3821C11.6062 14.6009 11.5493 14.8232 11.4167 15Z" />
    </SVGIconGroup>
);

export const ChecklistSolidIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`ChecklistSolidIcon ${className || ''}`}
        >
            {ChecklistSolidIconShape}
        </SVGIcon>
    );
};
