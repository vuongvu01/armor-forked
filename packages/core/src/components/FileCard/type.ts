import { HTMLAttributes } from 'react';
import { MarginPropsType, WidthPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type FileCardEffectivePropsType = Partial<{
    /** The file id is used to identify the file when handle events */
    fileId: string;
    /** The full file name with extension */
    fileName: string;
    /** The file size number in bytes */
    fileSize: number;
    /** Can either use the image url or blob format */
    imageSrc: string | Blob;
    /** Handle event when clicking on the Cancel button (cross icon) */
    onCancelButtonClick: (id: string) => void;
    /** Handle event when clicking on the Delete button (trash icon) */
    onDeleteButtonClick: (id: string) => void;
    /** If set to true, renders the component as in the error state */
    error: boolean;
    /** Show error message in error state */
    errorMessage: string;
    /** The upload progress (between 1-100%) */
    uploadProgress: number;
}> &
    HTMLAttributes<HTMLDivElement> &
    MarginPropsType &
    WidthPropsType;

export type FileCardPropsType = FileCardEffectivePropsType &
    ComponentStylePropsType;

export type FileCardRootPropsType = FileCardEffectivePropsType &
    ComponentElementStylePropsType;

export type FileCardBodyPropsType = FileCardEffectivePropsType &
    ComponentElementStylePropsType;

export type FileCardLeftPortionPropsType = ComponentElementStylePropsType;

export type FileCardRightPortionPropsType = ComponentElementStylePropsType;
