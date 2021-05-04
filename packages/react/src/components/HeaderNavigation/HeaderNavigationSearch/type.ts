import { ChangeEvent, HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../system';
import { ComponentElementStylePropsType } from '../../type';
import { SuggestionObjectType } from '../../Search/type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

type HeaderNavigationSearchEffectivePropsType = Partial<{
    options: SuggestionObjectType[];
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onItemSelect: (option: SuggestionObjectType) => void;
    separator: boolean;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationSearchPropsType = HeaderNavigationSearchEffectivePropsType;

export type HeaderNavigationSearchRootPropsType = HeaderNavigationSearchPropsType &
    ComponentElementStylePropsType;
