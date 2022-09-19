import { HTMLAttributes } from 'react';

import { ComponentElementStylePropsType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classPrefix: string;
    component: string;
    disabled?: boolean;
};

export type SearchIconPropsType = Partial<{
    disabled: boolean;
}> &
    HTMLAttributes<HTMLElement>;

export type SearchIconContainerPropsType = SearchIconPropsType &
    ComponentElementStylePropsType;

export type SearchInputSearchIconPropsType = SearchIconPropsType &
    ComponentElementStylePropsType;
