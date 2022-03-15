import React from 'react';
import { ThemeProvider, RootThemeType } from '@deliveryhero/armor-system';

type StoryType = () => JSX.Element;
type ImportsType = Record<
    string,
    StoryType | { title: string; component: unknown }
>;

export const makeStories = (
    imports: ImportsType,
    makeTheme: () => RootThemeType,
    postfix = 'Dark',
) => {
    const theme = makeTheme();
    const result: ImportsType = {};

    Object.keys(imports).forEach((importName) => {
        if (importName !== 'default') {
            const StoryComponent = imports[importName] as StoryType;
            result[`${postfix}${importName}`] = function ModifiedStory() {
                return (
                    <ThemeProvider theme={theme}>
                        <StoryComponent />
                    </ThemeProvider>
                );
            };
        } else {
            result.default = imports[importName];
        }
    });

    return result;
};
