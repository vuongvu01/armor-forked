import { colorProps } from '../color';
import { makeTheme } from '../../theme';

const theme = makeTheme();

describe('color', () => {
    it('should replace prefixed color', async () => {
        const res = colorProps({
            theme: theme.armor,
            color: '$color.primary.main',
        });
        expect(
            res.toString().indexOf(`color: ${theme.armor.color.primary.main};`),
        ).toBeGreaterThanOrEqual(0);
    });

    it('should replace unprefixed color', async () => {
        const res = colorProps({
            theme: theme.armor,
            color: 'primary.main',
        });
        expect(
            res.toString().indexOf(`color: ${theme.armor.color.primary.main};`),
        ).toBeGreaterThanOrEqual(0);
    });

    it('should not replace color constants', async () => {
        let res = colorProps({ theme: theme.armor, color: '#abcdef' });
        expect(
            res.toString().indexOf('color: #abcdef;'),
        ).toBeGreaterThanOrEqual(0);

        res = colorProps({ theme: theme.armor, color: 'orange' });
        expect(res.toString().indexOf('color: orange;')).toBeGreaterThanOrEqual(
            0,
        );
    });
});
