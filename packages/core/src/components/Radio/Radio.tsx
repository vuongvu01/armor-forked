import React, { ChangeEvent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { generateId } from '@deliveryhero/armor-system';

import { extractMarginProps } from '../../styling';
import { SelectorLabel } from '../SelectorLabel';
import { useRadioClassName } from './utils';
import { RadioInput, RadioMark, RadioRoot } from './style';
import { RadioPropsType } from './type';
import { RADIO_CLASS_PREFIX, radioIdPrefix, radioRoot } from './constants';

/**
 * # Radio
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/0381e5-radio/b/527bb6)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { useState } from 'react';
 * import { Radio, RadioGroup } from '@deliveryhero/armor';
 *
 * const groupName = 'radioGroup';
 * const [groupSelectedValue, setSelectedValueGroup] = useState('');
 * const handleChange = (event) => {
 *     const selectedValue = event.target.value;
 *     if (selectedValue) {
 *         setSelectedValueGroup(selectedValue);
 *     }
 * };
 *
 * <h4>Pick one of the options:</h4>
 * <RadioGroup
 *     name={groupName}
 *     selectedValue={groupSelectedValue}
 *     onChange={handleChange}
 * >
 *     <Radio value="pizza">Pizza</Radio>
 *     <Radio value="pasta">Pasta</Radio>
 *     <Radio value="risotto">Risotto</Radio>
 * </RadioGroup>
 * ```
 * ***
 *
 * @armor-docs-component
 */
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
                type="radio"
                value={value}
            />
            <RadioMark
                className={classOverride.Label}
                disabled={disabled}
                htmlFor={id}
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
