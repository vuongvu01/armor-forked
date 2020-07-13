import React, { FunctionComponent, forwardRef, ChangeEvent } from 'react';
import uniqueId from 'lodash.uniqueid';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { useRadioClassName } from './utils';
import { RadioLabel, RadioInput, RadioRoot } from './style';
import { RadioPropsType } from './type';
import { buttonDefaultTheme } from './theme';

export const RADIO_CLASS_PREFIX = 'Radio';

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
            selectedValue,
            value,
            ...restProps
        },
        ref,
    ) {
        const theme = useTheme();
        const id = propsId || uniqueId('radio-id-');
        const isChecked = checked || value === selectedValue;

        useThemeOverride(RADIO_CLASS_PREFIX, theme, buttonDefaultTheme);

        const classOverride = useRadioClassName(
            RADIO_CLASS_PREFIX,
            className,
            classNames,
            disabled,
            isChecked,
        );

        const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(event);

        return (
            <RadioRoot className={classOverride.Root} theme={theme}>
                <RadioInput
                    checked={isChecked}
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
                    className={classOverride.Label}
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
    selectedValue: PropTypes.string,
    value: PropTypes.string,
};
