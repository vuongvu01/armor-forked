import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { generateId } from '@deliveryhero/armor-system';

import { SelectorLabel } from '../SelectorLabel';
import { useSwitchClassName } from './hooks/useSwitchClassName';
import { SwitchCheckboxInput, SwitchRoot, SwitchToggle } from './style';
import { SwitchPropsType } from './type';
import { SWITCH_CLASS_PREFIX, switchIdPrefix } from './constants';

/**
 * @armor-docs-component
 */
export const Switch = forwardRef<HTMLInputElement, SwitchPropsType>(
    function Switch(
        {
            checked,
            defaultChecked,
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
        const id = generateId(propsId, switchIdPrefix);

        const classOverride = useSwitchClassName(
            SWITCH_CLASS_PREFIX,
            className,
            disabled,
            checked,
        );

        // todo: clear up this mess with nativelyChecked and reallyChecked, use useControlledState() hook instead
        const [nativelyChecked, setNativelyChecked] = useState<boolean>(
            checked !== undefined ? !!checked : !!defaultChecked,
        );
        // // if checked is set, we consider the controlled mode, otherwise look at the native check/uncheck
        const reallyChecked = checked !== undefined ? checked : nativelyChecked;

        const handleOnChange = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                if (onChange) {
                    onChange(event);
                }

                setNativelyChecked(event.target.checked);
            },
            [onChange, setNativelyChecked],
        );

        // this is only here to force SelectorLabel to use Typography
        // todo: consider deprecating SelectorLabel in favour of a wrapping component around Checkbox/Radio
        const typographyProps = useMemo(
            () => ({ paragraph: true, large: true }),
            [],
        );

        return (
            <SwitchRoot
                disabled={disabled}
                htmlFor={id}
                className={classOverride.Root}
                reallyChecked={reallyChecked}
            >
                <SwitchCheckboxInput
                    {...restProps}
                    checked={checked}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    id={id}
                    onChange={handleOnChange}
                    ref={ref}
                    type="checkbox"
                    className={classOverride.CheckboxInput}
                />
                <SwitchToggle
                    className={classOverride.Label}
                    disabled={disabled}
                />
                {!!label && (
                    <SelectorLabel
                        disabled={disabled}
                        error={error}
                        typographyProps={typographyProps}
                    >
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
