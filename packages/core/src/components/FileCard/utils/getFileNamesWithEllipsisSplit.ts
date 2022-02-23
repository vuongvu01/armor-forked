import { FILECARD_NAME_ELLIPSIS_POINT } from '../constants';

export const getFileNamesWithEllipsisSplit = (
    fileName: string,
    fileExtension: string,
) => {
    if (fileName.length > FILECARD_NAME_ELLIPSIS_POINT) {
        const splitIndex = fileName.length - FILECARD_NAME_ELLIPSIS_POINT;
        const nameFirstPart = fileName.substring(0, splitIndex);
        const nameLastPart = fileName.slice(splitIndex);

        return {
            nameFirstPart,
            nameLastPart: `${nameLastPart}.${fileExtension}`,
        };
    }

    return { nameFirstPart: fileName, nameLastPart: `.${fileExtension}` };
};
