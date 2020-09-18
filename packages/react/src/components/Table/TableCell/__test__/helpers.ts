import { makeTheme } from '../../../../styling';

export const customTheme = makeTheme({
    components: {
        TableCell: {
            Root: {
                base: {
                    borderWidth: '2px',
                },
            },
        },
    },
});
