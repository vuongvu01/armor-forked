import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../system/attributes';
import { Indexed } from '../../../type';
import { NavigationSelectorParamsType } from '../type';
import { ClassNamesType, NodeStylePropsType } from '../../type';
import { DropdownSelectedOptionType } from '../../Dropdown/type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
};

type HeaderNavigationSelectorEffectivePropsType = Indexed<{
    navigationSelectorParams?: NavigationSelectorParamsType;
    onOptionSelect?: (
        selectedOption: DropdownSelectedOptionType,
        itemIndex?: number,
    ) => void;
    separator?: boolean;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationSelectorPropsType = HeaderNavigationSelectorEffectivePropsType;

export type HeaderNavigationSelectorRootPropsType = HeaderNavigationSelectorPropsType &
    NodeStylePropsType<HeaderNavigationSelectorPropsType>;
