import { MutableRefObject, useEffect } from 'react';

export const useInternalRef = (
    ref: ((instance: unknown) => void) | MutableRefObject<unknown> | null,
    internalRef: MutableRefObject<unknown>,
) =>
    useEffect(() => {
        if (ref && internalRef) {
            Object.assign(ref, internalRef);
        }
    }, [ref, internalRef]);
