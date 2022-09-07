import { FC, useEffect, useState } from 'react';
import { useNavigate } from '@reach/router';
import { makeTheme, RootThemeType } from '@deliveryhero/armor-system';
import { makeDarkTheme } from '@deliveryhero/armor-brands';

import { StoryPageLayoutPropsType } from '../type';
import { useQueryParams } from '../../../hooks/useQueryParams';
import { useLocalStorage } from './useLocalStorage';

const themes = {
    light: makeTheme(),
    dark: makeDarkTheme(),
} as Record<string, RootThemeType>;

export const useStoryPageLayout = ({
    stories,
    containerMaxWidth,
}: StoryPageLayoutPropsType) => {
    const params = useQueryParams();
    const navigate = useNavigate();
    const story = params.get('story');

    const list: string[] = stories
        ? Object.keys(stories).filter((name) => name !== 'default')
        : [];

    useEffect(() => {
        if (!story || !list.includes(story)) {
            window.history.replaceState({}, '', `?story=${list[0]}`);
        }
    }, [story, navigate, list]);

    let title = (stories?.default.title ?? '').replace(
        /(Components\/|Extras\/|Deprecated\/)/,
        '',
    );
    const componentName = title;

    const storyList = list.reduce<Record<string, string>>(
        (result, storyName) => {
            return {
                ...result,
                [storyName]: storyName.replace(/([A-Z])/g, ' $1').trim(),
            };
        },
        {},
    );

    const storyLinks = Object.keys(storyList).map((storyName) => ({
        name: storyList[storyName],
        url: `?story=${storyName}`,
    }));
    let storyComponent: FC<React.PropsWithChildren<unknown>> | null = null;
    if (story && stories && story in stories) {
        storyComponent = stories[story];
        title = `${title} ➡️ ${storyList[story]}`;
    }

    const [storedThemeName, setStoredThemeName] = useLocalStorage();
    const [selectedThemeName, setSelectedThemeName] =
        useState<string>(storedThemeName);
    const theme = selectedThemeName ? themes[selectedThemeName] ?? null : null;
    const hasTheme = !!theme?.armor;
    const hasNoTheme = !hasTheme;

    return {
        componentName,
        pageLayoutProps: {
            displayPageTitle: false,
            title,
        },
        storyList,
        storyLinks,
        storyPageContentProps: {
            title,
            Story: storyComponent,
            maxWidth: containerMaxWidth,
        },
        themeSelectorProps: {
            themeName: selectedThemeName,
            onThemeChange: (newThemeName: string | null) => {
                setStoredThemeName(newThemeName ?? '');
                setSelectedThemeName(newThemeName ?? '');
            },
            themeNames: Object.keys(themes),
        },
        theme,
        hasTheme,
        hasNoTheme,
    };
};
