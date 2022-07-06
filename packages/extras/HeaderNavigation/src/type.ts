import { MutableRefObject, ReactChild, ReactText } from 'react';
import { ScalarType } from '@deliveryhero/armor-system';

export type ObjectLiteralType<P = any> = Record<string, P>;

export type OptionObjectType = {
    label: ReactChild;
    value: ScalarType;
    disabled?: boolean;
    groupId?: string;
} & ObjectLiteralType;

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
