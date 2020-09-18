import { makeTheme } from '../../../../styling';

export const customTheme = makeTheme({
    components: {
        TableBody: {
            Root: {
                base: {
                    borderWidth: '2px',
                },
            },
        },
    },
});
