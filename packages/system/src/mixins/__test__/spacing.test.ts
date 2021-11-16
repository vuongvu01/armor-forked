import { spacing } from '../spacing';
import { makeTheme } from '../../theme';

const theme = makeTheme();

describe('spacing', () => {
    it('should covert spacing units to pixels', async () => {
        expect(spacing(1)({ theme })).toEqual('4px');
        expect(spacing(2)({ theme })).toEqual('8px');
        expect(spacing(3)({ theme })).toEqual('12px');
    });
});
