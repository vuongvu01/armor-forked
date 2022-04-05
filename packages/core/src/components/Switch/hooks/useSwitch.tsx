import React, { useCallback, useMemo } from 'react';
import {
    useControlledState,
    useRootRef,
    generateId,
} from '@deliveryhero/armor-system';

import { RefType } from '../../../type';
import { SwitchPropsType } from '../type';
import { switchIdPrefix } from '../constants';

export const useSwitch = <E extends HTMLInputElement>(
    {
        checked,
        defaultChecked,
        disabled,
        error,
        id: propsId,
        label,
        onChange,
        readOnly,
        ...restProps
    }: SwitchPropsType,
    ref: RefType<E>,
) => {
    const internalInputRef = useRootRef<E>(ref);

    const id = generateId(propsId, switchIdPrefix);

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
            reallyChecked,
            ...restProps,
        },
        switchInputProps: {
            checked,
            defaultChecked,
            disabled,
            id,
            onChange: handleOnChange,
            ref: internalInputRef,
            type: 'checkbox',
            readOnly,
        },
        selectorLabelProps: {
            disabled,
            error,
            typographyProps,
        },
        label,
        disabled,
        checked,
    };
};
