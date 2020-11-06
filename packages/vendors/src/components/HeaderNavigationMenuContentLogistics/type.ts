import { HTMLAttributes } from 'react';
import { ObjectLiteralType } from '../../type';

export type HeaderNavigationMenuContentPropsType = {
    displayedApplicationCodes?: string[];
} & ObjectLiteralType &
    HTMLAttributes<HTMLElement>;
