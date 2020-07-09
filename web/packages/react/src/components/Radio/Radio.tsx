import React, { FunctionComponent, forwardRef, ChangeEvent } from 'react';
import uniqueId from 'lodash.uniqueid';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { useRadioClassName } from './utils';
import { RadioLabel, RadioInput, RadioRoot } from './style';
import { RadioPropsType } from './type';
import { buttonDefaultTheme } from './theme';

const CLASS_PREFIX = 'Radio';

export const Radio: FunctionComponent<RadioPropsType> = forwardRef(
    function Radio(
        {
            checked,
            className,
            classNames,
            disabled,
            id: propsId,
            label,
            name,
            onChange,
            value,
            ...restProps
        },
        ref,
    ) {
        const theme = useTheme();
        const id = propsId || uniqueId('radio-id-');

        useThemeOverride(CLASS_PREFIX, theme, buttonDefaultTheme);

        const classOverride = useRadioClassName(
            CLASS_PREFIX,
            className,
            classNames,
            disabled,
            checked,
        );

        const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(event);

        return (
            <RadioRoot theme={theme} className={classOverride.Root}>
                <RadioInput
                    checked={checked}
                    className={classOverride.Input}
                    disabled={disabled}
                    id={id}
                    name={name}
                    onChange={handleOnChange}
                    ref={ref}
                    theme={theme}
                    type="radio"
                    value={value}
                    {...restProps}
                />
                <RadioLabel
                    className={classOverride.Checkmark}
                    disabled={disabled}
                    htmlFor={id}
                    theme={theme}
                >
                    {label}
                </RadioLabel>
            </RadioRoot>
        );
    },
);

Radio.defaultProps = {
    checked: false,
    disabled: false,
};

Radio.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    ref: PropTypes.func,
    value: PropTypes.string,
};
