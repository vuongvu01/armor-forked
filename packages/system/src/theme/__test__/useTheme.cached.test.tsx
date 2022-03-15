/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { useTheme } from '../useTheme';
import { makeTheme } from '../makeTheme';

const mockedSubTheme = { foo: 'bar' };
const mockedTheme = { armor: mockedSubTheme };

jest.mock('../makeTheme', () => ({
    makeTheme: jest.fn().mockImplementation(() => mockedTheme),
}));
jest.mock('../makeArmorSubTheme', () => ({
    makeArmorSubTheme: jest.fn().mockImplementation((arg) => arg),
}));

describe('useTheme()', () => {
    describe('cached', () => {
        afterEach(async () => {
            await cleanupHooks();
        });

        it('should return the cached default theme when no provider is set', async () => {
            const {
                result: { current },
            } = renderHook(() => useTheme());

            expect(current).toEqual(mockedTheme);
            expect(makeTheme).toHaveBeenCalledTimes(1);

            const {
                result: { current: currentNext },
            } = renderHook(() => useTheme());

            expect(currentNext).toEqual(mockedTheme);
            expect(makeTheme).toHaveBeenCalledTimes(1);
        });
    });
});
