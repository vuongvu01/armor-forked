import { borderRadius } from '../borderRadius';
import { makeDefaultTheme, makeTheme } from '../../theme';

const theme = makeTheme();
const defaultTheme = makeDefaultTheme();

describe('borderRadius', () => {
    it('should replace border radius token', async () => {
        expect(borderRadius('sharp')({ theme })).toEqual(
            theme.armor.shape.borderRadius.sharp,
        );
    });

    it('should replace border radius token if theme is null', async () => {
        expect(borderRadius('sharp')({ theme: null })).toEqual(
            defaultTheme.armor.shape.borderRadius.sharp,
        );
    });

    it('should replace border radius token if theme is undefined', async () => {
        expect(borderRadius('sharp')({ theme: undefined })).toEqual(
            defaultTheme.armor.shape.borderRadius.sharp,
        );
    });
});
