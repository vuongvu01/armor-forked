import { makeTheme } from '../../../styling';

export const customTheme = makeTheme({
    components: {
        Table: {
            Root: {
                base: {
                    borderWidth: '2px',
                },
            },
        },
    },
});
