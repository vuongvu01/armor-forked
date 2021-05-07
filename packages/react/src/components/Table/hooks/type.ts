import { TableEffectivePropsType } from '../type';

export type TableHookPropsType = Pick<
    TableEffectivePropsType,
    'stickyColumns' | 'stickyHead'
>;
