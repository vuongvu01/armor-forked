import { MutableRefObject, useEffect } from 'react';
import { ReferenceType } from '../type';

export const useInternalRef = (
    ref: ReferenceType,
    internalRef: MutableRefObject<unknown>, // todo: replace with MutableRefObject<HTMLElement>
) =>
    useEffect(() => {
        if (ref && internalRef) {
            Object.assign(ref, internalRef);
        }
    }, [ref, internalRef]);
