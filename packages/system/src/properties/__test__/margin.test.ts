import { marginProps } from '../margin';
import { makeTheme } from '../../theme';

const theme = makeTheme();

describe('margin', () => {
    it('should replace margin', async () => {
        const res = marginProps({
            theme: theme.armor,
            margin: 2,
        });
        expect(res.toString().indexOf(`margin: 8px;`)).toBeGreaterThanOrEqual(
            0,
        );
    });

    it('should replace margin top, bottom, left, right', async () => {
        const res = marginProps({
            theme: theme.armor,
            marginTop: 2,
            marginBottom: 3,
            marginLeft: 4,
            marginRight: 5,
        });
        expect(
            res.toString().indexOf(`margin-top: 8px;`),
        ).toBeGreaterThanOrEqual(0);
        expect(
            res.toString().indexOf(`margin-bottom: 12px;`),
        ).toBeGreaterThanOrEqual(0);
        expect(
            res.toString().indexOf(`margin-left: 16px;`),
        ).toBeGreaterThanOrEqual(0);
        expect(
            res.toString().indexOf(`margin-right: 20px;`),
        ).toBeGreaterThanOrEqual(0);
    });

    it('should replace margin x, y', async () => {
        const res = marginProps({
            theme: theme.armor,
            marginX: 2,
            marginY: 3,
        });
        expect(
            res.toString().indexOf(`margin-top: 12px; margin-bottom: 12px;`),
        ).toBeGreaterThanOrEqual(0);
        expect(
            res.toString().indexOf(`margin-right: 8px; margin-left: 8px;`),
        ).toBeGreaterThanOrEqual(0);
    });
});
