import { spacing } from '../spacing';
import { makeTheme } from '../../theme';

const theme = makeTheme();

describe('spacing', () => {
    it('should convert spacing units to pixels', () => {
        expect(spacing(1)({ theme })).toEqual('4px');
        expect(spacing(2)({ theme })).toEqual('8px');
        expect(spacing(3)({ theme })).toEqual('12px');
    });

    it('should accept multiple arguments and convert spacing units to pixels', () => {
        expect(spacing(1, 2)({ theme })).toEqual('4px 8px');
        expect(spacing(1, 2, 3)({ theme })).toEqual('4px 8px 12px');
        expect(spacing(1, 2, 3, 4)({ theme })).toEqual('4px 8px 12px 16px');
    });

    it('should accept 0 values but do not transform them to pixel units', () => {
        expect(spacing(0)({ theme })).toEqual('0');
        expect(spacing(1, 0)({ theme })).toEqual('4px 0');
        expect(spacing(1, 0, 2)({ theme })).toEqual('4px 0 8px');
    });
});
