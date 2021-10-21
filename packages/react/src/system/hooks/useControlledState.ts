import { useCallback, useState } from 'react';

/**
 * Use this hook to implement controlled/uncontrolled pattern for any type of {defaultValue, value, onChange} props.
 * @param defaultValue
 * @param value
 * @param onChange
 */
export const useControlledState = <P = unknown>(
    defaultValue?: P,
    value?: P,
    onChange?: (newValue: P) => void,
) => {
    const [internalValue, setInternalValue] = useState<P | undefined>(
        defaultValue,
    );
    const realValue = value === undefined ? internalValue : value;
    const isControlled = value !== undefined;

    const setRealValue = useCallback(
        (newValue: P) => {
            onChange?.(newValue);

            if (value === undefined) {
                setInternalValue(newValue);
            }
        },
        [setInternalValue, onChange, value],
    );

    return [realValue, setRealValue, isControlled] as [
        P,
        (newValue: P) => void,
        boolean,
    ];
};
