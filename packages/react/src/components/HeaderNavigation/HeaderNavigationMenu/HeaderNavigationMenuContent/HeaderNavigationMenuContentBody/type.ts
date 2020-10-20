import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../../../system/attributes';
import { Indexed, ScalarType } from '../../../../../type';
import { OptionArrayType } from '../HeaderNavigationMenuContentBodyOptions/type';

type HeaderNavigationMenuContentBodyEffectivePropsType = Indexed<{
    options?: OptionArrayType;
    selectedValue?: ScalarType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationMenuContentBodyPropsType = HeaderNavigationMenuContentBodyEffectivePropsType;

export type HeaderNavigationMenuContentBodyRootPropsType = HeaderNavigationMenuContentBodyEffectivePropsType;

export type HeaderNavigationMenuContentBodyOptionsRootPropsType = HeaderNavigationMenuContentBodyEffectivePropsType;
