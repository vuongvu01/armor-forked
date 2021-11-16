import React, { HTMLAttributes } from 'react';

import { ComponentElementStylePropsType } from '../../type';
import { SearchQueryType } from '../type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
    disabled?: boolean;
};

export type SearchClearActionPropsType = Partial<{
    disabled: boolean;
    disableClearAction: boolean;
    handleClearQuery: (event: React.MouseEvent<HTMLDivElement>) => void;
    searchQuery: SearchQueryType;
}> &
    HTMLAttributes<HTMLElement>;

export type ClearIconContainerPropsType = SearchClearActionPropsType &
    ComponentElementStylePropsType;

export type SearchInputClearIconPropsType = SearchClearActionPropsType &
    ComponentElementStylePropsType;
