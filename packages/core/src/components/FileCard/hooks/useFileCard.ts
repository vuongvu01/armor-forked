import { useState, useEffect, useMemo } from 'react';
import { useRootRef } from '@deliveryhero/armor-system';

import { FileCardPropsType } from '../type';
import { RefType } from '../../../type';
import { ProgressBarLevels } from '../../ProgressBar/constants';
import {
    extractFileNameExtension,
    formatBytesToSize,
    getFileIconByExtension,
    convertBlobToBase64,
} from '../utils';

export const useFileCard = <E extends HTMLElement>(
    {
        fileId,
        fileName: fileNameFull,
        fileSize,
        uploadProgress,
        imageSrc,
        error,
        errorMessage,
        onCancelButtonClick,
        onDeleteButtonClick,
        ...restProps
    }: FileCardPropsType,
    ref: RefType<E>,
) => {
    const [internalImageSrc, setInternalImageSrc] = useState('');
    const innerRef = useRootRef<E>(ref);

    const { fileName, fileExtension } = useMemo(
        () => extractFileNameExtension(fileNameFull),
        [fileNameFull],
    );

    useEffect(() => {
        if (!imageSrc) {
            return;
        }

        if (imageSrc instanceof Blob) {
            (async () => {
                try {
                    const imageSrcBase64 = await convertBlobToBase64(imageSrc);
                    setInternalImageSrc(imageSrcBase64);
                } catch {
                    setInternalImageSrc('');
                }
            })();
        } else {
            setInternalImageSrc(imageSrc);
        }
    }, [imageSrc]);

    return {
        rootProps: {
            error,
            uploadProgress,
        },
        bodyProps: {
            restProps,
            error,
            uploadProgress,
            ref: innerRef,
        },
        error,
        errorMessage,
        isUploading: !!uploadProgress || uploadProgress === 0,
        fileSize: formatBytesToSize(fileSize),
        fileName,
        fileExtension,
        imageSrc: internalImageSrc,
        FileIcon: getFileIconByExtension(fileExtension),
        getCancelButtonProps: () => ({
            onClick: () => fileId && onCancelButtonClick?.(fileId),
            marginLeft: 2,
        }),
        getDeleteButtonProps: () => ({
            onClick: () => fileId && onDeleteButtonClick?.(fileId),
            marginLeft: 2,
        }),
        getUploadBarProps: () => ({
            progress: uploadProgress,
            preset: ProgressBarLevels.FILE_UPLOAD,
        }),
    };
};
