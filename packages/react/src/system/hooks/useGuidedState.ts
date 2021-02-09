import { useEffect, useState } from 'react';

export const useGuidedState = <P = unknown>(
    setter: () => P,
    dependencies: unknown[],
) => {
    const [value, setValue] = useState<P>(setter());
    useEffect(() => {
        setValue(setter());
    }, [setValue, ...dependencies]);

    return [value, setValue] as [P, (value: P) => void];
};
