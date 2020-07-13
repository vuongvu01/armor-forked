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
}) => {
    if (Children.count(children) === 0) {
        console.error(
            `${RADIO_GROUP_CLASS_PREFIX} should contain at least a single Radio component as a child`,
        );
        return null;
    }

    const additionalProps = { name, onChange, selectedValue };

    const childrenWithExtendedProps = extendChildrenWithProps(
        children,
        additionalProps,
    );

    return <>{childrenWithExtendedProps}</>;
};

RadioGroup.defaultProps = {
    checked: false,
    disabled: false,
};

RadioGroup.propTypes = {
    selectedValue: PropTypes.string,
};
