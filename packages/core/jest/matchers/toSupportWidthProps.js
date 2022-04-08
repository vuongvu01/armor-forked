const React = require('react');
const { SPACING_FACTOR } = require('@deliveryhero/armor-system');

const { renderJSON, renderJSONAlt } = require('../../src/helpers/renderJSON');

const UNNATURAL_VALUE = 999;

expect.extend({
    /**
     * @deprecated
     */
    toSupportWidthProps(Component) {
        let tree = renderJSON(Component, {
            width: UNNATURAL_VALUE,
            maxWidth: UNNATURAL_VALUE,
            minWidth: UNNATURAL_VALUE,
        });
        expect(tree).toHaveStyleRule(
            'width',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'max-width',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'min-width',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );

        tree = renderJSON(Component, {
            wide: true,
        });
        expect(tree).toHaveStyleRule('width', '100%');

        return {
            pass: true,
            message: () => '',
        };
    },

    toSupportWidthPropsAlt(Element, filterProps) {
        let tree = renderJSONAlt(
            React.cloneElement(Element, {
                width: UNNATURAL_VALUE,
                maxWidth: UNNATURAL_VALUE,
                minWidth: UNNATURAL_VALUE,
            }),
            filterProps,
        );
        expect(tree).toHaveStyleRule(
            'width',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'max-width',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );
        expect(tree).toHaveStyleRule(
            'min-width',
            `${SPACING_FACTOR * UNNATURAL_VALUE}px`,
        );

        tree = renderJSONAlt(
            React.cloneElement(Element, {
                wide: true,
            }),
            filterProps,
        );
        expect(tree).toHaveStyleRule('width', '100%');

        return {
            pass: true,
            message: () => '',
        };
    },
});
