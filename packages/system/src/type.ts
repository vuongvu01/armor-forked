import { MutableRefObject } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import { GlobalFlagsType } from './types';

type Disallow<T> = {
    [key in keyof T]?: never;
};

export type ArrayLikeType<P = any> = {
    [k: number]: P;
};

export type Nullable<X = any> = X | null;

export type ScalarType = string | number;

export type CSSChunkType =
    | FlattenSimpleInterpolation
    | string
    | Record<string, any>; // todo: tighten

export type ScaleType = 'small' | 'medium' | 'large';

export type MutuallyExclusive<T, U> = (T & Disallow<U>) | (U & Disallow<T>);

export type UnpackedType<T> = T extends (infer U)[] ? U : any;

// eslint-disable-next-line @typescript-eslint/ban-types
export type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

// todo: replace with ForwardedRef type from react when we update react
export type RefType<T> =
    | ((instance: T | null) => void)
    | MutableRefObject<T | null>
    | null;

declare global {
    interface Window {
        armorGlobalFlags: GlobalFlagsType;
    }
}
