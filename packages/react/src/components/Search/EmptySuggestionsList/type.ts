import { HTMLAttributes } from 'react';

import { ClassNamesType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
};

export type EmptySuggestionsListPropsType = {
    classNames?: ClassNamesType;
} & HTMLAttributes<HTMLElement>;
