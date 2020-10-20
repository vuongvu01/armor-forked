import { HTMLAttributes } from 'react';

import { ClassNamesType } from '../../type';
import { ThemeType } from '../../../styling';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
};

export type EmptySuggestionsListPropsType = {
    classNames?: ClassNamesType;
    theme: ThemeType;
} & HTMLAttributes<HTMLElement>;
