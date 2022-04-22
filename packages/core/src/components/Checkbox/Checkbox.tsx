import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { SelectorLabel } from '../SelectorLabel';
import { useCheckboxClassName } from './hooks/useCheckboxClassName';
import {
    CheckboxInput,
    CheckboxCheckmark,
    CheckboxRoot,
    StyledDashIcon,
    StyledCheckedIcon,
} from './style';
import { CheckboxPropsType } from './type';
import { useCheckbox } from './hooks/useCheckbox';
import { CHECKBOX_CLASS_PREFIX } from './constants';
import { RefType } from '../../type';

/**
 * # Checkbox
 *
 * Checkbox is used for making multiple selection in a list. A user can either choose one or more before triggering an event or even choose none.
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/498b57-checkbox/b/527bb6)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import React, { useState } from 'react';
 * import { Checkbox, Stack } from '@deliveryhero/armor';
 *
 * const [checked, setChecked] = useState<boolean>(false);
 *
 * <Stack>
 *     <Checkbox
 *         onChange={() => {}}
 *         label="Unchecked"
 *         marginBottom={2}
 *     />
 *     <Checkbox
 *         defaultChecked
 *         onChange={() => {}}
 *         label="Checked [uncontrolled]"
 *         marginBottom={2}
 *     />
 *     <Checkbox
 *         defaultChecked
 *         checkedIcon="dash"
 *         onChange={() => {}}
 *         label="Partially selected [uncontrolled]"
 *         marginBottom={2}
 *     />
 *     <Checkbox
 *         checked={checked}
 *         onChange={() => setChecked(!checked)}
 *         label="Checked"
 *         marginBottom={2}
 *     />
 *     <Checkbox
 *         checked={checked}
 *         onChange={() => setChecked(!checked)}
 *         label="Partially selected"
 *         marginBottom={2}
 *     />
 *     <Checkbox
 *         onChange={() => {}}
 *         label="Unchecked disabled"
 *         marginBottom={2}
 *         disabled
 *     />
 *     <Checkbox
 *         defaultChecked
 *         onChange={() => {}}
 *         label="Checked disabled"
 *         marginBottom={2}
 *         disabled
 *     />
 *     <Checkbox
 *         defaultChecked
 *         checkedIcon="dash"
 *         onChange={() => {}}
 *         label="Partially selected disabled"
 *         marginBottom={2}
 *         disabled
 *     />
 * </Stack>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Checkbox = forwardRef<
    HTMLLabelElement | HTMLInputElement,
    CheckboxPropsType
>(function Checkbox({ className, ...props }, ref) {
    const {
        rootProps,
        checkboxInputProps,
        checkboxCheckmarkProps,
        selectorLabelProps,
        iconProps,
        label,
        disabled,
        checked,
        error,
        checkedIcon,
    } = useCheckbox<HTMLInputElement>(props, ref as RefType<HTMLInputElement>);

    const classOverride = useCheckboxClassName(
        CHECKBOX_CLASS_PREFIX,
        className,
        disabled,
        checked,
        error,
    );

    return (
        <CheckboxRoot {...rootProps} className={classOverride.Root}>
            <CheckboxInput
                className={classOverride.Input}
                {...checkboxInputProps}
            />
            <CheckboxCheckmark
                className={classOverride.Checkmark}
                {...checkboxCheckmarkProps}
            >
                {checkedIcon === 'dash' ? (
                    <StyledDashIcon
                        className={classOverride.Icon}
                        {...iconProps}
                    />
                ) : (
                    <StyledCheckedIcon
                        className={classOverride.Icon}
                        {...iconProps}
                    />
                )}
            </CheckboxCheckmark>
            {!!label && (
                <SelectorLabel
                    className={classOverride.Label}
                    {...selectorLabelProps}
                >
                    {label}
                </SelectorLabel>
            )}
        </CheckboxRoot>
    );
});

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
};

export const MemoizedCheckbox = memo(Checkbox);
