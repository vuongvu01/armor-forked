import { css } from 'styled-components';
import {
    breakpointUp,
    breakpointDown,
    forwardBreakpoints,
    breakpointOnly,
    forwardBreakpointsTwoArgs,
    breakpointBetween,
} from '../media';
import { breakpoints } from './mock';
import { ObjectLiteralType } from '../../../type';

let functions: ObjectLiteralType = {};

describe('system/mixins/media', () => {
    beforeAll(() => {
        functions = {
            up: forwardBreakpoints(breakpoints, breakpointUp),
            down: forwardBreakpoints(breakpoints, breakpointDown),
            only: forwardBreakpoints(breakpoints, breakpointOnly),
            between: forwardBreakpointsTwoArgs(breakpoints, breakpointBetween),
        };
    });
    describe('breakpointUp()', () => {
        it('should return media declaration', () => {
            const result = functions.up('lg');
            expect(result).toEqual('@media(min-width:1280px)');
        });
        it('should process simple string as css chunk', () => {
            const result = functions.up('lg', 'border: 1px solid red;');
            expect(typeof result).toEqual('object');
            expect(result.toString()).toEqual(
                '@media(min-width:1280px),{,border: 1px solid red;,};',
            );
        });
        it('should process interpolation as css chunk', () => {
            const borderColor = 'red';
            const result = functions.up(
                'lg',
                // prettier-ignore
                css`border: 1px solid ${borderColor};`,
            );
            expect(typeof result).toEqual('object');
            expect(result.toString()).toEqual(
                '@media(min-width:1280px),{,border: 1px solid ,red,;,};',
            );
        });
    });
    describe('breakpointDown()', () => {
        it('should return media declaration', () => {
            const result = functions.down('lg');
            expect(result).toEqual('@media(max-width:1279px)');
        });
        it('should process simple string as css chunk', () => {
            const result = functions.down('lg', 'border: 1px solid red;');
            expect(typeof result).toEqual('object');
            expect(result.toString()).toEqual(
                '@media(max-width:1279px),{,border: 1px solid red;,};',
            );
        });
        it('should process interpolation as css chunk', () => {
            const borderColor = 'red';
            const result = functions.down(
                'lg',
                // prettier-ignore
                css`border: 1px solid ${borderColor};`,
            );
            expect(typeof result).toEqual('object');
            expect(result.toString()).toEqual(
                '@media(max-width:1279px),{,border: 1px solid ,red,;,};',
            );
        });
    });
    describe('breakpointOnly()', () => {
        it('should return media declaration for "md"', () => {
            const result = functions.only('md');
            expect(result).toEqual(
                '@media(min-width:960px and max-width:1279px)',
            );
        });
        it('should return media declaration for "md" as a css chunk', () => {
            const result = functions.only('md', 'border: 1px solid red;');
            expect(typeof result).toEqual('object');
            expect(result.toString()).toEqual(
                '@media(min-width:960px and max-width:1279px),{,border: 1px solid red;,};',
            );
        });
        it('should return media declaration for "xl"', () => {
            const result = functions.only('xl');
            expect(result).toEqual('@media(min-width:1920px)');
        });
        it('should return media declaration for "xs"', () => {
            const result = functions.only('xs');
            expect(result).toEqual('@media(min-width:0px and max-width:599px)');
        });
    });
    describe('breakpointBetween()', () => {
        it('should return media declaration for "sm" and "lg', () => {
            const result = functions.between('sm', 'lg');
            expect(result).toEqual(
                '@media(min-width:600px and max-width:1279px)',
            );
        });
        it('should return media declaration for "sm" and "lg" as a css chunk', () => {
            const result = functions.between(
                'sm',
                'lg',
                'border: 1px solid red;',
            );
            expect(typeof result).toEqual('object');
            expect(result.toString()).toEqual(
                '@media(min-width:600px and max-width:1279px),{,border: 1px solid red;,};',
            );
        });
    });
});
