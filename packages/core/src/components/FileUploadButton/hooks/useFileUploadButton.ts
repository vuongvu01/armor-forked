import { ChangeEvent, useCallback, useRef } from 'react';
import { useRootRef } from '@deliveryhero/armor-system';

import { FileUploadButtonPropsType } from '../type';
import { RefType } from '../../../type';

export const useFileUploadButton = <E extends HTMLInputElement>(
    {
        accept,
        children,
        onFileSelect,
        onClick,
        disabled,
        small,
        wide,
        primary,
        secondary,
        tertiary,
        danger,
        multiple,
        onFilesSelect,
        ...restProps
    }: FileUploadButtonPropsType,
    ref: RefType<E>,
) => {
    const rootRef = useRootRef<E>(ref);
    const internalInputRef = useRef<HTMLInputElement>(null);

    const handleClick = useCallback(
        (event) => {
            if (!internalInputRef.current) {
                return;
            }

            onClick?.(event);

            const node = internalInputRef.current;
            if (node && !disabled) {
                node.click();
            }
        },
        [disabled, onClick],
    );

    const handleChange = useCallback(
        (event: ChangeEvent) => {
            const target = event.target as HTMLInputElement;
            if (target) {
                const fileList = target.files as FileList;
                onFileSelect?.(fileList[0] as File);
                onFilesSelect?.(Array.from(fileList));
            }
        },
        [onFileSelect, onFilesSelect],
    );

    return {
        rootProps: {
            ...restProps,
            ref: rootRef,
        },
        buttonProps: {
            disabled,
            small,
            wide,
            primary,
            secondary,
            tertiary,
            danger,
            onClick: handleClick,
        },
        fileInputProps: {
            accept,
            type: 'file',
            hidden: true,
            onChange: handleChange,
            ref: internalInputRef,
            multiple,
        },
        children,
    };
};
