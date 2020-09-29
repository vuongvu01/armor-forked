import { makeTheme } from '../../../../styling';

export const customTheme = makeTheme({
    components: {
        TableHeadCell: {
            Root: {
                base: {
                    borderWidth: '2px',
                },
            },
        },
    },
});
