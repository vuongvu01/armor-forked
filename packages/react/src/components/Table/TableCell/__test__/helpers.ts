import { makeTheme } from '../../../../styling';

export const customTheme = makeTheme({
    armor: {
        components: {
            TableCell: {
                borderWidth: '2px',
            },
        },
    },
});
