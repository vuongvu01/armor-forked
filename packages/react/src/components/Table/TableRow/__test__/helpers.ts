import { makeTheme } from '../../../../styling';

export const customTheme = makeTheme({
    components: {
        TableRow: {
            Root: {
                base: {
                    borderWidth: '2px',
                },
            },
        },
    },
});
