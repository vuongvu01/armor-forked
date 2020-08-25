import { BreakpointsBaseType } from '../../styling';
import { CSSChunkType } from '../../type';

export type BreakpointCode = string;
export type BreakpointFunctionType = (
    breakpoints: BreakpointsBaseType,
    code: BreakpointCode,
    cssChunk?: CSSChunkType,
) => CSSChunkType;
export type BreakpointFunctionTwoArgsType = (
    breakpoints: BreakpointsBaseType,
    codeStart: BreakpointCode,
    codeEnd: BreakpointCode,
    cssChunk?: CSSChunkType,
) => CSSChunkType;
export type BreakpointFunctionForwardedType = (
    code: BreakpointCode,
    cssChunk?: CSSChunkType,
) => CSSChunkType;
export type BreakpointFunctionTwoArgsForwardedType = (
    codeStart: BreakpointCode,
    codeEnd: BreakpointCode,
    cssChunk?: CSSChunkType,
) => CSSChunkType;
