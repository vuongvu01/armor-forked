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

    const data = [
        [0, '00'],
        [0.1, '1a'],
        [0.2, '33'],
        [0.3, '4d'],
        [0.4, '66'],
        [0.5, '80'],
        [0.6, '99'],
        [0.7, 'b3'],
        [0.8, 'cc'],
        [0.9, 'e6'],
        [1, 'ff'],
    ];

    it.each(data)(
        'should return color with %s opacity in #rrggbbaa format',
        (opacity, hexResult) => {
            const customTheme = makeTheme({
                armor: {
                    color: {
                        primary: {
                            '07': '#1c5ece',
                        },
                    },
                },
            });

            const expected = `#1c5ece${hexResult}`;
            const result = color('primary.07', opacity as number)(customTheme);

            expect(result).toBe(expected);
        },
    );
});
