import React, { ChangeEvent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { extractMarginProps } from '../../styling';
import { SelectorLabel } from '../SelectorLabel';
import { useRadioClassName } from './utils';
import { RadioInput, RadioMark, RadioRoot } from './style';
import { RadioPropsType } from './type';
import { radioDefaultTheme } from './theme';
import { generateId } from '../../utils';
import { RADIO_CLASS_PREFIX, radioIdPrefix, radioRoot } from './constants';

export const Radio = forwardRef<HTMLDivElement, RadioPropsType>(function Radio(
    {
        checked,
        children,
        className,
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
    const theme = useComponentTheme(RADIO_CLASS_PREFIX, radioDefaultTheme);
    const id = generateId(propsId, radioIdPrefix);
    const isChecked = checked || value === selectedValue;

    const classOverride = useRadioClassName(
        RADIO_CLASS_PREFIX,
        className,
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
            data-testid={radioRoot}
            theme={theme}
            disabled={disabled}
            {...marginProps}
        >
            <RadioInput
                {...otherProps}
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
                    typographyProps={typographyProps}
                >
                    {label || children}
                </SelectorLabel>
            </RadioMark>
        </RadioRoot>
    );
});

Radio.displayName = RADIO_CLASS_PREFIX;

Radio.defaultProps = {
    checked: false,
    disabled: false,
    typographyProps: { paragraph: true, large: true },
};

Radio.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    id: PropTypes.string,
    /**
     * @deprecated
     * Use children instead
     */
    label: PropTypes.string,
    onChange: PropTypes.func,
    selectedValue: PropTypes.string,
    typographyProps: PropTypes.object,
    value: PropTypes.string,
};
