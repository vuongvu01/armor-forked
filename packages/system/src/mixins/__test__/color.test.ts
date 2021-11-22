import { color } from '../color';
import { makeTheme } from '../../theme';

const theme = makeTheme();

describe('color', () => {
    it('should replace unprefixed color', async () => {
        expect(color('primary.main')({ theme })).toEqual(
            theme.armor.color.primary.main,
        );
    });

    it('should not replace color constants', async () => {
        expect(color('#abcdef')({ theme })).toEqual('#abcdef');
        expect(color('orange')({ theme })).toEqual('orange');
    });
});
