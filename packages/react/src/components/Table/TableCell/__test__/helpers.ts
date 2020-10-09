import { makeTheme } from '../../../../styling';

export const customTheme = makeTheme({
    armor: {
        components: {
            TableCell: {
                Root: {
                    base: {
                        borderWidth: '2px',
                    },
                },
            },
        },
    },
});
