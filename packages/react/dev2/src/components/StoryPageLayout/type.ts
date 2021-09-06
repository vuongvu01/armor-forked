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
