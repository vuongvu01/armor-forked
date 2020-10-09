import { makeTheme } from '../../../../styling';

export const customTheme = makeTheme({
    armor: {
        components: {
            TableBody: {
                Root: {
                    base: {
                        borderWidth: '2px',
                    },
                },
            },
        },
    },
});
