import { FlattenSimpleInterpolation } from 'styled-components';
import { BreakpointsBaseType } from '../../themes';

export type BreakpointCode = string;
export type MediaCSSType = FlattenSimpleInterpolation | string;
export type BreakpointFunctionType = (
    breakpoints: BreakpointsBaseType,
    code: BreakpointCode,
    cssChunk?: MediaCSSType,
) => MediaCSSType;
export type BreakpointFunctionTwoArgsType = (
    breakpoints: BreakpointsBaseType,
    codeStart: BreakpointCode,
    codeEnd: BreakpointCode,
    cssChunk?: MediaCSSType,
) => MediaCSSType;
export type BreakpointFunctionForwardedType = (
    code: BreakpointCode,
    cssChunk?: MediaCSSType,
) => MediaCSSType;
export type BreakpointFunctionTwoArgsForwardedType = (
    codeStart: BreakpointCode,
    codeEnd: BreakpointCode,
    cssChunk?: MediaCSSType,
) => MediaCSSType;
