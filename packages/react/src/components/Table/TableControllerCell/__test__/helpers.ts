import { makeTheme } from '../../../../styling';

export const customTheme = makeTheme({
    armor: {
        components: {
            TableControllerCell: {
                borderWidth: '2px',
            },
        },
    },
});