import { token } from '../token';
import { makeTheme } from '../../theme';

const theme = makeTheme();

describe('token', () => {
    it('should replace tokens', async () => {
        expect(token('color.primary.main')({ theme })).toEqual(
            theme.armor.color.primary.main,
        );
        expect(token('shape.borderRadius.sharp')({ theme })).toEqual(
            theme.armor.shape.borderRadius.sharp,
        );
    });
});
