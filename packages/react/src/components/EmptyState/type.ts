import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system';
import { ObjectLiteralType } from '../../type';

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
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType &
    ObjectLiteralType;

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

export type EmptyStateHorizontalPropsType = {} & ComponentElementStylePropsType;

export type EmptyStateVerticalPropsType = {} & ComponentElementStylePropsType;

export type EmptyStateContainerPropsType = {} & ComponentElementStylePropsType;

export type EmptyStateDescriptionPropsType = {
    descriptionPosition?: 'left' | 'middle' | 'right';
    small?: boolean;
} & ComponentElementStylePropsType;

export type EmptyStateImageContainerPropsType = {} & ComponentElementStylePropsType;

export type EmptyStateImagePropsType = {
    imagePosition?: 'left' | 'middle' | 'right';
} & ComponentElementStylePropsType;
