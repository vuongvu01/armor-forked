import React, {
    ChangeEvent,
    forwardRef,
    FunctionComponent,
    useCallback,
    useMemo,
    useState,
} from 'react';
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

        // todo: clear up this mess with nativelyChecked and reallyChecked
        const [nativelyChecked, setNativelyChecked] = useState<boolean>(
            checked !== undefined ? !!checked : !!defaultChecked,
        );
        // if checked is set, we consider the controlled mode, otherwise look at the native check/uncheck
        const reallyChecked = checked !== undefined ? checked : nativelyChecked;

        const handleOnChange = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                if (onChange) {
                    onChange(event);
                }

                setNativelyChecked(event.target.checked);
            },
            [onChange, setNativelyChecked, nativelyChecked],
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
                reallyChecked={reallyChecked}
            >
                <SwitchCheckboxInput
                    {...restProps}
                    checked={checked}
                    defaultChecked={defaultChecked}
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
                {!!label && (
                    <SelectorLabel
                        disabled={disabled}
                        error={error}
                        theme={theme}
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
