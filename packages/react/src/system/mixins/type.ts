import { BreakpointsBaseType } from '../../styling';
import { CSSChunkType } from '../../type';

export type BreakpointCodeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointFunctionType = (
    themeBreakpoints: BreakpointsBaseType,
    breakpoint: BreakpointCodeType,
    prefix?: string,
) => string;

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
