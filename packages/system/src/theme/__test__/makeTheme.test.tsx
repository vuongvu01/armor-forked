/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { defaultThemeStructure } from '../defaultThemeStructure';
import { makeTheme } from '../makeTheme';

describe('useTheme()', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should return a non-empty theme', async () => {
        const localTheme = {
            armor: {
                componentCSS: {
                    Button: 'border-width: 2px',
                },
                foo: 'wheel',
            },
        };
        const customTheme = makeTheme(localTheme);

        expect(customTheme.armor.$initialized).toBeTruthy();
        expect(customTheme).toMatchObject(localTheme);
        expect(customTheme.armor).toMatchObject(defaultThemeStructure);
    });

    it('should return an empty theme', async () => {
        const customTheme = makeTheme();
        expect(customTheme.armor.$initialized).toBeTruthy();
        expect(customTheme.armor).toMatchObject(defaultThemeStructure);
    });
});
