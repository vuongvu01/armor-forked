const React = require('react');
const { SPACING_FACTOR } = require('@deliveryhero/armor-system');

const { renderJSON } = require('../../src/helpers/renderJSON');

const UNNATURAL_VALUE = 999;

expect.extend({
    toSupportPaddingAttributes(Component) {
        let tree = renderJSON(Component, {
            paddingTop: UNNATURAL_VALUE,
            paddingBottom: UNNATURAL_VALUE,
            paddingLeft: UNNATURAL_VALUE,
            paddingRight: UNNATURAL_VALUE,
        });
        expect(tree).toHaveStyleRule(
            'padding-top',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'padding-bottom',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'padding-left',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'padding-right',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );

        tree = renderJSON(Component, {
            paddingX: UNNATURAL_VALUE,
            paddingY: UNNATURAL_VALUE,
        });
        expect(tree).toHaveStyleRule(
            'padding-top',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'padding-bottom',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'padding-left',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'padding-right',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );

        tree = renderJSON(Component, {
            padding: UNNATURAL_VALUE,
        });
        expect(tree).toHaveStyleRule(
            'padding',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );

        return {
            pass: true,
            message: () => '',
        };
    },
});
