import { makeTheme } from '@deliveryhero/armor-system';

export const customTheme = makeTheme({
    armor: {
        components: {
            TableRow: {
                borderWidth: '2px',
            },
        },
    },
});
