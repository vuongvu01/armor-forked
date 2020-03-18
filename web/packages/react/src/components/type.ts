import { HTMLAttributes } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { ObjectLiteralType, ReturnEmptyStringFunctionType } from '../type';
import { ThemeType } from '../themes';

type BasicAttributesType = HTMLAttributes<Element>;

export type ClassNamesType = ObjectLiteralType<string>;
export type StylesFunctionType<
    A extends BasicAttributesType = BasicAttributesType
> = (props: A & { theme: ThemeType }) => FlattenSimpleInterpolation;

export type StylesFunctionOrStubType<A = BasicAttributesType> =
    | StylesFunctionType<A>
    | ReturnEmptyStringFunctionType;

export type AttributeOverrideAttributesType<AO> = {
    attributes?: AO;
};

export type StandardAttributesType<A extends BasicAttributesType> = Pick<
    A,
    'className'
>;

export type StyleOverrideAttributesType<S> = {
    classNames?: ClassNamesType;
    styles?: S;
    theme?: ThemeType;
};

export type ComponentAttributesType<AO, A, S> = AttributeOverrideAttributesType<
    AO
> &
    StandardAttributesType<A> &
    StyleOverrideAttributesType<S>;
