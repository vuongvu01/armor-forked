import { makeTheme } from '../../../styling';
import { transition } from '../transition';

const theme = makeTheme();

describe('transition mixin', () => {
    it('should add css transition', async () => {
        expect(
            transition({ color: true, 'background-color': true })({
                theme,
                expanded: true,
            }),
        ).toEqual('transition: color 0.2s ease,background-color 0.2s ease;');
    });
});
