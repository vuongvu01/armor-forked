import {
    BreakpointsDeclarationType,
    BreakpointsType,
    SpacingFunctionType,
} from '../type';
import {
    breakpointBetween,
    breakpointDown,
    breakpointOnly,
    breakpointUp,
} from '../../system/mixins';
import {
    breakpointUnit,
    breakpointValues,
    forwardBreakpoints,
    forwardBreakpointsTwoArgs,
    mapBreakpointCodeToValue,
    mapBreakpointWidthToCode,
} from '../../system/mixins/breakpoints';
import { ScalarType } from '../../type';

export const makeBreakpoints = (
    breakpoints?: BreakpointsDeclarationType,
    unit = breakpointUnit,
): BreakpointsType => {
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
        up: forwardBreakpoints(base, breakpointUp),
        down: forwardBreakpoints(base, breakpointDown),
        only: forwardBreakpoints(base, breakpointOnly),
        between: forwardBreakpointsTwoArgs(base, breakpointBetween),
    };
};
