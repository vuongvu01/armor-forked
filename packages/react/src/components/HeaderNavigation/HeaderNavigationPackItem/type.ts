import { HTMLAttributes } from 'react';

import { Indexed } from '../../../type';

type HeaderNavigationPackItemEffectivePropsType = Indexed<{}> &
    HTMLAttributes<HTMLElement>;

export type HeaderNavigationPackItemPropsType = HeaderNavigationPackItemEffectivePropsType;

export type HeaderNavigationPackItemRootPropsType = HeaderNavigationPackItemEffectivePropsType;
