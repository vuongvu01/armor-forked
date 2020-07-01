import React, {
    ChangeEvent,
    forwardRef,
    FunctionComponent,
    useState,
} from 'react';
import PropTypes from 'prop-types';

import { useThemeOverride } from 'src/utils/hooks';
import { useTheme } from 'src/styling';
import { useSwitchClassName } from './utils';
import {
    SwitchCheckboxInput,
    SwitchLabel,
    SwitchRoot,
    SwitchSlider,
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
            defaultChecked,
            onChange,
            ...restProps
        },
        ref,
    ) {
        const [isChecked, setChecked] = useState(defaultChecked || checked);
        const theme = useTheme();
        useThemeOverride(CLASS_PREFIX, theme, toggleDefaultTheme);

        const classOverride = useSwitchClassName(
            CLASS_PREFIX,
            className,
            classNames,
            disabled,
            checked,
        );

        const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
            setChecked(!isChecked);

            // TODO (nmelnikov 2020-06-29): hook onChange into <input> https://jira.deliveryhero.com/browse/LD-120
            if (onChange) {
                onChange(event);
            }
        };

        return (
            <SwitchRoot
                checked={isChecked}
                className={classOverride.Root}
                disabled={disabled}
                theme={theme}
            >
                <SwitchLabel
                    checked={isChecked}
                    className={classOverride.Label}
                    disabled={disabled}
                    theme={theme}
                >
                    <SwitchCheckboxInput
                        type="checkbox"
                        ref={ref}
                        theme={theme}
                        onChange={handleOnChange}
                        className={classOverride.CheckboxInput}
                        {...restProps}
                    />
                    <SwitchSlider
                        checked={isChecked}
                        className={classOverride.Slider}
                        disabled={disabled}
                        theme={theme}
                    />
                </SwitchLabel>
            </SwitchRoot>
        );
    },
);

Switch.defaultProps = {
    checked: false,
    defaultChecked: false,
    disabled: false,
};

Switch.propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    ref: PropTypes.func,
};
