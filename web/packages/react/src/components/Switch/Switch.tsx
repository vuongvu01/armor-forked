import React, { ChangeEvent, forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { useSwitchClassName } from './utils';
import {
    SwitchCheckboxInput,
    SwitchToggle,
    SwitchRoot,
    SwitchLabel,
} from './style';
import { SwitchPropsType } from './type';
import { toggleDefaultTheme } from './theme';

const CLASS_PREFIX = 'Switch';

export const Switch: FunctionComponent<SwitchPropsType> = forwardRef(
    function Switch(
        {
            className,
            classNames,
            disabled,
            checked,
            onChange,
            label,
            id: propsId,
            ...restProps
        },
        ref,
    ) {
        const theme = useTheme();
        const id = propsId || uniqueId('label-id-');
        useThemeOverride(CLASS_PREFIX, theme, toggleDefaultTheme);

        const classOverride = useSwitchClassName(
            CLASS_PREFIX,
            className,
            classNames,
            disabled,
            checked,
        );

        const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(event);

        return (
            <SwitchRoot>
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
                {label ? <SwitchLabel>{label}</SwitchLabel> : null}
            </SwitchRoot>
        );
    },
);

Switch.defaultProps = {
    disabled: false,
};

Switch.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    ref: PropTypes.func,
};
