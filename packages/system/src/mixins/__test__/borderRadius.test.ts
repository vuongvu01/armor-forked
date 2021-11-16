import { borderRadius } from '../borderRadius';
import { makeTheme } from '../../theme';

const theme = makeTheme();

describe('borderRadius', () => {
    it('should replace border radius token', async () => {
        expect(borderRadius('sharp')({ theme })).toEqual(
            theme.armor.shape.borderRadius.sharp,
        );
    });
});
