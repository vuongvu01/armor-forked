import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';
import { UploadIcon } from '@deliveryhero/armor-icons';

import { useFileUploaderClassNames } from './hooks/useFileUploaderClassNames';
import { useFileUploader } from './hooks/useFileUploader';
import { FileUploaderRoot, Title, Description, UploadButton } from './style';
import { FileUploaderPropsType } from './type';
import { FILE_UPLOADER_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const FileUploader = forwardRef<HTMLDivElement, FileUploaderPropsType>(
    function FileUploader({ className, children, ...props }, ref) {
        const theme = useComponentTheme(FILE_UPLOADER_CLASS_PREFIX);
        const classNames = useFileUploaderClassNames(
            FILE_UPLOADER_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            title,
            description,
            getUploadButtonProps,
            uploadButtonLabel,
        } = useFileUploader<HTMLDivElement>(props, ref);

        return (
            <FileUploaderRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
                <Title theme={theme} className={classNames.Title}>
                    {title}
                </Title>
                <Description theme={theme} className={classNames.Description}>
                    {description}
                </Description>
                <UploadButton
                    {...getUploadButtonProps()}
                    theme={theme}
                    className={classNames.UploadButton}
                >
                    <UploadIcon />
                    &nbsp;{uploadButtonLabel}
                </UploadButton>
                <div className={classNames.FileListContainer}>{children}</div>
            </FileUploaderRoot>
        );
    },
);

FileUploader.propTypes = {
    /** The title of the file uploader */
    title: PropTypes.node,
    /** The description of the file uploader */
    description: PropTypes.node,
    /** The callback invoked when multiple files are selected */
    onFilesSelect: PropTypes.func,
    /** Input file button params */
    uploadButtonParams: PropTypes.object,
};
