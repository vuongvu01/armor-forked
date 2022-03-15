import { makeTheme } from '../makeTheme';
import { colorBlue60 } from '../../tokens';

describe('makeCompatibility', () => {
    it('should produce compatible theme', async () => {
        const theme = makeTheme();

        expect(theme.armor).toMatchObject({
            typography: {
                pageTitle: {
                    color: theme.armor.body.color,
                },
                sectionTitle: {
                    color: theme.armor.body.color,
                },
                subSectionTitle: {
                    color: theme.armor.body.color,
                },
                labelLarge: {
                    color: theme.armor.body.color,
                },
                labelMedium: {
                    color: theme.armor.body.color,
                },
                labelSmall: {
                    color: theme.armor.body.color,
                },
                paragraphLarge: {
                    color: theme.armor.body.color,
                },
                paragraphMedium: {
                    color: theme.armor.body.color,
                },
                paragraphSmall: {
                    color: theme.armor.body.color,
                },
            },
        });
    });

    it('should keep custom colors in place', async () => {
        const theme = makeTheme({
            armor: {
                typography: {
                    pageTitle: {
                        color: 'red',
                    },
                },
                color: {
                    primary: {
                        dark: 'red',
                    },
                },
            },
        });

        expect(theme.armor).toMatchObject({
            typography: {
                pageTitle: {
                    color: 'red',
                },
                sectionTitle: {
                    color: theme.armor.body.color,
                },
            },
            color: {
                primary: {
                    dark: 'red',
                    main: colorBlue60,
                },
            },
        });
    });
});
