const { renderJSON } = require('../../src/helpers/renderJSON');

expect.extend({
    toSupportTextAlignmentProps(Component) {
        const tree = renderJSON(Component, {
            textAlign: 'center',
        });
        expect(tree).toHaveStyleRule('text-align', 'center');

        return {
            pass: true,
            message: () => '',
        };
    },
});
