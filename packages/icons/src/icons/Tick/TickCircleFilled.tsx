/* This file is auto-generated, don't edit by hand! */

import React, { FunctionComponent, Fragment } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const TickCircleFilledLarge = (
    <Fragment>
        <SVGIconPath d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C21.9936 6.47982 17.5202 2.00643 12 2ZM17.7725 8.83333L12.0683 16.5742C11.9323 16.7547 11.7294 16.8729 11.5054 16.9024C11.2813 16.9318 11.0547 16.87 10.8767 16.7308L6.80333 13.4742C6.44389 13.1865 6.38568 12.6619 6.67333 12.3025C6.96098 11.9431 7.48555 11.8849 7.845 12.1725L11.2417 14.89L16.4308 7.8475C16.601 7.59216 16.8977 7.45099 17.2032 7.48003C17.5086 7.50908 17.7734 7.70364 17.8924 7.98648C18.0114 8.26931 17.9653 8.59465 17.7725 8.83333Z" />
    </Fragment>
);

const TickCircleFilledMedium = (
    <Fragment>
        <SVGIconPath d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.9949 7.58385 16.4161 4.00514 12 4ZM16.618 9.46667L12.0547 15.6593C11.9458 15.8037 11.7835 15.8983 11.6043 15.9219C11.425 15.9455 11.2438 15.896 11.1013 15.7847L7.84266 13.1793C7.55511 12.9492 7.50855 12.5296 7.73866 12.242C7.96878 11.9544 8.38844 11.9079 8.676 12.138L11.3933 14.312L15.5447 8.678C15.6808 8.47373 15.9182 8.36079 16.1625 8.38403C16.4069 8.40726 16.6187 8.56291 16.7139 8.78918C16.8091 9.01545 16.7723 9.27573 16.618 9.46667Z" />
    </Fragment>
);

const TickCircleFilledSmall = (
    <Fragment>
        <SVGIconPath d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C17.9961 8.68789 15.3121 6.00386 12 6ZM15.4635 10.1L12.041 14.7445C11.9594 14.8528 11.8377 14.9238 11.7032 14.9414C11.5688 14.9591 11.4328 14.922 11.326 14.8385L8.882 12.8845C8.66633 12.7119 8.63141 12.3972 8.804 12.1815C8.97659 11.9658 9.29133 11.9309 9.507 12.1035L11.545 13.734L14.6585 9.5085C14.7606 9.3553 14.9386 9.27059 15.1219 9.28802C15.3052 9.30545 15.4641 9.42219 15.5355 9.59189C15.6068 9.76159 15.5792 9.95679 15.4635 10.1Z" />
    </Fragment>
);

export const TickCircleFilledIcon: FunctionComponent<SVGIconPropsType> = (
    props,
) => {
    const { className, ...restProps } = props;
    const { small, medium, large } = props;
    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon
            {...restProps}
            className={`TickCircleFilledIcon ${className || ''}`}
        >
            <SVGIconGroup>
                {small && TickCircleFilledSmall}
                {medium && TickCircleFilledMedium}
                {(large || hasNoSize) && TickCircleFilledLarge}
            </SVGIconGroup>
        </SVGIcon>
    );
};

TickCircleFilledIcon.displayName = 'TickCircleFilledIcon';
