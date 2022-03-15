import { makeDarkTheme, darkThemeStructure } from '..';

describe('makeDarkTheme', () => {
    it('should make the dark theme', async () => {
        const theme = makeDarkTheme();

        expect(theme.armor).toMatchObject(darkThemeStructure);
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
});
