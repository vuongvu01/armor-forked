import { HTMLAttributes } from 'react';
import {
    CSSChunkType,
    ObjectLiteralType,
    ReturnEmptyStringFunctionType,
} from '../type';
import { ThemeType } from '../styling';
import { ButtonThemeType } from './Button/type';

type BasicAttributesType = HTMLAttributes<Element>;

export type ClassNamesType = ObjectLiteralType<string>;
export type StylesFunctionType<
    A extends BasicAttributesType = BasicAttributesType
> = (props: A & { theme: ThemeType }) => CSSChunkType;

export type StylesFunctionOrStubType<A = BasicAttributesType> =
    | StylesFunctionType<A>
    | ReturnEmptyStringFunctionType;

export type StyleOverrideAttributesType<S> = {
    classNames?: ClassNamesType;
    styles?: S;
    theme?: ThemeType;
};

export type ComponentAttributesType<A, S> = A & StyleOverrideAttributesType<S>;
