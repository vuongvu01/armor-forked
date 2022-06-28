/* eslint-disable no-console,import/no-unresolved */

import React, { useState } from 'react';
import { generateId } from '@deliveryhero/armor-system';
import { withWrapper } from '../../../helpers/Wrapper';

import { Typography } from '../../Typography';
import { FileCard } from '../../FileCard';
import { FileUploader } from '../FileUploader';
import { FileCardPropsType } from '../../FileCard/type';
import { Link } from '../../Link';

export default {
    title: 'Components/FileUploader',
    component: FileUploader,
    decorators: [withWrapper],
    parameters: {},
};

const defaultFileList = [
    { fileId: '001', fileName: 'file_name_001.png', fileSize: 10102323 },
    {
        fileId: '002',
        fileName: 'file_name_loooooooooooooooooooooooooong_001.csv',
        fileSize: 101092323,
    },
    {
        fileId: '003',
        fileName: 'file_name_003.txt',
        fileSize: 102222323,
        error: true,
        errorMessage: 'File upload failed',
    },
    {
        fileId: '004',
        fileName: 'file_name_004.pdf',
        fileSize: 10105323,
        uploadProgress: 69,
    },
];

const useFakeUploadHook = (initialFiles?: FileCardPropsType[]) => {
    const [uploadFiles, setUploadFiles] = useState<FileCardPropsType[]>(
        initialFiles || [],
    );

    const fakeUpload = (fileId: string) => {
        const interval = setInterval(() => {
            setUploadFiles((files) =>
                files.map((file) => {
                    if (file.fileId !== fileId) {
                        return file;
                    }
                    const currentProgress = file.uploadProgress || 0;
                    if (currentProgress >= 100) {
                        clearInterval(interval);
                        return {
                            ...file,
                            uploadProgress: undefined,
                        };
                    }
                    return {
                        ...file,
                        uploadProgress: currentProgress + 2,
                    };
                }),
            );
        }, 100);
    };

    const setPreviewImage = (fileId: string, imageSrc?: string) => {
        setUploadFiles((files) =>
            files.map((file) => {
                if (file.fileId !== fileId) {
                    return file;
                }
                return {
                    ...file,
                    imageSrc,
                };
            }),
        );
    };

    const handleFilesSelect = (selectedFiles: File[]) => {
        setUploadFiles((files) => [
            ...files,
            ...selectedFiles.map((file) => {
                const newFileId = generateId();
                // check if the file is an image then show preview instead of icon
                if (file.type.match('image.*')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        setPreviewImage(newFileId, e.target?.result as string);
                    };
                    reader.readAsDataURL(file);
                }

                fakeUpload(newFileId);

                return {
                    fileId: newFileId,
                    fileName: file.name,
                    fileSize: file.size,
                    uploadProgress: 0,
                };
            }),
        ]);
    };
    const handleFileCancel = (fileId: string) => {
        const text = 'Are you sure you want to cancel this file upload?';
        // eslint-disable-next-line no-alert, no-restricted-globals
        if (confirm(text) === true) {
            setUploadFiles((files) =>
                files.filter((file) => file.fileId !== fileId),
            );
        }
    };
    const handleFileDelete = (fileId: string) => {
        const text = 'Are you sure you want to delete this file?';
        // eslint-disable-next-line no-alert, no-restricted-globals
        if (confirm(text) === true) {
            setUploadFiles((files) =>
                files.filter((file) => file.fileId !== fileId),
            );
        }
    };

    return {
        uploadFiles,
        handleFilesSelect,
        handleFileCancel,
        handleFileDelete,
    };
};

export const DefaultView = () => {
    const {
        uploadFiles,
        handleFilesSelect,
        handleFileCancel,
        handleFileDelete,
    } = useFakeUploadHook(defaultFileList);

    return (
        <FileUploader
            title="Upload File"
            description={
                <>
                    A clear description including the supported file types,
                    maximum file size and if necessary a{' '}
                    <Link>sample file</Link> link.
                </>
            }
            onFilesSelect={handleFilesSelect}
        >
            {uploadFiles.map((file) => (
                <FileCard
                    key={file.fileId}
                    marginTop={4}
                    width={75}
                    onCancelButtonClick={handleFileCancel}
                    onDeleteButtonClick={handleFileDelete}
                    {...file}
                />
            ))}
        </FileUploader>
    );
};

export const CustomTitleAndDescription = () => {
    const {
        uploadFiles,
        handleFilesSelect,
        handleFileCancel,
        handleFileDelete,
    } = useFakeUploadHook(defaultFileList);

    return (
        <FileUploader
            title={<Typography pageTitle>Upload File</Typography>}
            description={
                <Typography sectionTitle>
                    A clear description including the supported file types,
                    maximum file size and if necessary a{' '}
                    <Link>sample file</Link> link.
                </Typography>
            }
            onFilesSelect={handleFilesSelect}
        >
            {uploadFiles.map((file) => (
                <FileCard
                    key={file.fileId}
                    marginTop={4}
                    width={75}
                    onCancelButtonClick={handleFileCancel}
                    onDeleteButtonClick={handleFileDelete}
                    {...file}
                />
            ))}
        </FileUploader>
    );
};

export const CustomLabelWithSecondaryButton = () => {
    const {
        uploadFiles,
        handleFilesSelect,
        handleFileCancel,
        handleFileDelete,
    } = useFakeUploadHook(defaultFileList);

    return (
        <FileUploader
            title="Upload File"
            description={
                <>
                    A clear description including the supported file types,
                    maximum file size and if necessary a{' '}
                    <Link>sample file</Link> link.
                </>
            }
            uploadButtonParams={{
                buttonLabel: 'Select file to upload',
                secondary: true,
            }}
            onFilesSelect={handleFilesSelect}
        >
            {uploadFiles.map((file) => (
                <FileCard
                    key={file.fileId}
                    marginTop={4}
                    width={75}
                    onCancelButtonClick={handleFileCancel}
                    onDeleteButtonClick={handleFileDelete}
                    {...file}
                />
            ))}
        </FileUploader>
    );
};

export const WithResponsiveFileCard = () => {
    const {
        uploadFiles,
        handleFilesSelect,
        handleFileCancel,
        handleFileDelete,
    } = useFakeUploadHook(defaultFileList);

    return (
        <FileUploader
            title="Upload File"
            description={
                <>
                    A clear description including the supported file types,
                    maximum file size and if necessary a{' '}
                    <Link>sample file</Link> link.
                </>
            }
            onFilesSelect={handleFilesSelect}
        >
            {uploadFiles.map((file) => (
                <FileCard
                    key={file.fileId}
                    marginTop={4}
                    width="50%"
                    onCancelButtonClick={handleFileCancel}
                    onDeleteButtonClick={handleFileDelete}
                    {...file}
                />
            ))}
        </FileUploader>
    );
};

export const SingleUpload = () => {
    const {
        uploadFiles,
        handleFilesSelect,
        handleFileCancel,
        handleFileDelete,
    } = useFakeUploadHook();

    return (
        <FileUploader
            title="Upload File"
            description={
                <>
                    A clear description including the supported file types,
                    maximum file size and if necessary a{' '}
                    <Link>sample file</Link> link.
                </>
            }
            onFilesSelect={handleFilesSelect}
        >
            {uploadFiles.map((file) => (
                <FileCard
                    key={file.fileId}
                    marginTop={4}
                    width={75}
                    onCancelButtonClick={handleFileCancel}
                    onDeleteButtonClick={handleFileDelete}
                    {...file}
                />
            ))}
        </FileUploader>
    );
};

export const MultipleUploads = () => {
    const {
        uploadFiles,
        handleFilesSelect,
        handleFileCancel,
        handleFileDelete,
    } = useFakeUploadHook();

    return (
        <FileUploader
            title="Upload File"
            description={
                <>
                    A clear description including the supported file types,
                    maximum file size and if necessary a{' '}
                    <Link>sample file</Link> link.
                </>
            }
            uploadButtonParams={{ multiple: true }}
            onFilesSelect={handleFilesSelect}
        >
            {uploadFiles.map((file) => (
                <FileCard
                    key={file.fileId}
                    marginTop={4}
                    width={75}
                    onCancelButtonClick={handleFileCancel}
                    onDeleteButtonClick={handleFileDelete}
                    {...file}
                />
            ))}
        </FileUploader>
    );
};

export const UploadError = () => {
    const [uploadFiles, setUploadFiles] = useState<FileCardPropsType[]>([]);

    const handleFilesSelect = (selectedFiles: File[]) => {
        const selectedFile = selectedFiles[0];

        const newFileId = generateId();
        setUploadFiles((files) => [
            ...files,
            {
                fileId: newFileId,
                fileName: selectedFile.name,
                fileSize: selectedFile.size,
                error: true,
                errorMessage: 'Upload failed, please try again',
            },
        ]);
    };

    const handleFileDelete = (fileId: string) => {
        const text = 'Are you sure you want to delete this file?';
        // eslint-disable-next-line no-alert, no-restricted-globals
        if (confirm(text) === true) {
            setUploadFiles((files) =>
                files.filter((file) => file.fileId !== fileId),
            );
        }
    };

    return (
        <FileUploader
            title="Upload File"
            description={
                <>
                    A clear description including the supported file types,
                    maximum file size and if necessary a{' '}
                    <Link>sample file</Link> link.
                </>
            }
            onFilesSelect={handleFilesSelect}
        >
            {uploadFiles.map((file) => (
                <FileCard
                    key={file.fileId}
                    marginTop={4}
                    width={75}
                    onDeleteButtonClick={handleFileDelete}
                    {...file}
                />
            ))}
        </FileUploader>
    );
};
