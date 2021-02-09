import { useCallback, useState } from 'react';

/**
 * Use this hook to implement state of type boolean, with additional helpers provided.
 * @param defaultValue
 */
export const useFlagState = (defaultValue = false): [boolean, () => void] => {
    const [flag, setFlag] = useState(defaultValue);
    const onFlagChange = useCallback(() => {
        setFlag(!flag);
    }, [flag, setFlag]);

    return [flag, onFlagChange];
};
