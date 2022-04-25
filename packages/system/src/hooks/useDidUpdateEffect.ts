import { DependencyList, useEffect, useRef } from 'react';

/**
 * Fires a callback on component update
 * can take in a list of dependency to fire callback when one of the
 * conditions changes
 *
 * @internal
 *
 * @param callback
 * @param deps
 */
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
