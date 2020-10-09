const React = require('react');

const { SPACING_FACTOR } = require('../../src/styling/defaultThemeStructure');
const { renderJSON } = require('../../src/helpers/renderJSON');

const UNNATURAL_VALUE = 999;

expect.extend({
    toSupportHeightAttributes(Component, id, wrapper) {
        let tree = renderJSON(
            Component,
            {
                height: UNNATURAL_VALUE,
                maxHeight: UNNATURAL_VALUE,
                minHeight: UNNATURAL_VALUE,
            },
            id,
            wrapper,
        );
        expect(tree).toHaveStyleRule(
            'height',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'max-height',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'min-height',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );

        tree = renderJSON(
            Component,
            {
                tall: true,
            },
            id,
            wrapper,
        );
        expect(tree).toHaveStyleRule('height', '100%');

        return {
            pass: true,
            message: () => '',
        };
    },
});
