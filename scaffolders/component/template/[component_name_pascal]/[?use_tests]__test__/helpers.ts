import { makeTheme } from '../../../styling';

export const customTheme = makeTheme({
    armor: {
        components: {
            <%- component_name_pascal %>: {
                borderWidth: '2px',
            },
        },
    },
});
