import { pixelToRemToken } from '../pixelToRemToken';
import { makeTheme } from '../../theme';

const theme = makeTheme();

describe('pixelToRemToken', () => {
    it('should covert tokens to rems', async () => {
        expect(pixelToRemToken('typography.body.fontSize')({ theme })).toEqual(
            '1rem',
        );
        expect(
            pixelToRemToken('typography.paragraphMedium.fontSize')({ theme }),
        ).toEqual('0.875rem');
        expect(
            pixelToRemToken('typography.labelSmall.fontSize')({ theme }),
        ).toEqual('0.75rem');
    });
});
