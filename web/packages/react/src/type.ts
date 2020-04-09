import { FlattenSimpleInterpolation } from 'styled-components';

export type ScalarType = string | number;

export type ObjectLiteralType<P = any> = {
    [k: string]: P;
};

export type ReturnEmptyStringFunctionType = () => string;

export type CSSChunkType = FlattenSimpleInterpolation | string;

export type Indexed<T, P = any> = T & ObjectLiteralType<P>;
