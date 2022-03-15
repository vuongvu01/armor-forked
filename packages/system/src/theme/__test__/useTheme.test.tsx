/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import React, { FC } from 'react';

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { useTheme } from '../useTheme';
import { ThemeProvider } from '../ThemeProvider';
import { defaultThemeStructure } from '../defaultThemeStructure';
import { makeTheme } from '../makeTheme';

describe('useTheme()', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should initialise a theme internally', async () => {
        const {
            result: { current },
        } = renderHook(() => useTheme());

        expect(current.armor).toMatchObject(defaultThemeStructure);
        expect(current.armor.$initialized).toBeTruthy();
    });

    it('should return a pre-initialised theme via provider', async () => {
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

        const wrapper: FC = ({ children }) => (
            // @ts-ignore
            <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
        );

        const {
            result: { current },
        } = renderHook(() => useTheme(), { wrapper });

        expect(current.armor.$initialized).toBeTruthy();
        expect(current).toMatchObject(localTheme);
        expect(current.armor).toMatchObject(defaultThemeStructure);
    });

    it('should return an empty pre-initialised theme via provider', async () => {
        const customTheme = makeTheme();
        expect(customTheme.armor.$initialized).toBeTruthy();
        expect(customTheme.armor).toMatchObject(defaultThemeStructure);

        const wrapper: FC = ({ children }) => (
            // @ts-ignore
            <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
        );

        const {
            result: { current },
        } = renderHook(() => useTheme(), { wrapper });

        expect(current.armor.$initialized).toBeTruthy();
        expect(current.armor).toMatchObject(defaultThemeStructure);
    });

    it('should initialise a non-initialised theme and return via provider', async () => {
        const localTheme = { armor: { foo: 'wheel' } };

        const wrapper: FC = ({ children }) => (
            // @ts-ignore
            <ThemeProvider theme={localTheme}>{children}</ThemeProvider>
        );

        const {
            result: { current },
        } = renderHook(() => useTheme(), { wrapper });

        expect(current).toEqual(localTheme);
        expect(current.armor).toMatchObject(defaultThemeStructure);
        expect(current.armor.$initialized).toBeTruthy();
    });

    it('should initialise an empty non-initialised theme and return via provider', async () => {
        const localTheme = {};

        const wrapper: FC = ({ children }) => (
            // @ts-ignore
            <ThemeProvider theme={localTheme}>{children}</ThemeProvider>
        );

        const {
            result: { current },
        } = renderHook(() => useTheme(), { wrapper });

        expect(current.armor).toMatchObject(defaultThemeStructure);
        expect(current.armor.$initialized).toBeTruthy();
    });
});
