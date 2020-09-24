import { makeTheme } from '../../../../styling';

export const customTheme = makeTheme({
    components: {
        TableAction: {
            Root: {
                base: {
                    borderWidth: '2px',
                },
            },
        },
    },
});
