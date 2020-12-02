import { HTMLAttributes } from 'react';

import { Indexed } from '../../../type';

type HeaderNavigationItemEffectivePropsType = Indexed<{}> &
    HTMLAttributes<HTMLElement>;

export type HeaderNavigationItemPropsType = HeaderNavigationItemEffectivePropsType;

export type HeaderNavigationItemRootPropsType = HeaderNavigationItemEffectivePropsType;
