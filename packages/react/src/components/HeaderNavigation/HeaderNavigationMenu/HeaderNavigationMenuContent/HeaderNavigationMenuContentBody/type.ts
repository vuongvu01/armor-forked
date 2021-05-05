import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../../../system';
import { ScalarType } from '../../../../../type';
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
    MarginAttributesType;

export type HeaderNavigationMenuContentBodyPropsType = HeaderNavigationMenuContentBodyEffectivePropsType;

export type HeaderNavigationMenuContentBodyRootPropsType = ComponentElementStylePropsType;

export type HeaderNavigationMenuContentBodyOptionsRootPropsType = ComponentElementStylePropsType;
