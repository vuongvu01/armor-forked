import { useEffect, useState } from 'react';

// todo: this is basically a derived state. Can we get rid of it?
export const useDerivedState = <P = unknown>(
    setter: () => P,
    dependencies: unknown[],
) => {
    const [value, setValue] = useState<P>(setter());
    useEffect(() => {
        setValue(setter());
    }, [setValue, ...dependencies]);

    return [value, setValue] as [P, (value: P) => void];
};
