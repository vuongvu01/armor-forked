import { makeTheme } from '../../../../styling';

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
