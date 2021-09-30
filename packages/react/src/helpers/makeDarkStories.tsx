import React from 'react';
import { makeDarkTheme, ThemeProvider } from '..';

type StoryType = () => JSX.Element;
type ImportsType = Record<
    string,
    StoryType | { title: string; component: unknown }
>;

export const makeDarkStories = (imports: ImportsType) => {
    const darkTheme = makeDarkTheme();
    const result: Record<string, StoryType> = {};

    Object.keys(imports).forEach(importName => {
        if (importName !== 'default') {
            const StoryComponent = imports[importName] as StoryType;
            result[`Dark${importName}`] = function DarkStory() {
                return (
                    <ThemeProvider theme={darkTheme}>
                        <StoryComponent />
                    </ThemeProvider>
                );
            };
        }
    });

    return result;
};
