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
    forwardBreakpoints,
    forwardBreakpointsTwoArgs,
    mapBreakpoint,
} from '../../system/mixins/breakpoints';
import { ScalarType } from '../../type';

export const makeBreakpoints = (
    breakpoints?: BreakpointsDeclarationType,
): BreakpointsType => {
    const {
        values = {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    } = breakpoints || {};

    const base = {
        values,
        keys: Object.keys(values),
    };

    return {
        ...breakpoints,
        ...base,
        map: (value: ScalarType, spacing: SpacingFunctionType) =>
            mapBreakpoint(base, value, spacing),
        up: forwardBreakpoints(base, breakpointUp),
        down: forwardBreakpoints(base, breakpointDown),
        only: forwardBreakpoints(base, breakpointOnly),
        between: forwardBreakpointsTwoArgs(base, breakpointBetween),
    };
};
