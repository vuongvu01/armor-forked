import { HTMLAttributes } from 'react';

export type StoryPropsType = Partial<{
    // custom props here
    stories: object;
}> &
    HTMLAttributes<HTMLElement>;
