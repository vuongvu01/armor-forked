import { typography } from '../typography';
import { makeTheme } from '../../theme';

const theme = makeTheme();

describe('typography', () => {
    it('should return typography object', async () => {
        expect(typography('paragraphLarge')({ theme })).toMatchObject({
            fontFamily: 'Roboto,sans-serif',
            fontSize: '1rem',
            fontWeight: 400,
            letterSpacing: 0.2,
            lineHeight: '1.5rem',
        });
    });
});
