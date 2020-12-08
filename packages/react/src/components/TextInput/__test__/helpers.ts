import { makeTheme } from '../../../styling';

export const customTheme = makeTheme({
    armor: {
        components: {
            TextField: {
                borderWidth: '2px',
            },
        },
    },
});
