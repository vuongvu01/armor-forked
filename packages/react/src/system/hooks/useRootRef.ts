import { RefObject, useRef as useReactRef } from 'react';
import { RefType } from '../../type';

export const useRootRef = <E extends HTMLElement>(ref: RefType<E>) => {
    const localRef = useReactRef<E>();

    return (ref as RefObject<E>) || localRef;
};
