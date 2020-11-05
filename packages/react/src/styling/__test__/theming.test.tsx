/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import React from 'react';
import {
    createMuiTheme,
    ThemeProvider as MUIThemeProvider,
} from '@material-ui/core/styles';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { armorTheme } from '../../components/Button/helpers/custom-theme';
import { Button } from '../../components/Button';
import { defaultThemeStructure } from '../defaultThemeStructure';
import { makeTheme } from '..';

const arbitraryTheme = {};
const muiTheme = createMuiTheme();
const hybridTheme = {
    ...createMuiTheme(),
    armor: {
        shape: {
            borderRadius: {
                soft: '100px',
            },
        },
        spacing: (value: any) => `${3 * value}px`,
        typography: {
            body: {
                fontFamily: 'Segoe UI',
            },
        },
    },
};
const preCreatedTheme = makeTheme({
    armor: {
        shape: {
            borderRadius: {
                soft: '100px',
            },
        },
        spacing: (value: any) => `${3 * value}px`,
    },
});
const preCreatedHybridTheme = makeTheme({
    ...createMuiTheme(),
    armor: {
        shape: {
            borderRadius: {
                soft: '100px',
            },
        },
        spacing: (value: any) => `${3 * value}px`,
    },
});

const expectToHaveStyleRules = (
    tree: any,
    borderRadius: string,
    padding = '16px',
    fontFamily = 'Roboto,sans-serif',
) => {
    // @ts-ignore
    expect(tree).toHaveStyleRule('border-radius', borderRadius);
    // @ts-ignore
    expect(tree).toHaveStyleRule('padding-left', padding);
    // @ts-ignore
    expect(tree).toHaveStyleRule('font-family', fontFamily);
};

describe('makeTheme()', () => {
    it('should apply default theme when no context is provided', async () => {
        const tree = renderer
            .create(<Button>With custom theme</Button>)
            .toJSON();

        expectToHaveStyleRules(
            tree,
            defaultThemeStructure.shape.borderRadius.soft,
        );
    });

    it('should apply default theme when only MUI context is provided', async () => {
        const tree = renderer
            .create(
                <MUIThemeProvider theme={muiTheme}>
                    <Button>With custom theme</Button>
                </MUIThemeProvider>,
            )
            .toJSON();

        expectToHaveStyleRules(
            tree,
            defaultThemeStructure.shape.borderRadius.soft,
        );
    });

    it('should apply default theme when MUI theme is provided in both MUI and SC contexts', async () => {
        const tree = renderer
            .create(
                <MUIThemeProvider theme={muiTheme}>
                    <ThemeProvider theme={muiTheme}>
                        <Button>With custom theme</Button>
                    </ThemeProvider>
                </MUIThemeProvider>,
            )
            .toJSON();

        expectToHaveStyleRules(
            tree,
            defaultThemeStructure.shape.borderRadius.soft,
        );
    });

    it('should apply default theme when arbitrary theme is provided in SC context', async () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={arbitraryTheme}>
                    <Button>With custom theme</Button>
                </ThemeProvider>,
            )
            .toJSON();

        expectToHaveStyleRules(
            tree,
            defaultThemeStructure.shape.borderRadius.soft,
        );
    });

    it('should apply custom theme when a custom theme is provided in SC context', async () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={armorTheme}>
                    <Button>With custom theme</Button>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule(
            'border-radius',
            defaultThemeStructure.shape.borderRadius.sharp,
        );
        expectToHaveStyleRules(
            tree,
            defaultThemeStructure.shape.borderRadius.sharp,
            '16px',
            'Comic Sans MS,sans-serif',
        );
    });

    it('should apply custom theme when a hybrid theme is provided in SC context', async () => {
        const tree = renderer
            .create(
                <MUIThemeProvider theme={hybridTheme}>
                    <ThemeProvider theme={hybridTheme}>
                        <Button>With custom theme</Button>
                    </ThemeProvider>
                </MUIThemeProvider>,
            )
            .toJSON();

        expectToHaveStyleRules(tree, '100px', '12px', 'Segoe UI,sans-serif');
    });

    it('should apply custom theme when a pre-created theme is provided in SC context', async () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={preCreatedTheme}>
                    <Button>With custom theme</Button>
                </ThemeProvider>,
            )
            .toJSON();

        expectToHaveStyleRules(tree, '100px', '12px');
    });

    it('should apply custom theme when a pre-created hybrid theme is provided in SC context', async () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={preCreatedHybridTheme}>
                    <Button>With custom theme</Button>
                </ThemeProvider>,
            )
            .toJSON();

        expectToHaveStyleRules(tree, '100px', '12px');
    });
});
