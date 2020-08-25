import React, { Children, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { RadioGroupPropsType } from './type';
import { extendChildrenWithProps } from './utils';

export const RADIO_GROUP_CLASS_PREFIX = 'RadioGroup';

export const RadioGroup: FunctionComponent<RadioGroupPropsType> = ({
    children,
    name,
    onChange,
    selectedValue,
    typographyProps,
    ...restProps
}) => {
    if (Children.count(children) === 0) {
        console.error(
            `${RADIO_GROUP_CLASS_PREFIX} should contain at least a single Radio component as a child`,
        );
        return null;
    }

    if (!name) {
        console.error(
            `A 'name' property must be supplied to ${RADIO_GROUP_CLASS_PREFIX}`,
        );
        return null;
    }

    const additionalProps = {
        name,
        onChange,
        selectedValue,
        typographyProps,
        ...restProps,
    };

    const childrenWithExtendedProps = extendChildrenWithProps(
        children,
        additionalProps,
    );

    return <>{childrenWithExtendedProps}</>;
};

RadioGroup.displayName = RADIO_GROUP_CLASS_PREFIX;

RadioGroup.defaultProps = {
    checked: false,
    disabled: false,
};

RadioGroup.propTypes = {
    selectedValue: PropTypes.string,
    typographyProps: PropTypes.object,
};
