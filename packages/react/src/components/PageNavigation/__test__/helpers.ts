import { makeTheme } from '../../../styling';

export const customTheme = makeTheme({
    components: {
        PageNavigation: {
            Root: {
                base: {
                    borderWidth: '2px',
                },
            },
        },
    },
});
