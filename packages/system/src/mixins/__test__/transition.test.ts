import { transition } from '../transition';

describe('transition', () => {
    it('should add css transition', async () => {
        expect(
            transition({
                color: true,
                'background-color': true,
            })(),
        ).toEqual('transition: color 200ms ease,background-color 200ms ease;');
    });
});
