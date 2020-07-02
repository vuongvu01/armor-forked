import React, { FunctionComponent, forwardRef, useState } from 'react';
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
            ...restProps
        },
        ref,
    ) {
        const [isChecked, setChecked] = useState(checked);
        const theme = useTheme();

        useThemeOverride(CLASS_PREFIX, theme, buttonDefaultTheme);

        const classOverride = useCheckboxClassName(
            CLASS_PREFIX,
            className,
            classNames,
            disabled,
            isChecked,
        );

        const handleOnClick = (event: React.MouseEvent<HTMLInputElement>) => {
            setChecked(!isChecked);

            // TODO (nmelnikov 2020-06-26): hook onChange into <input> https://jira.deliveryhero.com/browse/LD-120
            if (onChange) {
                onChange(event);
            }
        };

        return (
            <CheckboxRoot
                disabled={disabled}
                theme={theme}
                className={classOverride.Root}
            >
                <span onClick={disabled ? () => {} : handleOnClick}>
                    <CheckboxInput
                        type="checkbox"
                        checked={isChecked}
                        checkedIcon={checkedIcon}
                        theme={theme}
                        ref={ref}
                        className={classOverride.Input}
                        {...restProps}
                    />
                    <CheckboxCheckmark
                        disabled={disabled}
                        checked={isChecked}
                        theme={theme}
                        className={classOverride.Checkmark}
                        checkedIcon={checkedIcon}
                    />
                </span>
            </CheckboxRoot>
        );
    },
);

Checkbox.defaultProps = {
    checked: false,
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
