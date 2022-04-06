import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { SelectorLabel } from '../SelectorLabel';
import { useSwitchClassName } from './hooks/useSwitchClassName';
import { useSwitch } from './hooks/useSwitch';
import { SwitchCheckboxInput, SwitchRoot, SwitchToggle } from './style';
import { SwitchPropsType } from './type';
import { SWITCH_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const Switch = forwardRef<HTMLInputElement, SwitchPropsType>(
    function Switch({ className, ...props }, ref) {
        const {
            rootProps,
            switchInputProps,
            selectorLabelProps,
            label,
            disabled,
            checked,
        } = useSwitch<HTMLInputElement>(props, ref);

        const classOverride = useSwitchClassName(
            SWITCH_CLASS_PREFIX,
            className,
            disabled,
            checked,
        );

        return (
            <SwitchRoot className={classOverride.Root} {...rootProps}>
                <SwitchCheckboxInput
                    className={classOverride.CheckboxInput}
                    {...switchInputProps}
                />
                <SwitchToggle
                    className={classOverride.Label}
                    disabled={disabled}
                />
                {!!label && (
                    <SelectorLabel {...selectorLabelProps}>
                        {label}
                    </SelectorLabel>
                )}
            </SwitchRoot>
        );
    },
);

Switch.displayName = SWITCH_CLASS_PREFIX;

Switch.defaultProps = {
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
