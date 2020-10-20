import { makeTheme } from '../../../styling';

export const customTheme = makeTheme({
    armor: {
        components: {
            PageNavigation: {
                Root: {
                    base: {
                        borderWidth: '2px',
                    },
                },
            },
        },
    },
});
