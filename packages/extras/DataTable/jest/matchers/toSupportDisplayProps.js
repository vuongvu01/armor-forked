const { renderJSON } = require('../../src/helpers/renderJSON');

expect.extend({
    toSupportDisplayProps(Component) {
        const tree = renderJSON(Component, {
            display: 'inline-block',
        });
        expect(tree).toHaveStyleRule('display', 'inline-block');

        return {
            pass: true,
            message: () => '',
        };
    },
});
