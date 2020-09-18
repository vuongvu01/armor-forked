import { makeTheme } from '../../../../styling';

export const customTheme = makeTheme({
    components: {
        EditableTableCell: {
            Root: {
                base: {
                    borderWidth: '2px',
                },
            },
        },
    },
});
