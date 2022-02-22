import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { IconButton } from '../IconButton';
import { useFileCardClassNames } from './hooks/useFileCardClassNames';
import { useFileCard } from './hooks/useFileCard';
import {
    CancelIcon,
    DeleteIcon,
    FileCardRoot,
    FileCardBody,
    FileCardLeftPortion,
    FileCardRightPortion,
    FormFieldErrorMessage,
    FileName,
    FileExtension,
    FileSize,
    FileImage,
    UploadBar,
} from './style';
import { FileCardPropsType } from './type';
import { FILECARD_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const FileCard = forwardRef<HTMLDivElement, FileCardPropsType>(
    function FileCard({ className, ...props }, ref) {
        const theme = useComponentTheme(FILECARD_CLASS_PREFIX);
        const classNames = useFileCardClassNames(
            FILECARD_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            bodyProps,
            error,
            errorMessage,
            isUploading,
            fileSize,
            fileName,
            fileExtension,
            imageSrc,
            FileIcon,
            getUploadBarProps,
            getCancelButtonProps,
            getDeleteButtonProps,
        } = useFileCard<HTMLDivElement>(props, ref);

        return (
            <FileCardRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
                <FileCardBody
                    {...bodyProps}
                    theme={theme}
                    className={classNames.Body}
                >
                    <FileCardLeftPortion
                        theme={theme}
                        className={classNames.LeftPortion}
                    >
                        {imageSrc ? (
                            <FileImage theme={theme} src={imageSrc} />
                        ) : (
                            <FileIcon
                                theme={theme}
                                className={classNames.FileIcon}
                            />
                        )}
                        <FileName theme={theme} className={classNames.FileName}>
                            {fileName}
                        </FileName>
                        <FileExtension
                            theme={theme}
                            className={classNames.FileExtension}
                        >
                            .{fileExtension}
                        </FileExtension>
                        <FileSize theme={theme} className={classNames.FileSize}>
                            {fileSize}
                        </FileSize>
                    </FileCardLeftPortion>
                    <FileCardRightPortion
                        theme={theme}
                        className={classNames.RightPortion}
                    >
                        {isUploading && (
                            <IconButton {...getCancelButtonProps()}>
                                <CancelIcon
                                    theme={theme}
                                    className={classNames.CancelIcon}
                                />
                            </IconButton>
                        )}
                        {(!isUploading || error) && (
                            <IconButton {...getDeleteButtonProps()}>
                                <DeleteIcon
                                    theme={theme}
                                    className={classNames.DeleteIcon}
                                />
                            </IconButton>
                        )}
                    </FileCardRightPortion>
                    {isUploading && (
                        <UploadBar
                            {...getUploadBarProps()}
                            className={classNames.UploadBar}
                        />
                    )}
                </FileCardBody>
                {error && !!errorMessage && (
                    <FormFieldErrorMessage
                        oneLine
                        theme={theme}
                        className={classNames.FormFieldErrorMessage}
                    >
                        {errorMessage}
                    </FormFieldErrorMessage>
                )}
            </FileCardRoot>
        );
    },
);

FileCard.defaultProps = {
    error: false,
    fileSize: 0,
};

FileCard.propTypes = {
    id: PropTypes.string,
    uploadProgress: PropTypes.number,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    fileName: PropTypes.string.isRequired,
    fileSize: PropTypes.number.isRequired,
    imageSrc: PropTypes.string,
    onCancelButtonClick: PropTypes.func,
    onDeleteButtonClick: PropTypes.func,
};
