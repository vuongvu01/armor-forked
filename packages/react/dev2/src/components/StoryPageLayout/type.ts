import { HTMLAttributes } from 'react';

type ModuleType = {
    default: {
        title: string;
    };
} & Record<string, any>;

export type StoryPageLayoutPropsType = Partial<{
    stories: ModuleType;
}> &
    HTMLAttributes<HTMLElement>;

export type StoryPageLayoutDataEdgeType = {
    node: {
        path: string;
    };
};

export type StoryPageLayoutDataType = {
    allSitePage: {
        edges: StoryPageLayoutDataEdgeType[];
    };
};

export type NavigationStoryLinksType = {
    name: string;
    url: string;
}[];

export type NavigationStructureType = {
    name: string;
    url: string;
    stories: NavigationStoryLinksType;
}[];
