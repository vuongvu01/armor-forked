import React, { ChangeEvent, forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import SelectorLabel from '../SelectorLabel';
import { useSwitchClassName } from './utils/useSwitchClassName';
import { SwitchCheckboxInput, SwitchRoot, SwitchToggle } from './style';
import { SwitchPropsType } from './type';
import { switchDefaultTheme } from './theme';
import { generateId } from '../../utils';
import { SWITCH_CLASS_PREFIX, switchIdPrefix } from './constants';

export const Switch: FunctionComponent<SwitchPropsType> = forwardRef(
    function Switch(
        {
            checked,
            className,
            disabled,
            error,
            id: propsId,
            label,
            onChange,
            ...restProps
        },
        ref,
    ) {
        const theme = useComponentTheme(
            SWITCH_CLASS_PREFIX,
            switchDefaultTheme,
        );
        const id = generateId(propsId, switchIdPrefix);

        const classOverride = useSwitchClassName(
            SWITCH_CLASS_PREFIX,
            className,
            disabled,
            checked,
        );

        const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(event);

        return (
            <SwitchRoot disabled={disabled} htmlFor={id}>
                <SwitchCheckboxInput
                    {...restProps}
                    checked={checked}
                    className={classOverride.CheckboxInput}
                    disabled={disabled}
                    id={id}
                    onChange={handleOnChange}
                    ref={ref}
                    theme={theme}
                    type="checkbox"
                />
                <SwitchToggle
                    className={classOverride.Label}
                    disabled={disabled}
                    theme={theme}
                />
                <SelectorLabel disabled={disabled} error={error} theme={theme}>
                    {label}
                </SelectorLabel>
            </SwitchRoot>
        );
    },
);

Switch.displayName = SWITCH_CLASS_PREFIX;

Switch.defaultProps = {
    cehcked: false,
    disabled: false,
};

Switch.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
};
