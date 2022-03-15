import { BreakpointsType, SpacingFunctionType, ThemeType } from './type';
import {
    breakpointBetween,
    breakpointDown,
    breakpointOnly,
    breakpointUp,
} from '../mixins';
import {
    breakpointUnit,
    breakpointValues,
    forwardBreakpoints,
    forwardBreakpointsTwoArgs,
    mapBreakpointCodeToValue,
    mapBreakpointWidthToCode,
} from '../mixins/breakpoints';
import { ScalarType } from '../type';

export const makeBreakpoints = (
    theme: ThemeType,
    unit = breakpointUnit,
): BreakpointsType => {
    const { breakpoints } = theme;
    const { values = breakpointValues } = breakpoints || {};

    const base = {
        values,
        keys: Object.keys(values),
        unit,
    };

    return {
        ...breakpoints,
        ...base,
        unit,
        mapCodeToValue: (value: ScalarType, spacing: SpacingFunctionType) =>
            mapBreakpointCodeToValue(base, value, spacing),
        mapWidthToCode: (value: ScalarType) =>
            mapBreakpointWidthToCode(base, value),
        // @ts-ignore: todo with theme refactoring
        up: forwardBreakpoints(base, breakpointUp),
        // @ts-ignore: todo with theme refactoring
        down: forwardBreakpoints(base, breakpointDown),
        // @ts-ignore: todo with theme refactoring
        only: forwardBreakpoints(base, breakpointOnly),
        between: forwardBreakpointsTwoArgs(base, breakpointBetween),
    };
};
