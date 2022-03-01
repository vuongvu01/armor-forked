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
    multiple: boolean;
    /**
     * @deprecated
     * use onFilesSelect instead
     */
    onFileSelect: (file: File) => void;
    /** Return one or multiple files on select */
    onFilesSelect: (files: File[]) => void;
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
