const React = require('react');
const { SPACING_FACTOR } = require('@deliveryhero/armor-system');

const { renderJSON, renderJSONAlt } = require('../../src/helpers/renderJSON');

const UNNATURAL_VALUE = 999;

expect.extend({
    toSupportHeightProps(Component, id, wrapper) {
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

    toSupportHeightPropsAlt(Element, filterProps) {
        let tree = renderJSONAlt(
            React.cloneElement(Element, {
                height: UNNATURAL_VALUE,
                maxHeight: UNNATURAL_VALUE,
                minHeight: UNNATURAL_VALUE,
            }),
            filterProps,
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

        tree = renderJSONAlt(
            React.cloneElement(Element, {
                tall: true,
            }),
            filterProps,
        );
        expect(tree).toHaveStyleRule('height', '100%');

        return {
            pass: true,
            message: () => '',
        };
    },
});
