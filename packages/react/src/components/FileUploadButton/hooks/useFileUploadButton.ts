import { ChangeEvent, useCallback } from 'react';

import { FileUploadButtonPropsType } from '../type';
import { RefType } from '../../../type';
import { useRootRef } from '../../../system';

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
        ...restProps
    }: FileUploadButtonPropsType,
    ref: RefType<E>,
) => {
    const internalInputRef = useRootRef<E>(ref);

    const handleClick = useCallback(
        event => {
            const node = internalInputRef.current as any;

            if (onClick) {
                onClick(event);
            }

            if (!node || disabled) {
                return;
            }

            node.click();
        },
        [disabled, onClick],
    );

    const handleChange = useCallback(
        (event: ChangeEvent) => {
            const target = event.target as HTMLInputElement;
            if (onFileSelect && target) {
                const file: File = (target.files as FileList)[0];
                onFileSelect(file);
            }
        },
        [onFileSelect],
    );

    return {
        rootProps: {
            ...restProps,
            ref,
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
        },
        children,
    };
};
