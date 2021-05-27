import { useCallback, useState } from 'react';

/**
 * Use this hook to implement state of type boolean, with additional helpers provided.
 * @param defaultValue
 */
export const useFlagState = (
    defaultValue = false,
): [
    boolean,
    (newValue: boolean) => void,
    () => void,
    () => void,
    () => void,
] => {
    const [flag, setFlag] = useState(defaultValue);

    const turnOn = useCallback(() => {
        setFlag(true);
    }, [setFlag]);
    const turnOff = useCallback(() => {
        setFlag(false);
    }, [setFlag]);
    const toggle = useCallback(() => {
        setFlag(!flag);
    }, [flag, setFlag]);

    return [flag, setFlag, turnOn, turnOff, toggle];
};
