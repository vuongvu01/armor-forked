import { makeTheme } from '../../../../styling';

export const customTheme = makeTheme({
    components: {
        TableFoot: {
            Root: {
                base: {
                    borderWidth: '2px',
                },
            },
        },
    },
});
