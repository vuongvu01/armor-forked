import { FC } from 'react';
import { BreakpointCodeType } from '../../../../../src/system/mixins/type';

export type StoryPageContentPropsType = {
    title: string;
    Story: FC | null;
    maxWidth?: BreakpointCodeType;
};
