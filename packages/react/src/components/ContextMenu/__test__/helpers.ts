import { makeTheme } from '../../../styling';

export const customTheme = makeTheme({
    armor: {
        components: {
            ContextMenu: {
                borderWidth: '2px',
            },
        },
    },
});
