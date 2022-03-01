import React from 'react';
import { FileCard } from '@deliveryhero/armor';

export default {
    title: 'FileCard',
    component: FileCard,
};

export const Basic = () => {
    return (
        <FileCard
            fileName="Lorem_ipsum_dolor_sit_amet.txt"
            fileSize={10491049}
        />
    );
};

export const UploadingState = () => {
    return (
        <FileCard
            fileName="Lorem_ipsum_dolor_sit_amet.png"
            fileSize={10491049}
            uploadProgress={42}
        />
    );
};

export const ErrorState = () => {
    return (
        <FileCard
            fileName="Lorem_ipsum_dolor_sit_amet.csv"
            fileSize={10491049}
            error
        />
    );
};

export const ErrorStateWithMessage = () => {
    return (
        <FileCard
            fileName="Lorem_ipsum_dolor_sit_amet.pdf"
            fileSize={10491049}
            error
            errorMessage="File upload failed"
        />
    );
};

export const UploadImageInProgress = () => {
    return (
        <FileCard
            fileName="Lorem_ipsum_dolor_sit_amet.png"
            fileSize={10491049}
            uploadProgress={44}
            imageSrc="https://via.placeholder.com/300.png/09f/fffC/O%20https://placeholder.com/"
        />
    );
};
