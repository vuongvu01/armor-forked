import { makeTheme } from '../../../../styling';

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
