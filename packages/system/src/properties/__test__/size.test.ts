import { sizeProps } from '../size';
import { makeTheme } from '../../theme';

const theme = makeTheme();

describe('size', () => {
    it('should replace spacing units in width, minWidth, maxWidth', async () => {
        const res = sizeProps({
            theme: theme.armor,
            width: 10,
            minWidth: 20,
            maxWidth: 10,
        });
        expect(res.toString().indexOf(`width: 40px;`)).toBeGreaterThanOrEqual(
            0,
        );
        expect(
            res.toString().indexOf(`min-width: 80px;`),
        ).toBeGreaterThanOrEqual(0);
        expect(
            res.toString().indexOf(`max-width: 40px;`),
        ).toBeGreaterThanOrEqual(0);
    });

    it('should not replace string constants in width, minWidth, maxWidth', async () => {
        const res = sizeProps({
            theme: theme.armor,
            width: '10rem',
            minWidth: '20px',
            maxWidth: '5em',
        });
        expect(res.toString().indexOf(`width: 10rem;`)).toBeGreaterThanOrEqual(
            0,
        );
        expect(
            res.toString().indexOf(`min-width: 20px;`),
        ).toBeGreaterThanOrEqual(0);
        expect(
            res.toString().indexOf(`max-width: 5em;`),
        ).toBeGreaterThanOrEqual(0);
    });

    it('should replace spacing units in height, minHeight, maxHeight', async () => {
        const res = sizeProps({
            theme: theme.armor,
            height: 10,
            minHeight: 20,
            maxHeight: 10,
        });
        expect(res.toString().indexOf(`height: 40px;`)).toBeGreaterThanOrEqual(
            0,
        );
        expect(
            res.toString().indexOf(`min-height: 80px;`),
        ).toBeGreaterThanOrEqual(0);
        expect(
            res.toString().indexOf(`max-height: 40px;`),
        ).toBeGreaterThanOrEqual(0);
    });

    it('should not replace string constants in height, minHeight, maxHeight', async () => {
        const res = sizeProps({
            theme: theme.armor,
            height: '10rem',
            minHeight: '20px',
            maxHeight: '5em',
        });
        expect(res.toString().indexOf(`height: 10rem;`)).toBeGreaterThanOrEqual(
            0,
        );
        expect(
            res.toString().indexOf(`min-height: 20px;`),
        ).toBeGreaterThanOrEqual(0);
        expect(
            res.toString().indexOf(`max-height: 5em;`),
        ).toBeGreaterThanOrEqual(0);
    });

    it('should replace wide, tall', async () => {
        const res = sizeProps({
            theme: theme.armor,
            wide: true,
            tall: true,
        });
        expect(res.toString().indexOf(`width: 100%;`)).toBeGreaterThanOrEqual(
            0,
        );
        expect(res.toString().indexOf(`height: 100%;`)).toBeGreaterThanOrEqual(
            0,
        );
    });
});
