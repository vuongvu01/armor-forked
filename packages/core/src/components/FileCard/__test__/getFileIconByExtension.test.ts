import { getFileIconByExtension } from '../utils';
import {
    FileTextIcon,
    FileImageIcon,
    FilePDFIcon,
    FileCSVIcon,
} from '../style';

describe('getFileIconByExtension', () => {
    const data = [
        ['', FileTextIcon],
        ['other-extension', FileTextIcon],
        ['csv', FileCSVIcon],
        ['pdf', FilePDFIcon],
        ['gif', FileImageIcon],
        ['jpg', FileImageIcon],
        ['jpeg', FileImageIcon],
        ['png', FileImageIcon],
        ['svg', FileImageIcon],
        ['webp', FileImageIcon],
        ['bmp', FileImageIcon],
        ['ico', FileImageIcon],
        ['CSV', FileCSVIcon],
        ['PDF', FilePDFIcon],
        ['GIF', FileImageIcon],
        ['JPG', FileImageIcon],
        ['JPEG', FileImageIcon],
        ['PNG', FileImageIcon],
        ['SVG', FileImageIcon],
        ['WEBP', FileImageIcon],
        ['ICO', FileImageIcon],
    ];

    it.each(data)(
        'should return correct file icon for %s extension',
        (input, expected) => {
            expect(getFileIconByExtension(input)).toBe(expected);
        },
    );
});
