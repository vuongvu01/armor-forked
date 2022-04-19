import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

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
    FileImageContainer,
    FileImage,
    UploadBar,
    FileImageIcon,
} from './style';
import { FileCardPropsType } from './type';
import { FILECARD_CLASS_PREFIX } from './constants';

/**
 * # FileCard
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/71d773-file-card/b/206bd6)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import React from 'react';
 * import { FileCard } from '@deliveryhero/armor';
 *
 * const handleClickCancel = (id: string) => {
 *   console.log({ cancelId: id });
 * };
 *
 * const handleClickDelete = (id: string) => {
 *   console.log({ deleteId: id });
 * };
 *
 * export const Example = () => {
 *   return (
 *     <FileCard
 *         fileId="file-01"
 *         onCancelButtonClick={handleClickCancel}
 *         onDeleteButtonClick={handleClickDelete}
 *         fileName="Lorem_ipsum_dolor_sit_amet.txt"
 *         fileSize={10491049}
 *         uploadProgress={42}
 *     />
 *   );
 * };
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const FileCard = forwardRef<HTMLDivElement, FileCardPropsType>(
    function FileCard({ className, ...props }, ref) {
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
            <FileCardRoot {...rootProps} className={classNames.Root}>
                <FileCardBody {...bodyProps} className={classNames.Body}>
                    <FileCardLeftPortion className={classNames.LeftPortion}>
                        {imageSrc ? (
                            <FileImageContainer
                                className={classNames.FileImageContainer}
                                isUploading={isUploading}
                            >
                                {isUploading ? (
                                    <FileImageIcon
                                        className={classNames.FileIcon}
                                    />
                                ) : (
                                    <FileImage
                                        className={classNames.FileImage}
                                        src={imageSrc}
                                        alt={fileName}
                                    />
                                )}
                            </FileImageContainer>
                        ) : (
                            <FileIcon className={classNames.FileIcon} />
                        )}
                        <FileName className={classNames.FileName}>
                            {fileName}
                        </FileName>
                        <FileExtension className={classNames.FileExtension}>
                            {fileExtension}
                        </FileExtension>
                        <FileSize className={classNames.FileSize}>
                            {fileSize}
                        </FileSize>
                    </FileCardLeftPortion>
                    <FileCardRightPortion className={classNames.RightPortion}>
                        {isUploading && (
                            <IconButton {...getCancelButtonProps()}>
                                <CancelIcon className={classNames.CancelIcon} />
                            </IconButton>
                        )}
                        {(!isUploading || error) && (
                            <IconButton {...getDeleteButtonProps()}>
                                <DeleteIcon className={classNames.DeleteIcon} />
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
    fileName: PropTypes.string,
    fileSize: PropTypes.number,
    imageSrc: PropTypes.string,
    onCancelButtonClick: PropTypes.func,
    onDeleteButtonClick: PropTypes.func,
};
