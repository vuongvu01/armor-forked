import {
    CSSChunkType,
    ObjectLiteralType,
    ReturnEmptyStringFunctionType,
} from '../type';
import { ThemeType } from '../styling';

export type ClassNamesType = ObjectLiteralType<string | undefined>;
export type StylesFunctionType<A extends {} = {}> = (
    props: A & { theme: ThemeType },
) => CSSChunkType;

export type StylesFunctionOrStubType<P = {}> =
    | StylesFunctionType<P>
    | ReturnEmptyStringFunctionType;

export type StylePropsType<C extends ClassNamesType, S> = {
    classNames?: C;
    styles?: S;
    theme?: ThemeType;
};

export type StyleNodePropsType<P = {}> = {
    className: string;
    styles: StylesFunctionType<P>;
    theme: ThemeType;
};
