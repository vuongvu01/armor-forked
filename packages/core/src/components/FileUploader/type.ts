import { HTMLAttributes, ReactNode } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import { FileUploadButtonPropsType } from '../FileUploadButton/type';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

type UploadButtonParamsPropsType = FileUploadButtonPropsType & {
    buttonLabel?: string;
};

/** 👉 PROPS TYPE */
type FileUploaderEffectivePropsType = Partial<{
    /** The title of the file uploader, can be either a string or a React node */
    title: ReactNode;
    /** The description of the file uploader, can be either a string or a React node */
    description: ReactNode;
    /** The callback invoked when multiple files are selected */
    onFilesSelect: (files: File[]) => void;
    /** Input file button params */
    uploadButtonParams: UploadButtonParamsPropsType;
}> &
    Omit<HTMLAttributes<HTMLElement>, 'title'> &
    MarginPropsType;

export type FileUploaderPropsType = FileUploaderEffectivePropsType &
    ComponentStylePropsType;

export type FileUploaderRootPropsType = FileUploaderEffectivePropsType &
    ComponentElementStylePropsType;
