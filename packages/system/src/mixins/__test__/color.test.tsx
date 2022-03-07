// @ts-ignore
import React from 'react';
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import styled, { css } from 'styled-components';

import { color } from '../color';
import { makeDefaultTheme, makeTheme, ThemeProvider } from '../../theme';

const theme = makeTheme();
const defaultTheme = makeDefaultTheme();

describe('color', () => {
    it('should replace unprefixed color', async () => {
        expect(color('primary.main')({ theme })).toEqual(
            theme.armor.color.primary.main,
        );
    });

    it('should replace unprefixed color if theme is null', async () => {
        expect(color('primary.main')({ theme: null })).toEqual(
            defaultTheme.armor.color.primary.main,
        );
    });

    it('should replace unprefixed color if theme is undefined', async () => {
        expect(color('primary.main')({ theme: undefined })).toEqual(
            defaultTheme.armor.color.primary.main,
        );
    });

    it('should not replace color constants', async () => {
        expect(color('#abcdef')({ theme })).toEqual('#abcdef');
        expect(color('orange')({ theme })).toEqual('orange');
    });

    it('should return color from a default theme without provider', async () => {
        const Component = styled.div`
            color: ${color('primary.main')};
        `;

        const tree = renderer.create(<Component />).toJSON();
        // @ts-ignore
        expect(tree).toHaveStyleRule(
            'color',
            defaultTheme.armor.color.primary.main,
        );
    });

    it('should return color from a default theme with provider', async () => {
        const Component = styled.div`
            color: ${color('primary.main')};
        `;

        const tree = renderer
            .create(
                <ThemeProvider theme={defaultTheme}>
                    <Component />
                </ThemeProvider>,
            )
            .toJSON();
        // @ts-ignore
        expect(tree).toHaveStyleRule(
            'color',
            defaultTheme.armor.color.primary.main,
        );
    });

    it('should return color from a custom theme with provider', async () => {
        const Component = styled.div`
            color: ${color('primary.main')};
        `;

        const customTheme = makeTheme({
            armor: {
                color: {
                    primary: {
                        main: 'orange',
                    },
                },
            },
        });

        const tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <Component />
                </ThemeProvider>,
            )
            .toJSON();
        // @ts-ignore
        expect(tree).toHaveStyleRule(
            'color',
            customTheme.armor.color.primary.main,
        );
    });

    it('should return color through deep function nesting', async () => {
        const getColor = () => {
            return css`
                ${color('primary.main')}
            `;
        };

        const getStyles = () => {
            return css`
                color: ${getColor};
            `;
        };

        const Component = styled.div`
            ${getStyles};
        `;

        const customTheme = makeTheme({
            armor: {
                color: {
                    primary: {
                        main: 'orange',
                    },
                },
            },
        });

        const tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <Component />
                </ThemeProvider>,
            )
            .toJSON();
        // @ts-ignore
        expect(tree).toHaveStyleRule('color', 'orange');
    });
});
