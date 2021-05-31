import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system';
import { ButtonPropsType } from '../Button';

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
    HTMLAttributes<HTMLInputElement> & // includes all HTML Div attributes
    MarginAttributesType;

export type FileUploadButtonPropsType = FileUploadButtonEffectivePropsType &
    ComponentStylePropsType;

export type FileUploadButtonRootPropsType = FileUploadButtonEffectivePropsType &
    ComponentElementStylePropsType;
