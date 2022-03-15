/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import {
    cleanup as cleanupHooks,
    renderHook,
} from '@testing-library/react-hooks';
import { defaultThemeStructure } from '../defaultThemeStructure';
import { useComponentTheme } from '../useComponentTheme';

describe('useComponentTheme()', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should return a non-empty theme', async () => {
        const {
            result: { current },
        } = renderHook(() => useComponentTheme(''));

        expect(current).toMatchObject(defaultThemeStructure);
        expect(current.$initialized).toBeTruthy();
    });
});
