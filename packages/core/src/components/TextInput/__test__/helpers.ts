import { makeTheme } from '@deliveryhero/armor-system';

export const customTheme = makeTheme({
    armor: {
        components: {
            TextField: {
                borderWidth: '2px',
            },
        },
    },
});
