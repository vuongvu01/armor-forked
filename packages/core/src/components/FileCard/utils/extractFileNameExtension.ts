const reg = /(.*)\.(\w+)$/;

export function extractFileNameExtension(fullName = '') {
    const [, fileName = fullName, fileExtension = ''] =
        reg.exec(fullName) || [];
    return { fileName, fileExtension };
}
