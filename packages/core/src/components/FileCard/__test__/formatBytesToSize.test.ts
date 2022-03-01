import { formatBytesToSize } from '../utils';

describe('formatBytesToSize', () => {
    const data = [
        [0, '0 Bytes'],
        [213, '213 Bytes'],
        [1234, '1.21 KB'],
        [443421, '433.03 KB'],
        [443423421, '422.88 MB'],
        [443423434421, '412.97 GB'],
    ];

    it.each(data)(
        'should return correct size for %s bytes',
        (input, expected) => {
            expect(formatBytesToSize(input as number)).toBe(expected);
        },
    );
});
