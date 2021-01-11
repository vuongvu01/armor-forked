import { FlattenSimpleInterpolation } from 'styled-components';
import { MutableRefObject } from 'react';

export type ScalarType = string | number;

export type ObjectLiteralType<P = any> = {
    [k: string]: P;
};

export type ArrayLikeType<P = any> = {
    [k: number]: P;
};

export type CSSChunkType =
    | FlattenSimpleInterpolation
    | string
    | ObjectLiteralType;

export type ChildrenType = JSX.Element | JSX.Element[] | undefined | null;

export type Indexed<T, P = any> = T & ObjectLiteralType<P>;

export type ReferenceType<C = unknown> =
    | ((instance: C) => void)
    | MutableRefObject<C>
    | null;

export type PseudoEventType<V = ScalarType> = {
    target: {
        value: V;
    };
};
