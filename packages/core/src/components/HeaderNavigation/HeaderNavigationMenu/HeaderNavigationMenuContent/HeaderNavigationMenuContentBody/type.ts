import { HTMLAttributes } from 'react';
import { MarginPropsType, ScalarType } from '@deliveryhero/armor-system';

import {
    OptionArrayType,
    OptionType,
} from '../HeaderNavigationMenuContentBodyOptions/type';
import { ComponentElementStylePropsType } from '../../../../type';

type HeaderNavigationMenuContentBodyEffectivePropsType = Partial<{
    options: OptionArrayType;
    selectedValue: ScalarType;
    onOptionSelect: (selectedItem: OptionType) => void;
}> &
    HTMLAttributes<HTMLElement> &
    MarginPropsType;

export type HeaderNavigationMenuContentBodyPropsType = HeaderNavigationMenuContentBodyEffectivePropsType;

export type HeaderNavigationMenuContentBodyRootPropsType = ComponentElementStylePropsType;

export type HeaderNavigationMenuContentBodyOptionsRootPropsType = ComponentElementStylePropsType;
