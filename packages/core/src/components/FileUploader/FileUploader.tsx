import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { UploadIcon } from '@deliveryhero/armor-icons';

import { useFileUploaderClassNames } from './hooks/useFileUploaderClassNames';
import { useFileUploader } from './hooks/useFileUploader';
import { FileUploaderRoot, Title, Description, UploadButton } from './style';
import { FileUploaderPropsType } from './type';
import { FILE_UPLOADER_CLASS_PREFIX } from './constants';

/**
 * # FileUploader
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/84692d-file-uploader/b/221ef2)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { FileUploader, FileCardPropsType, Link, FileCard } from '@deliveryhero/armor';
 *
 * export const Example = () => {
 *   const [uploadFiles, setUploadFiles] = useState<FileCardPropsType[]>([]);
 *
 *   const handleFilesSelect = (selectedFiles: File[]) => {
 *       const selectedFile = selectedFiles[0];
 *
 *       const newFileId = Math.ceil(Math.random() * 10000);
 *       setUploadFiles((files) => [
 *           ...files,
 *           {
 *               fileId: newFileId,
 *               fileName: selectedFile.name,
 *               fileSize: selectedFile.size,
 *               error: true,
 *               errorMessage: 'Upload failed, please try again',
 *           },
 *       ]);
 *   };
 *
 *   const handleFileDelete = (fileId: string) => {
 *       const text = 'Are you sure you want to delete this file?';
 *       if (confirm(text) === true) {
 *           setUploadFiles((files) =>
 *               files.filter((file) => file.fileId !== fileId),
 *           );
 *       }
 *   };
 *
 *   return (
 *       <FileUploader
 *           title="Upload File"
 *           description={
 *               <>
 *                   A clear description including the supported file types,
 *                   maximum file size and if necessary a{' '}
 *                   <Link>sample file</Link> link.
 *               </>
 *           }
 *           onFilesSelect={handleFilesSelect}
 *       >
 *           {uploadFiles.map((file) => (
 *               <FileCard
 *                   key={file.fileId}
 *                   marginTop={4}
 *                   width={75}
 *                   onDeleteButtonClick={handleFileDelete}
 *                   {...file}
 *               />
 *           ))}
 *       </FileUploader>
 *     );
 * };
 * ```
 * ***
 *
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
                    <UploadIcon small />
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

export const MemoizedFileUploader = memo(FileUploader);
