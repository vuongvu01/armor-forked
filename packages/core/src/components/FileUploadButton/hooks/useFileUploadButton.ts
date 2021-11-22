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
        ...restProps
    }: FileUploadButtonPropsType,
    ref: RefType<E>,
) => {
    const rootRef = useRootRef<E>(ref);
    const internalInputRef = useRef<HTMLInputElement>(null);

    const handleClick = useCallback(
        event => {
            if (!internalInputRef.current) {
                return;
            }

            const node = internalInputRef.current;

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
        },
        children,
    };
};
