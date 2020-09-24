import { makeTheme } from '../../../../styling';

export const customTheme = makeTheme({
    components: {
        TableHead: {
            Root: {
                base: {
                    borderWidth: '2px',
                },
            },
        },
    },
});
