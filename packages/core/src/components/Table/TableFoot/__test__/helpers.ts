import { makeTheme } from '@deliveryhero/armor-system';

export const customTheme = makeTheme({
    armor: {
        components: {
            TableFoot: {
                Root: {
                    base: {
                        borderWidth: '2px',
                    },
                },
            },
        },
    },
});
