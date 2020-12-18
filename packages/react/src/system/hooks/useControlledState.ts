import { useCallback, useState } from 'react';

export const useControlledState = <P = unknown>(
    defaultValue?: P,
    onValueChange?: (newValue: P) => void,
    value?: P,
) => {
    const [internalValue, setInternalValue] = useState<P | undefined>(
        value === undefined ? defaultValue : value,
    );
    const realValue = value === undefined ? internalValue : value;

    const setRealValue = useCallback(
        (newValue: P) => {
            if (onValueChange) {
                onValueChange(newValue);
            }

            if (value === undefined) {
                setInternalValue(newValue);
            }
        },
        [setInternalValue, onValueChange, value],
    );

    return [realValue, setRealValue] as [P, (newValue: P) => void];
};
