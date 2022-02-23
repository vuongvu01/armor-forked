import { extractFileNameExtension } from '../utils';

describe('extractFileNameExtension', () => {
    it('should split file name into name and extension', () => {
        const fileNameFull = 'abcdef.png';

        const { fileName, fileExtension } =
            extractFileNameExtension(fileNameFull);

        expect(fileName).toBe('abcdef');
        expect(fileExtension).toBe('png');
    });
});
