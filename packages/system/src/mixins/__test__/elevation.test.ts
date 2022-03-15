import { elevation } from '../elevation';
import { makeDefaultTheme, makeTheme } from '../../theme';

const theme = makeTheme();
const defaultTheme = makeDefaultTheme();

describe('elevation', () => {
    it('should replace elevation token', async () => {
        expect(elevation('small')({ theme })).toEqual(
            theme.armor.elevation.small,
        );
    });

    it('should replace elevation token if theme is null', async () => {
        expect(elevation('small')({ theme: null })).toEqual(
            defaultTheme.armor.elevation.small,
        );
    });

    it('should replace elevation token if theme is undefined', async () => {
        expect(elevation('small')({ theme: undefined })).toEqual(
            defaultTheme.armor.elevation.small,
        );
    });
});
