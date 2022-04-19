// TODO: move to armor system
import { DependencyList, useRef, useEffect } from 'react';

export const useDidUpdateEffect = (
    callback: () => void,
    deps: DependencyList,
): void => {
    const didMountRef = useRef(false);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (didMountRef.current) {
            return callback();
        }
        didMountRef.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};
