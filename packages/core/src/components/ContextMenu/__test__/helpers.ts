import { makeTheme } from '@deliveryhero/armor-system';

export const customTheme = makeTheme({
    armor: {
        components: {
            ContextMenu: {
                borderWidth: '2px',
            },
        },
    },
});
