import { HTMLAttributes } from 'react';

import { ComponentElementStylePropsType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
    disabled?: boolean;
};

export type SearchIconPropsType = {
    isLoading?: boolean;
    disabled?: boolean;
} & HTMLAttributes<HTMLElement>;

export type SearchIconContainerPropsType = SearchIconPropsType &
    ComponentElementStylePropsType;

export type SearchInputSearchIconPropsType = SearchIconPropsType &
    ComponentElementStylePropsType;

export type SearchInputLoadingIconPropsType = SearchIconPropsType &
    ComponentElementStylePropsType;
