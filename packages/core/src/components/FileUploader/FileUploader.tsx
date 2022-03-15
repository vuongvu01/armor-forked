import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

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
            <FileUploaderRoot {...rootProps} className={classNames.Root}>
                <Title className={classNames.Title}>{title}</Title>
                <Description className={classNames.Description}>
                    {description}
                </Description>
                <UploadButton
                    {...getUploadButtonProps()}
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
