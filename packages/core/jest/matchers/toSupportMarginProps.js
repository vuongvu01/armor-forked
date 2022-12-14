const React = require('react');
const { SPACING_FACTOR } = require('@deliveryhero/armor-system');

const { renderJSON } = require('../../src/helpers/renderJSON');

const UNNATURAL_VALUE = 999;

expect.extend({
    toSupportMarginProps(Component) {
        let tree = renderJSON(Component, {
            marginTop: UNNATURAL_VALUE,
            marginBottom: UNNATURAL_VALUE,
            marginLeft: UNNATURAL_VALUE,
            marginRight: UNNATURAL_VALUE,
        });
        expect(tree).toHaveStyleRule(
            'margin-top',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'margin-bottom',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'margin-left',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'margin-right',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );

        tree = renderJSON(Component, {
            marginX: UNNATURAL_VALUE,
            marginY: UNNATURAL_VALUE,
        });
        expect(tree).toHaveStyleRule(
            'margin-top',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'margin-bottom',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'margin-left',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'margin-right',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );

        tree = renderJSON(Component, {
            margin: UNNATURAL_VALUE,
        });
        expect(tree).toHaveStyleRule(
            'margin',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );

        return {
            pass: true,
            message: () => '',
        };
    },
});
