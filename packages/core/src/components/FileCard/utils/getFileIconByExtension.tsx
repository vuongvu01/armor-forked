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
    if (extension === 'csv') {
        return FileCSVIcon;
    }
    if (extension === 'pdf') {
        return FilePDFIcon;
    }
    if (FileImageExtensions.includes(extension)) {
        return FileImageIcon;
    }
    return FileTextIcon;
};
