import { useCallback, useState } from 'react';

export const useFlagState = (defaultValue = false): [boolean, () => void] => {
    const [flag, setFlag] = useState(defaultValue);
    const onFlagChange = useCallback(() => {
        setFlag(!flag);
    }, [flag, setFlag]);

    return [flag, onFlagChange];
};
