import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useFileUploadButtonClassNames } from './hooks/useFileUploadButtonClassNames';
import { useFileUploadButton } from './hooks/useFileUploadButton';
import { FileUploadButtonRoot } from './style';
import { FileUploadButtonPropsType } from './type';
import { FILE_UPLOAD_BUTTON_CLASS_PREFIX } from './constants';
import { Button } from '../Button';

/**
 * @armor-docs-component
 */
export const FileUploadButton = forwardRef<
    HTMLInputElement,
    FileUploadButtonPropsType
>(function FileUploadButton({ className, ...props }, ref) {
    const theme = useComponentTheme(FILE_UPLOAD_BUTTON_CLASS_PREFIX);
    const classNames = useFileUploadButtonClassNames(
        FILE_UPLOAD_BUTTON_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        fileInputProps,
        buttonProps,
        children,
    } = useFileUploadButton<HTMLInputElement>(props, ref);

    return (
        // @ts-ignore
        <FileUploadButtonRoot
            {...rootProps}
            theme={theme}
            className={classNames.Root}
        >
            <Button {...buttonProps} className={classNames.Button}>
                {children}
            </Button>
            <input {...fileInputProps} className={classNames.Input} />
        </FileUploadButtonRoot>
    );
});

FileUploadButton.defaultProps = {
    accept: '',
    children: 'Choose file',
    onFileSelect: () => {},
    onClick: () => {},
    primary: true,
    secondary: false,
    tertiary: false,
    danger: false,
    small: false,
    wide: false,
    disabled: false,
};

/** prop-types are required here for run-time checks */
FileUploadButton.propTypes = {
    /** Accept file types */
    accept: PropTypes.string,
    onFileSelect: PropTypes.func,
    /* Button props */
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
    danger: PropTypes.bool,
    small: PropTypes.bool,
    wide: PropTypes.bool,
    disabled: PropTypes.bool,
};
