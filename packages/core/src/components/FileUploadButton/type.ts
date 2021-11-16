import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { ButtonPropsType } from '../Button';

/** 👉 PROPS TYPE */
type FileUploadButtonEffectivePropsType = Partial<{
    accept: string;
    children: ReactNode | string;
    onFileSelect: (file: File) => void;
}> &
    Pick<
        ButtonPropsType,
        | 'onClick'
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'danger'
        | 'small'
        | 'wide'
        | 'disabled'
    > &
    ButtonHTMLAttributes<HTMLButtonElement> &
    HTMLAttributes<HTMLInputElement> & // includes all HTML Div properties
    MarginPropsType;

export type FileUploadButtonPropsType = FileUploadButtonEffectivePropsType &
    ComponentStylePropsType;

export type FileUploadButtonRootPropsType = FileUploadButtonEffectivePropsType &
    ComponentElementStylePropsType;
