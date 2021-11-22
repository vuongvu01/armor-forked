import { makeTheme } from '@deliveryhero/armor-system';

export const customTheme = makeTheme({
    armor: {
        components: {
            TableControllerCell: {
                borderWidth: '2px',
            },
        },
    },
});
