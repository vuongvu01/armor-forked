import { makeTheme } from '@deliveryhero/armor-system';

export const customTheme = makeTheme({
    armor: {
        components: {
            TableCell: {
                borderWidth: '2px',
            },
        },
    },
});
