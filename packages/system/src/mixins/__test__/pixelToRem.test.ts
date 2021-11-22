import { pixelToRem } from '../pixelToRem';
import { makeTheme } from '../../theme';

const theme = makeTheme();

describe('pixelToRem', () => {
    it('should covert numbers to rems', async () => {
        expect(pixelToRem(16)({ theme })).toEqual('1rem');
        expect(pixelToRem(14)({ theme })).toEqual('0.875rem');
        expect(pixelToRem(12)({ theme })).toEqual('0.75rem');
    });
});
