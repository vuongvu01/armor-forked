import { elevation } from '../elevation';
import { makeTheme } from '../../theme';

const theme = makeTheme();

describe('elevation', () => {
    it('should replace elevation token', async () => {
        expect(elevation('small')({ theme })).toEqual(
            theme.armor.elevation.small,
        );
    });
});
