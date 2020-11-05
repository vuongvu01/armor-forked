import { makeTheme } from '../../../styling';

export const customTheme = makeTheme({
    armor: {
        components: {
            Menu: {
                Root: {
                    base: {
                        borderWidth: '2px',
                    },
                },
            },
        },
    },
});
