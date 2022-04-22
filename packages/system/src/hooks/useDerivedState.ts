import { useState, useEffect } from 'react';

// todo: this is basically a derived state. Can we get rid of it?
export const useDerivedState = <P = unknown>(
    setter: () => P,
    dependencies: unknown[],
): [P, (value: P) => void] => {
    const [value, setValue] = useState<P>(setter());
    useEffect(() => {
        setValue(setter());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setValue, ...dependencies]);

    return [value, setValue];
};
