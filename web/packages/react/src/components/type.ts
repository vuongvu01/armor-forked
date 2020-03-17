import { HTMLAttributes } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { ObjectLiteral, ReturnEmptyStringFunction } from '../type';
import { Theme } from '../themes';

type BasicAttributes = HTMLAttributes<Element>;

export type ClassNames = ObjectLiteral<string>;
export type StylesFunction<A extends BasicAttributes = BasicAttributes> = (
    props: A & { theme: Theme },
) => FlattenSimpleInterpolation;
export type Styles<A> = ObjectLiteral<StylesFunction<A> | Styles<unknown>>;
export type StylesFunctionOrStub<A = BasicAttributes> =
    | StylesFunction<A>
    | ReturnEmptyStringFunction;

export type StandardAttributes<A extends BasicAttributes> = Pick<
    A,
    'className'
>;

export interface StyleOverrideAttributes<S> {
    classNames?: ClassNames;
    styles?: S;
    theme?: Theme;
}

export interface AttributeOverrideAttributes<S> {
    attributes?: S;
}

// todo: rename to the material style
export interface OuterSpacingAttributes {
    m?: string;
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
    my?: string;
    mx?: string;
}
