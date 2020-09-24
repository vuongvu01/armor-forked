import { replaceThemeToken } from '../replaceThemeToken';
import { makeTheme } from '../../../styling';

const theme = makeTheme({});

describe('replaceThemeToken', () => {
    it('should replace a L2 token', async () => {
        const result = replaceThemeToken('$typography.body.fontFamily', theme);
        expect(result).toMatchObject({ updated: true, value: 'Roboto' });
    });

    it('should not replace anything non-token-ish', async () => {
        let result = replaceThemeToken('12px', theme);
        expect(result).toMatchObject({ updated: false, value: '12px' });

        result = replaceThemeToken(12, theme);
        expect(result).toMatchObject({ updated: false, value: 12 });
    });

    it('should warn about missing L2 tokens', async () => {
        const { warn } = global.console;
        global.console.warn = jest.fn();

        const result = replaceThemeToken('$typography.shoe.fontFamily', theme);
        expect(result).toMatchObject({
            updated: false,
            value: '$typography.shoe.fontFamily',
        });

        expect(global.console.warn).toHaveBeenCalled();
        // @ts-ignore
        const call = global.console.warn.mock.calls;
        expect(
            call[0][0].indexOf(
                'Was not able to replace placeholder "$typography.shoe.fontFamily"',
            ) > 0,
        ).toBeTruthy();

        global.console.warn = warn;
    });
});
