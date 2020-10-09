import { makeTheme } from '../../../styling';

export const customTheme = makeTheme({
    armor: {
        components: {
            Table: {
                Root: {
                    base: {
                        borderWidth: '2px',
                    },
                },
            },
        },
    },
});
