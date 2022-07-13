import { MutableRefObject, ReactText } from 'react';
import { ScalarType } from '@deliveryhero/armor-system';

export type ObjectLiteralType<P = any> = Record<string, P>;

/*
 * @deprecated
 */
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

export type DictionaryItemIDBasedType = {
    id: ScalarType;
    label: string;
};

export type WithChildren<T = {}> = T & { children: React.ReactNode };
