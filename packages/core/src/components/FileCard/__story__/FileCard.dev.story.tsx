/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import { withWrapper } from '../../../helpers/Wrapper';

import { FileCard } from '../FileCard';

export default {
    title: 'Components/FileCard',
    component: FileCard,
    decorators: [withWrapper],
    parameters: {},
};

const handleClickCancel = (id: string) => {
    console.log({ cancelId: id });
};

const handleClickDelete = (id: string) => {
    console.log({ deleteId: id });
};

export const Basic = () => {
    return (
        <FileCard
            fileId="file-01"
            onCancelButtonClick={handleClickCancel}
            onDeleteButtonClick={handleClickDelete}
            fileName="Lorem_ipsum_dolor_sit_amet.txt"
            fileSize={10491049}
        />
    );
};

export const UploadingState = () => {
    return (
        <FileCard
            fileId="file-01"
            onCancelButtonClick={handleClickCancel}
            onDeleteButtonClick={handleClickDelete}
            fileName="Lorem_ipsum_dolor_sit_amet.txt"
            fileSize={10491049}
            uploadProgress={42}
        />
    );
};

export const ErrorState = () => {
    return (
        <FileCard
            fileId="file-01"
            onCancelButtonClick={handleClickCancel}
            onDeleteButtonClick={handleClickDelete}
            fileName="Lorem_ipsum_dolor_sit_amet.txt"
            fileSize={10491049}
            error
        />
    );
};

export const ErrorStateWithMessage = () => {
    return (
        <FileCard
            fileId="file-01"
            onCancelButtonClick={handleClickCancel}
            onDeleteButtonClick={handleClickDelete}
            fileName="Lorem_ipsum_dolor_sit_amet.txt"
            fileSize={10491049}
            error
            errorMessage="File upload failed"
        />
    );
};

export const SeveralUploads = () => {
    return (
        <>
            <FileCard
                fileId="file-01"
                onCancelButtonClick={handleClickCancel}
                onDeleteButtonClick={handleClickDelete}
                fileName="Lorem_ipsum_dolor_sit_amet.png"
                fileSize={10491049}
            />
            <FileCard
                fileId="file-02"
                onCancelButtonClick={handleClickCancel}
                onDeleteButtonClick={handleClickDelete}
                fileName="Lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit.csv"
                fileSize={10491049}
            />
            <FileCard
                fileId="file-03"
                onCancelButtonClick={handleClickCancel}
                onDeleteButtonClick={handleClickDelete}
                fileName="Lorem_ipsum_dolor_sit_amet.pdf"
                fileSize={10491049}
                uploadProgress={59}
            />
            <FileCard
                fileId="file-04"
                onCancelButtonClick={handleClickCancel}
                onDeleteButtonClick={handleClickDelete}
                fileName="Lorem_ipsum_dolor_sit_amet.txt"
                fileSize={10491049}
                error
                errorMessage="File upload failed"
            />
        </>
    );
};

export const ImagePreview = () => {
    return (
        <FileCard
            fileId="file-01"
            onCancelButtonClick={handleClickCancel}
            onDeleteButtonClick={handleClickDelete}
            fileName="Lorem_ipsum_dolor_sit_amet.txt"
            fileSize={10491049}
            imageSrc="https://via.placeholder.com/300.png/09f/fffC/O%20https://placeholder.com/"
        />
    );
};
