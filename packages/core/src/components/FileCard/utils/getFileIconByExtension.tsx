import {
    FileTextIcon,
    FileImageIcon,
    FilePDFIcon,
    FileCSVIcon,
} from '../style';

const FileImageExtensions = [
    'gif',
    'jpg',
    'jpeg',
    'jfif',
    'pjpeg',
    'pjp',
    'png',
    'svg',
    'webp',
    'bmp',
    'ico',
    'cur',
    'tif',
    'tiff',
];

export const getFileIconByExtension = (extension = '') => {
    const extensionLowerCase = extension.toLowerCase();

    if (extensionLowerCase === 'csv') {
        return FileCSVIcon;
    }
    if (extensionLowerCase === 'pdf') {
        return FilePDFIcon;
    }
    if (FileImageExtensions.includes(extensionLowerCase)) {
        return FileImageIcon;
    }
    return FileTextIcon;
};
