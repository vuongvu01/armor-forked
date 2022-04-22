import React, { useCallback, useMemo } from 'react';
import {
    useControlledState,
    useRootRef,
    generateId,
} from '@deliveryhero/armor-system';

import { RefType } from '../../../type';
import { CheckboxPropsType } from '../type';
import { checkboxIdPrefix } from '../constants';

export const useCheckbox = <E extends HTMLInputElement>(
    {
        checked,
        checkedIcon,
        defaultChecked,
        disabled,
        error,
        // todo: forward all input-specific props directly to the input node, as it is done in <TextInput>
        // todo: packages/core/src/components/TextInput/hooks/useTextInput.ts:24
        id: propsId,
        name,
        label,
        onChange,
        readOnly,
        ...restProps
    }: CheckboxPropsType,
    ref: RefType<E>,
) => {
    const internalInputRef = useRootRef<E>(ref);

    const id = generateId(propsId, checkboxIdPrefix);

    const [reallyChecked, setReallyChecked] = useControlledState(
        defaultChecked,
        checked,
    );

    const handleOnChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(event);
            setReallyChecked(event.target.checked);
        },
        [onChange, setReallyChecked],
    );

    // this is only here to force SelectorLabel to use Typography
    // todo: consider deprecating SelectorLabel in favour of a wrapping component around Checkbox/Radio
    const typographyProps = useMemo(
        () => ({ paragraph: true, large: true }),
        [],
    );

    return {
        rootProps: {
            disabled,
            htmlFor: id,
            checked: reallyChecked,
            ...restProps,
        },
        checkboxInputProps: {
            checked,
            defaultChecked,
            checkedIcon,
            disabled,
            id,
            name,
            onChange: handleOnChange,
            ref: internalInputRef,
            type: 'checkbox',
            readOnly,
        },
        checkboxCheckmarkProps: {
            checked,
            checkedIcon,
            disabled,
            hasLabel: !!label,
        },
        selectorLabelProps: {
            disabled,
            error,
            typographyProps,
        },
        iconProps: {
            disabled,
            checked: reallyChecked,
        },
        label,
        disabled,
        checked,
        error,
        checkedIcon,
    };
};
