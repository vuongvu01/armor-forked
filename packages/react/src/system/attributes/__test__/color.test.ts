import { colorAttributes } from '../color';
import { makeTheme } from '../../../styling';

const theme = makeTheme();

describe('color attribute', () => {
    it('should replace prefixed color', async () => {
        const res = colorAttributes({
            theme: theme.armor,
            color: '$color.primary.main',
        });
        expect(
            res.join('').indexOf(`color: ${theme.armor.color.primary.main};`),
        ).toBeGreaterThanOrEqual(0);
    });

    it('should replace unprefixed color', async () => {
        const res = colorAttributes({
            theme: theme.armor,
            color: 'primary.main',
        });
        expect(
            res.join('').indexOf(`color: ${theme.armor.color.primary.main};`),
        ).toBeGreaterThanOrEqual(0);
    });

    it('should not replace color constants', async () => {
        let res = colorAttributes({ theme: theme.armor, color: '#abcdef' });
        expect(res.join('').indexOf('color: #abcdef;')).toBeGreaterThanOrEqual(
            0,
        );

        res = colorAttributes({ theme: theme.armor, color: 'orange' });
        expect(res.join('').indexOf('color: orange;')).toBeGreaterThanOrEqual(
            0,
        );
    });
});
