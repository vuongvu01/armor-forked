import { MutableRefObject, ReactText } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

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

/** @deprecated */
export type Indexed<T, P = any> = T & ObjectLiteralType<P>;

/** @deprecated */
export type ReferenceType<C = unknown> =
    | ((instance: C) => void)
    | MutableRefObject<C>
    | null;

export type RefType<T> =
    | ((instance: T | null) => void)
    | MutableRefObject<T | null>
    | null;

export type MutableReferenceType = MutableRefObject<HTMLElement | null>;

export type PseudoEventType<V = ScalarType> = {
    target: {
        value: V;
    };
};

export type PropNameType = ReactText | boolean | {};

export type UnpackedType<T> = T extends (infer U)[] ? U : any;

export type DictionaryItemIDBased = {
    id: ScalarType;
    label: string;
};
