import React, { ChangeEvent, forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { extractMarginProps, useTheme } from '../../styling';
import SelectorLabel from '../SelectorLabel';
import { useRadioClassName } from './utils';
import { RadioInput, RadioMark, RadioRoot } from './style';
import { RadioPropsType } from './type';
import { radioDefaultTheme } from './theme';
import { generateId } from '../../utils';
import { RADIO_CLASS_PREFIX, radioIdPrefix } from './constants';

const Radio: FunctionComponent<RadioPropsType> = forwardRef(function Radio(
    {
        checked,
        className,
        classNames,
        disabled,
        error,
        id: propsId,
        label,
        name,
        onChange,
        selectedValue,
        typographyProps,
        value,
        ...restProps
    },
    ref,
) {
    const theme = useTheme();
    const id = generateId(propsId, radioIdPrefix);
    const isChecked = checked || value === selectedValue;

    useThemeOverride(RADIO_CLASS_PREFIX, theme, radioDefaultTheme);

    const classOverride = useRadioClassName(
        RADIO_CLASS_PREFIX,
        className,
        classNames,
        disabled,
        isChecked,
        error,
    );

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>
        onChange && onChange(event);

    const { marginProps, ...otherProps } = extractMarginProps(restProps);

    return (
        <RadioRoot
            className={classOverride.Root}
            for={id}
            theme={theme}
            {...marginProps}
        >
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
                {...otherProps}
            />
            <RadioMark
                className={classOverride.Label}
                disabled={disabled}
                htmlFor={id}
                theme={theme}
            >
                <SelectorLabel
                    disabled={disabled}
                    error={error}
                    theme={theme}
                    typographyProps={typographyProps}
                >
                    {label}
                </SelectorLabel>
            </RadioMark>
        </RadioRoot>
    );
});

Radio.displayName = RADIO_CLASS_PREFIX;

Radio.defaultProps = {
    checked: false,
    disabled: false,
};

Radio.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    ref: PropTypes.func,
    selectedValue: PropTypes.string,
    typographyProps: PropTypes.object,
    value: PropTypes.string,
};

export default Radio;
