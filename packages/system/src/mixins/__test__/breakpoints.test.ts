import {
    breakpointBetween,
    breakpointDown,
    breakpointKeys,
    breakpointOnly,
    breakpointUp,
    breakpointValues,
    defaultMediaPrefix,
    edgeValue,
    forwardBreakpoints,
    forwardBreakpointsTwoArgs,
    mapBreakpointWidthToCode,
} from '../breakpoints';
import { breakpoints } from './mock';

let functions: Record<string, any> /* todo: tighten */ = {};

describe('breakpoints', () => {
    beforeAll(() => {
        functions = {
            mapWidthToCode: forwardBreakpoints(
                breakpoints,
                mapBreakpointWidthToCode,
            ),
            up: forwardBreakpoints(breakpoints, breakpointUp),
            down: forwardBreakpoints(breakpoints, breakpointDown),
            only: forwardBreakpoints(breakpoints, breakpointOnly),
            between: forwardBreakpointsTwoArgs(breakpoints, breakpointBetween),
        };
    });
    describe('mapWidthToCode()', () => {
        it('should map a number to code', () => {
            const result = functions.mapWidthToCode(1300);
            expect(result).toEqual(breakpointKeys.lg);
        });
        it('should map a string to code', () => {
            const result = functions.mapWidthToCode('620px');
            expect(result).toEqual(breakpointKeys.sm);
        });
    });
    describe('breakpointUp()', () => {
        it('should return media declaration', () => {
            const result = functions.up('lg');
            expect(result).toEqual(
                `${defaultMediaPrefix} (min-width:${breakpointValues.lg}px)`,
            );
        });
    });

    describe('breakpointDown()', () => {
        it('should return media declaration', () => {
            const result = functions.down('lg');
            expect(result).toEqual(
                `${defaultMediaPrefix} (max-width:${breakpointValues.lg -
                    edgeValue}px)`,
            );
        });
    });
    describe('breakpointOnly()', () => {
        it('should return media declaration for "md"', () => {
            const result = functions.only('md');
            expect(result).toEqual(
                `${defaultMediaPrefix} (min-width:${
                    breakpointValues.md
                }px) and (max-width:${breakpointValues.lg - edgeValue}px)`,
            );
        });
    });
    describe('breakpointBetween()', () => {
        it('should return media declaration for "sm" and "lg', () => {
            const result = functions.between('sm', 'lg');
            expect(result).toEqual(
                `${defaultMediaPrefix} (min-width:${
                    breakpointValues.sm
                }px) and (max-width:${breakpointValues.xl - edgeValue}px)`,
            );
        });
    });
});
