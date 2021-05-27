import { useCallback } from 'react';
import { useControlledState } from './useControlledState';

/**
 * Use this hook to implement controlled/uncontrolled pattern for boolean-type {defaultValue, value, onChange} props, with additional helpers provided.
 * @param defaultValue
 * @param value
 * @param onValueUpdate
 */
export const useControlledFlagState = (
    defaultValue?: boolean,
    value?: boolean,
    onValueUpdate?: (newValue: boolean) => void,
): [
    boolean,
    (newValue: boolean) => void,
    () => void,
    () => void,
    () => void,
] => {
    const [realValue, setRealValue] = useControlledState<boolean>(
        defaultValue,
        value,
        onValueUpdate,
    );
    const turnOn = useCallback(() => {
        setRealValue(true);
    }, [setRealValue]);
    const turnOff = useCallback(() => {
        setRealValue(false);
    }, [setRealValue]);
    const toggle = useCallback(() => {
        setRealValue(!realValue);
    }, [setRealValue, realValue]);

    return [realValue, setRealValue, turnOn, turnOff, toggle];
};
