import { makeTheme } from '../../../styling';

export const customTheme = makeTheme({
    armor: {
        components: {
            IconButton: {
                borderWidth: '2px',
            },
        },
    },
});
