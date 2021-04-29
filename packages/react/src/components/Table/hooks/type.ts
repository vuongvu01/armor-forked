import { Ref } from 'react';
import { TableEffectivePropsType } from '../type';

export type TableHookPropsType = Pick<
    TableEffectivePropsType,
    'stickyColumns' | 'stickyHead'
> & {
    ref: Ref<unknown>;
};
