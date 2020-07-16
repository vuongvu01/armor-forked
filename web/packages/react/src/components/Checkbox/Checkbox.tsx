import React, { FunctionComponent, forwardRef } from 'react';
import uniqueId from 'lodash.uniqueid';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import SelectorLabel from '../SelectorLabel';
import { useCheckboxClassName } from './utils';
import { CheckboxInput, CheckboxCheckmark, CheckboxRoot } from './style';
import { CheckboxPropsType } from './type';
import { checkboxDefaultTheme } from './theme';

const CHECKBOX_CLASS_PREFIX = 'Checkbox';

export const Checkbox: FunctionComponent<CheckboxPropsType> = forwardRef(
    function Checkbox(
        {
            checked,
            checkedIcon,
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
        const id = propsId || uniqueId('checkbox-id-');

        useThemeOverride(CHECKBOX_CLASS_PREFIX, theme, checkboxDefaultTheme);

        const classOverride = useCheckboxClassName(
            CHECKBOX_CLASS_PREFIX,
            className,
            classNames,
            disabled,
            checked,
            error,
        );

        const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(event);

        return (
            <CheckboxRoot
                className={classOverride.Root}
                disabled={disabled}
                theme={theme}
                for={id}
            >
                <CheckboxInput
                    className={classOverride.Input}
                    checked={checked}
                    checkedIcon={checkedIcon}
                    disabled={disabled}
                    id={id}
                    onChange={handleOnChange}
                    ref={ref}
                    theme={theme}
                    type="checkbox"
                    {...restProps}
                />
                <CheckboxCheckmark
                    checked={checked}
                    checkedIcon={checkedIcon}
                    className={classOverride.Checkmark}
                    disabled={disabled}
                    for={id}
                    theme={theme}
                >
                    <SelectorLabel
                        disabled={disabled}
                        error={error}
                        theme={theme}
                    >
                        {label}
                    </SelectorLabel>
                </CheckboxCheckmark>
            </CheckboxRoot>
        );
    },
);

Checkbox.displayName = CHECKBOX_CLASS_PREFIX;

Checkbox.defaultProps = {
    checkedIcon: 'tick',
    disabled: false,
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    checkedIcon: PropTypes.oneOf(['tick', 'dash']),
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    ref: PropTypes.func,
};
