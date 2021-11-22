import { HTMLAttributes, ReactNode } from 'react';
import { MarginPropsType, SizePropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type EmptyStateEffectivePropsType = Partial<{
    layout: 'horizontal' | 'vertical';
    preset: 'left' | 'middle' | 'right';
    small: boolean;
    titlePosition: 'left' | 'middle' | 'right';
    descriptionPosition: 'left' | 'middle' | 'right';
    imagePosition: 'left' | 'middle' | 'right';
    enableImage: boolean;
    title: string;
    description: string;
    enableActions: boolean;
    enableIndicator: boolean;
    actionsPosition: 'left' | 'middle' | 'right';
    enableTitle: boolean;
    enableDescription: boolean;
    image: ReactNode;
    actions: ReactNode;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType &
    SizePropsType;

export type EmptyStatePropsType = EmptyStateEffectivePropsType &
    ComponentStylePropsType;

export type EmptyStateRootPropsType = EmptyStateEffectivePropsType &
    ComponentElementStylePropsType;

export type EmptyStateTitlePropsType = {
    small?: boolean;
    layout?: 'horizontal' | 'vertical';
    title?: string;
    titlePosition?: 'left' | 'middle' | 'right';
} & ComponentElementStylePropsType;

export type EmptyStateActionContainerPropsType = {
    actionsPosition?: 'left' | 'middle' | 'right';
    small?: boolean;
} & ComponentElementStylePropsType;

export type EmptyStateHorizontalPropsType = ComponentElementStylePropsType;

export type EmptyStateVerticalPropsType = Pick<
    EmptyStateEffectivePropsType,
    'preset'
> &
    ComponentElementStylePropsType;

export type EmptyStateContainerPropsType = ComponentElementStylePropsType;

export type EmptyStateDescriptionPropsType = {
    descriptionPosition?: 'left' | 'middle' | 'right';
    small?: boolean;
} & ComponentElementStylePropsType;

export type EmptyStateImageContainerPropsType = ComponentElementStylePropsType;

export type EmptyStateImagePropsType = {
    imagePosition?: 'left' | 'middle' | 'right';
} & ComponentElementStylePropsType;
