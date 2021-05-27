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

// todo: replace with ForwardedRef type from react when we update react
export type RefType<T> =
    | ((instance: T | null) => void)
    | MutableRefObject<T | null>
    | null;

export type MutableReferenceType = MutableRefObject<HTMLElement | null>;

export type PseudoEventType<V = ScalarType> = {
    target: {
        value: V;
        name?: string;
    };
};

export type PropNameType = ReactText | boolean | {};

export type UnpackedType<T> = T extends (infer U)[] ? U : any;

export type DictionaryItemIDBased = {
    id: ScalarType;
    label: string;
};
