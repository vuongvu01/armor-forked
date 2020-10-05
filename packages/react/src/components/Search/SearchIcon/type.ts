import { HTMLAttributes } from 'react';

import { ClassNamesType, NodeStylePropsType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
    disabled?: boolean;
};

export type SearchIconPropsType = {
    classNames?: ClassNamesType;
    isLoading?: boolean;
    disabled?: boolean;
} & HTMLAttributes<HTMLElement>;

export type SearchIconContainerPropsType = SearchIconPropsType &
    NodeStylePropsType<SearchIconPropsType>;

export type SearchInputSearchIconPropsType = SearchIconPropsType &
    NodeStylePropsType<SearchIconPropsType>;

export type SearchInputLoadingIconPropsType = SearchIconPropsType &
    NodeStylePropsType<SearchIconPropsType>;
