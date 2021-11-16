import { makeTheme } from '@deliveryhero/armor-system';

export const customTheme = makeTheme({
    armor: {
        components: {
            TableAction: {
                Root: {
                    base: {
                        borderWidth: '2px',
                    },
                },
            },
        },
    },
});
