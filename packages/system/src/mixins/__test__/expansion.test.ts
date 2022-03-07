import { makeTheme } from '../../theme';
import { expansion } from '../expansion';

const theme = makeTheme();

describe('expansion', () => {
    it('should add transform if expanded is true', async () => {
        expect(expansion(45)({ theme, expanded: true })).toEqual(
            'transform: rotate(45deg);',
        );
    });
    it('should not add transform if expanded is false', async () => {
        expect(expansion(45)({ theme, expanded: false })).toEqual('');
    });
    it('should add transform if expanded is true and if theme is null', async () => {
        expect(expansion(45)({ theme: null, expanded: true })).toEqual(
            'transform: rotate(45deg);',
        );
    });
    it('should add transform if expanded is true and if theme is undefined', async () => {
        expect(expansion(45)({ theme: undefined, expanded: true })).toEqual(
            'transform: rotate(45deg);',
        );
    });
    it('should set degree by default', async () => {
        expect(expansion()({ theme, expanded: true })).toEqual(
            'transform: rotate(180deg);',
        );
    });
});
