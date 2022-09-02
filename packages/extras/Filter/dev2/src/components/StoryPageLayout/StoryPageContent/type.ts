import { FC } from 'react';
import { BreakpointCodeType } from '@deliveryhero/armor-system';

export type StoryPageContentPropsType = {
    title: string;
    Story: FC<React.PropsWithChildren<unknown>> | null;
    maxWidth?: BreakpointCodeType;
};
