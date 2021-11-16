import { paddingProps } from '../padding';
import { makeTheme } from '../../theme';

const theme = makeTheme();

describe('padding', () => {
    it('should replace padding', async () => {
        const res = paddingProps({
            theme: theme.armor,
            padding: 2,
        });
        expect(res.toString().indexOf(`padding: 8px;`)).toBeGreaterThanOrEqual(
            0,
        );
    });

    it('should replace padding top, bottom, left, right', async () => {
        const res = paddingProps({
            theme: theme.armor,
            paddingTop: 2,
            paddingBottom: 3,
            paddingLeft: 4,
            paddingRight: 5,
        });
        expect(
            res.toString().indexOf(`padding-top: 8px;`),
        ).toBeGreaterThanOrEqual(0);
        expect(
            res.toString().indexOf(`padding-bottom: 12px;`),
        ).toBeGreaterThanOrEqual(0);
        expect(
            res.toString().indexOf(`padding-left: 16px;`),
        ).toBeGreaterThanOrEqual(0);
        expect(
            res.toString().indexOf(`padding-right: 20px;`),
        ).toBeGreaterThanOrEqual(0);
    });

    it('should replace padding x, y', async () => {
        const res = paddingProps({
            theme: theme.armor,
            paddingX: 2,
            paddingY: 3,
        });
        expect(
            res.toString().indexOf(`padding-top: 12px; padding-bottom: 12px;`),
        ).toBeGreaterThanOrEqual(0);
        expect(
            res.toString().indexOf(`padding-right: 8px; padding-left: 8px;`),
        ).toBeGreaterThanOrEqual(0);
    });
});
