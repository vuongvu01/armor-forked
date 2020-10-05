import React, { HTMLAttributes } from 'react';

import { ClassNamesType, NodeStylePropsType } from '../../type';
import { SearchQueryType } from '../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
    disabled?: boolean;
};

export type SearchClearActionPropsType = {
    classNames?: ClassNamesType;
    disabled?: boolean;
    disableClearAction?: boolean;
    handleClearQuery?: (event: React.MouseEvent<HTMLDivElement>) => void;
    searchQuery?: SearchQueryType;
} & HTMLAttributes<HTMLElement>;

export type ClearIconContainerPropsType = SearchClearActionPropsType &
    NodeStylePropsType<SearchClearActionPropsType>;

export type SearchInputClearIconPropsType = SearchClearActionPropsType &
    NodeStylePropsType<SearchClearActionPropsType>;
