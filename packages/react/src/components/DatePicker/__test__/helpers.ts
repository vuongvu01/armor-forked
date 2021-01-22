import { makeTheme } from '../../../styling';

export const customTheme = makeTheme({
    armor: {
        components: {
            DatePicker: {
                borderWidth: '2px',
            },
        },
    },
});
