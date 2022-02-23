import { getFileNamesWithEllipsisSplit } from '../utils';

describe('getFileNamesWithEllipsisSplit', () => {
    it('should split file name into two parts', () => {
        const fileName = 'abcdef';
        const extension = 'png';

        const { nameFirstPart, nameLastPart } = getFileNamesWithEllipsisSplit(
            fileName,
            extension,
        );

        expect(nameFirstPart).toBe('abc');
        expect(nameLastPart).toBe('def.png');
    });

    it('should not split when file name is short', () => {
        const shortFileName = 'abc';
        const extension = 'png';

        const { nameFirstPart, nameLastPart } = getFileNamesWithEllipsisSplit(
            shortFileName,
            extension,
        );

        expect(nameFirstPart).toBe('abc');
        expect(nameLastPart).toBe('.png');
    });
});
