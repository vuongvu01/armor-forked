import { BreakpointsBaseType, RootThemeType, ThemeType } from '../theme';
import { CSSChunkType } from '../type';

export type PropsWithThemeType = Record<string, any> & {
    theme?: ThemeType | RootThemeType;
};

export type BreakpointCodeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointFunctionType = (
    themeBreakpoints: BreakpointsBaseType,
    breakpoint: BreakpointCodeType,
    prefix?: string,
) => CSSChunkType;

export type BreakpointFunctionTwoArgsType = (
    breakpoints: BreakpointsBaseType,
    codeStart: BreakpointCodeType,
    codeEnd: BreakpointCodeType,
    prefix?: string,
) => CSSChunkType;

export type BreakpointFunctionForwardedType = (
    code: BreakpointCodeType,
) => string;

export type BreakpointFunctionTwoArgsForwardedType = (
    codeStart: BreakpointCodeType,
    codeEnd: BreakpointCodeType,
    cssChunk?: CSSChunkType,
) => CSSChunkType;
