import { css } from 'styled-components';

import { BreakpointsBaseType, SpanFunctionType } from '../../styling';
import { CSSChunkType, ScalarType } from '../../type';
import {
    BreakpointCode,
    BreakpointFunctionType,
    BreakpointFunctionTwoArgsType,
} from './type';

const makeRule = (way: string, value: number, cssChunk?: CSSChunkType) => {
    const mediaRule = `@media (${way}-width:${value}px)`;

    if (cssChunk) {
        // prettier-ignore
        return css`${mediaRule}{${cssChunk}};`;
    }

    return mediaRule;
};

export const mapBreakpoint = (
    breakpoints: BreakpointsBaseType,
    value: ScalarType,
    span: SpanFunctionType,
) => {
    if (typeof value === 'string' && value in breakpoints.values) {
        return `${breakpoints.values[value]}px`;
    }

    return span(value);
};

// todo: move breakpoints to the last position and make optional
export const breakpointUp: BreakpointFunctionType = (
    breakpoints,
    code,
    cssChunk,
) => makeRule('min', breakpoints.values[code], cssChunk);

// todo: move breakpoints to the last position and make optional
export const breakpointDown: BreakpointFunctionType = (
    breakpoints,
    code,
    cssChunk,
) => makeRule('max', breakpoints.values[code] - 1, cssChunk);

// todo: move breakpoints to the last position and make optional
export const breakpointOnly: BreakpointFunctionType = (
    breakpoints,
    code,
    cssChunk,
) => {
    const { keys } = breakpoints;
    const left = breakpoints.values[code];

    let mediaRule = `@media (min-width:${left}px`;

    const rightIndex = keys.indexOf(code) + 1;
    if (rightIndex !== keys.length) {
        const right = breakpoints.values[keys[rightIndex]] - 1;
        mediaRule += ` and max-width:${right}px`;
    }

    mediaRule += ')';

    if (cssChunk) {
        // prettier-ignore
        return css`${mediaRule}{${cssChunk}};`;
    }

    return mediaRule;
};
export const breakpointBetween: BreakpointFunctionTwoArgsType = (
    breakpoints,
    codeStart,
    codeEnd,
    cssChunk,
) => {
    const left = breakpoints.values[codeStart];
    const right = breakpoints.values[codeEnd] - 1;

    const mediaRule = `@media (min-width:${left}px and max-width:${right}px)`;

    if (cssChunk) {
        // prettier-ignore
        return css`${mediaRule}{${cssChunk}};`;
    }

    return mediaRule;
};

export const forwardBreakpoints = (
    breakpoints: BreakpointsBaseType,
    fn: BreakpointFunctionType,
) => (code: BreakpointCode, cssChunk?: CSSChunkType) =>
    fn(breakpoints, code, cssChunk);

export const forwardBreakpointsTwoArgs = (
    breakpoints: BreakpointsBaseType,
    fn: BreakpointFunctionTwoArgsType,
) => (
    codeStart: BreakpointCode,
    codeEnd: BreakpointCode,
    cssChunk?: CSSChunkType,
) => fn(breakpoints, codeStart, codeEnd, cssChunk);
