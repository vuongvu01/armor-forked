import React, { ChangeEvent, forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import SelectorLabel from '../SelectorLabel';
import { useSwitchClassName } from './utils';
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
            classNames,
            disabled,
            error,
            id: propsId,
            label,
            onChange,
            ...restProps
        },
        ref,
    ) {
        const theme = useTheme();
        const id = generateId(propsId, switchIdPrefix);
        useThemeOverride(SWITCH_CLASS_PREFIX, theme, switchDefaultTheme);

        const classOverride = useSwitchClassName(
            SWITCH_CLASS_PREFIX,
            className,
            classNames,
            disabled,
            checked,
        );

        const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(event);

        return (
            <SwitchRoot disabled={disabled} for={id}>
                <SwitchCheckboxInput
                    checked={checked}
                    className={classOverride.CheckboxInput}
                    disabled={disabled}
                    id={id}
                    onChange={handleOnChange}
                    ref={ref}
                    theme={theme}
                    type="checkbox"
                    {...restProps}
                />
                <SwitchToggle
                    className={classOverride.Label}
                    disabled={disabled}
                    theme={theme}
                    htmlFor={id}
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
    ref: PropTypes.func,
};
