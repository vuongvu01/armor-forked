import { BreakpointsBaseType, SpacingFunctionType } from '../../styling';
import {
    BreakpointCodeType,
    BreakpointFunctionTwoArgsType,
    BreakpointFunctionType,
} from './type';
import { ScalarType } from '../../type';

export const edgeValue = 0.05;

export const breakpointUnit = 'px';

export const breakpointKeys = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};

export const breakpointValues = {
    [breakpointKeys.xs]: 0,
    [breakpointKeys.sm]: 600,
    [breakpointKeys.md]: 960,
    [breakpointKeys.lg]: 1280,
    [breakpointKeys.xl]: 1920,
};

export const mapBreakpointCodeToValue = (
    breakpoints: BreakpointsBaseType,
    value: ScalarType,
    spacing: SpacingFunctionType,
) => {
    if (typeof value === 'string' && value in breakpoints.values) {
        return `${breakpoints.values[value]}px`;
    }

    return spacing(value);
};

export const mapBreakpointWidthToCode = (
    themeBreakpoints: BreakpointsBaseType,
    width: ScalarType,
): string => {
    let widthProp = width;
    const { keys, values } = themeBreakpoints;

    if (typeof widthProp !== 'number') {
        widthProp = parseInt(widthProp, 10);
    }

    if (widthProp <= 0) {
        return keys[0];
    }

    if (widthProp >= values[keys[keys.length - 1]]) {
        return keys[keys.length - 1];
    }

    for (let i = 0; i < keys.length; i += 1) {
        const keyStart = keys[i];
        const keyEnd = keys[i + 1];

        if (widthProp >= values[keyStart] && widthProp < values[keyEnd]) {
            return keyStart;
        }
    }

    return '';
};

export const breakpointUp = (
    themeBreakpoints: BreakpointsBaseType,
    breakpoint: BreakpointCodeType,
    prefix = '@media ',
) => {
    const { values, unit } = themeBreakpoints;

    if (!(breakpoint in values)) {
        return '';
    }

    return `${prefix}(min-width:${values[breakpoint]}${unit})`;
};

export const breakpointDown = (
    themeBreakpoints: BreakpointsBaseType,
    breakpoint: BreakpointCodeType,
    prefix = '@media ',
) => {
    const { values, keys, unit } = themeBreakpoints;

    if (!(breakpoint in values)) {
        return '';
    }

    const rightIndex = keys.indexOf(breakpoint);
    const rightValue = values[keys[rightIndex]];

    if (rightIndex === keys.length) {
        return breakpointUp(themeBreakpoints, 'xs', prefix);
    }

    if (!(typeof rightValue !== 'undefined' && rightIndex > 0)) {
        return '';
    }

    return `${prefix}(max-width:${rightValue - edgeValue}${unit})`;
};

export const breakpointBetween = (
    themeBreakpoints: BreakpointsBaseType,
    breakpointStart: BreakpointCodeType,
    breakpointEnd: BreakpointCodeType,
    prefix = '@media ',
) => {
    const { values, keys, unit } = themeBreakpoints;

    const rightIndex = keys.indexOf(breakpointEnd);

    if (rightIndex === keys.length - 1) {
        return breakpointUp(themeBreakpoints, breakpointStart, prefix);
    }

    return `${prefix}(min-width:${
        values[breakpointStart]
    }${unit}) and (max-width:${values[keys[rightIndex + 1]] -
        edgeValue}${unit})`;
};

export const breakpointOnly = (
    themeBreakpoints: BreakpointsBaseType,
    breakpoint: BreakpointCodeType,
    prefix = '@media ',
) => breakpointBetween(themeBreakpoints, breakpoint, breakpoint, prefix);

export const forwardBreakpoints = (
    breakpoints: BreakpointsBaseType,
    fn: BreakpointFunctionType,
) => (code: BreakpointCodeType) => fn(breakpoints, code);

export const forwardBreakpointsTwoArgs = (
    breakpoints: BreakpointsBaseType,
    fn: BreakpointFunctionTwoArgsType,
) => (codeStart: BreakpointCodeType, codeEnd: BreakpointCodeType) =>
    fn(breakpoints, codeStart, codeEnd);
