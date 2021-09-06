import { FC, useEffect } from 'react';
import { useNavigate } from '@reach/router';
import { StoryPageLayoutPropsType } from '../type';
import { useQueryParams } from '../../../hooks/useQueryParams';

export const useStoryPageLayout = ({ stories }: StoryPageLayoutPropsType) => {
    const params = useQueryParams();
    const navigate = useNavigate();
    const story = params.get('story');

    const list: string[] = stories
        ? Object.keys(stories).filter(name => name !== 'default')
        : [];

    useEffect(() => {
        if (!story || !list.includes(story)) {
            window.history.replaceState({}, '', `?story=${list[0]}`);
        }
    }, [story, navigate, list]);

    let title = (stories?.default.title ?? '').replace('Components/', '');

    const storyList = list.reduce<Record<string, string>>(
        (result, storyName) => {
            return {
                ...result,
                [storyName]: storyName.replace(/([A-Z])/g, ' $1').trim(),
            };
        },
        {},
    );

    const storyLinks = Object.keys(storyList).map(storyName => ({
        name: storyList[storyName],
        url: `?story=${storyName}`,
    }));

    let storyComponent: FC | null = null;
    if (story && stories && story in stories) {
        storyComponent = stories[story];
        title = `${title} ➡️ ${storyList[story]}`;
    }

    return {
        title,
        pageLayoutProps: {
            displayPageTitle: false,
            title,
        },
        storyList,
        storyLinks,
        Story: storyComponent,
    };
};
