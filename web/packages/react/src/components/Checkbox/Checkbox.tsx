import React, { FunctionComponent, forwardRef } from 'react';
import uniqueId from 'lodash.uniqueid';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { useCheckboxClassName } from './utils';
import { CheckboxInput, CheckboxCheckmark, CheckboxRoot } from './style';
import { CheckboxPropsType } from './type';
import { buttonDefaultTheme } from './theme';

const CLASS_PREFIX = 'Checkbox';

export const Checkbox: FunctionComponent<CheckboxPropsType> = forwardRef(
    function Checkbox(
        {
            className,
            classNames,
            disabled,
            checked,
            onChange,
            checkedIcon,
            id: propsId,
            ...restProps
        },
        ref,
    ) {
        const theme = useTheme();
        const id = propsId || uniqueId('label-id-');

        useThemeOverride(CLASS_PREFIX, theme, buttonDefaultTheme);

        const classOverride = useCheckboxClassName(
            CLASS_PREFIX,
            className,
            classNames,
            disabled,
            checked,
        );

        const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(event);

        return (
            <CheckboxRoot
                className={classOverride.Root}
                disabled={disabled}
                theme={theme}
            >
                <CheckboxInput
                    className={classOverride.Input}
                    checked={checked}
                    id={id}
                    onChange={handleOnChange}
                    ref={ref}
                    type="checkbox"
                    {...restProps}
                />
                <CheckboxCheckmark
                    checkedIcon={checkedIcon}
                    className={classOverride.Checkmark}
                    disabled={disabled}
                    checked={checked}
                    for={id}
                    theme={theme}
                >
                    Label
                </CheckboxCheckmark>
            </CheckboxRoot>
        );
    },
);

Checkbox.defaultProps = {
    disabled: false,
    checkedIcon: 'tick',
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    checkedIcon: PropTypes.oneOf(['tick', 'dash']),
    disabled: PropTypes.bool,
    id: PropTypes.string,
    onChange: PropTypes.func,
    ref: PropTypes.func,
};
