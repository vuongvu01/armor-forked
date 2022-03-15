import React, { forwardRef, useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { generateId } from '@deliveryhero/armor-system';

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
import { CHECKBOX_CLASS_PREFIX, checkboxIdPrefix } from './constants';
import { RefType } from '../../type';

/**
 * @armor-docs-component
 */
export const Checkbox = forwardRef<
    HTMLLabelElement | HTMLInputElement,
    CheckboxPropsType
>(function Checkbox(
    {
        checked,
        checkedIcon,
        className,
        defaultChecked,
        disabled,
        error,
        // todo: forward all input-specific props directly to the input node, as it is done in <TextInput>
        // todo: packages/core/src/components/TextInput/hooks/useTextInput.ts:24
        id: propsId,
        name,
        label,
        onChange,
        ...restProps
    },
    ref,
) {
    const id = generateId(propsId, checkboxIdPrefix);

    const classOverride = useCheckboxClassName(
        CHECKBOX_CLASS_PREFIX,
        className,
        disabled,
        checked,
        error,
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
        [onChange, setNativelyChecked],
    );

    // this is only here to force SelectorLabel to use Typography
    // todo: consider deprecating SelectorLabel in favour of a wrapping component around Checkbox/Radio
    const typographyProps = useMemo(
        () => ({ paragraph: true, large: true }),
        [],
    );

    return (
        <CheckboxRoot
            {...restProps}
            className={classOverride.Root}
            disabled={disabled}
            htmlFor={id}
            reallyChecked={reallyChecked}
        >
            <CheckboxInput
                className={classOverride.Input}
                checked={checked}
                defaultChecked={defaultChecked}
                checkedIcon={checkedIcon}
                disabled={disabled}
                id={id}
                name={name}
                onChange={handleOnChange}
                ref={ref as RefType<HTMLInputElement>}
                type="checkbox"
            />
            <CheckboxCheckmark
                checked={checked}
                checkedIcon={checkedIcon}
                className={classOverride.Checkmark}
                disabled={disabled}
                hasLabel={!!label}
            >
                {checkedIcon === 'dash' ? (
                    <StyledDashIcon
                        className={classOverride.Icon}
                        disabled={disabled}
                        checked={reallyChecked}
                    />
                ) : (
                    <StyledCheckedIcon
                        className={classOverride.Icon}
                        disabled={disabled}
                        checked={reallyChecked}
                    />
                )}
            </CheckboxCheckmark>
            {!!label && (
                <SelectorLabel
                    disabled={disabled}
                    error={error}
                    className={classOverride.Label}
                    typographyProps={typographyProps}
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
