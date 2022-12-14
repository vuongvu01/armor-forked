import { makeTheme } from '@deliveryhero/armor-system';

export const customTheme = makeTheme({
    armor: {
        components: {
            EditableTableCell: {
                Root: {
                    base: {
                        borderWidth: '2px',
                    },
                },
            },
        },
    },
});
