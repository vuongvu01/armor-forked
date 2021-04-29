import { RefObject, useRef as useReactRef } from 'react';

export const useRootRef = <E extends HTMLElement>(ref: RefObject<E>) => {
    const localRef = useReactRef<E>();

    return ref || localRef;
};
