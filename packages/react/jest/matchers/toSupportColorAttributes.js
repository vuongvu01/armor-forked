const React = require('react');

const { renderJSON } = require('../../src/helpers/renderJSON');
const {
    defaultThemeStructure,
} = require('../../src/styling/defaultThemeStructure');

expect.extend({
    toSupportColorAttributes(Component) {
        const colorA = '#aabbcc';
        const colorB = '#ccbbaa';

        let tree = renderJSON(Component, {
            color: colorA,
            hoverColor: colorB,
        });
        expect(tree).toHaveStyleRule('color', colorA);
        expect(tree).toHaveStyleRule('color', colorB, {
            modifier: ':hover',
        });

        tree = renderJSON(Component, {
            color: '$color.primary.main',
            hoverColor: '$color.neutral.02',
        });
        expect(tree).toHaveStyleRule(
            'color',
            defaultThemeStructure.color.primary.main,
        );
        expect(tree).toHaveStyleRule(
            'color',
            defaultThemeStructure.color.neutral['02'],
            {
                modifier: ':hover',
            },
        );

        return {
            pass: true,
            message: () => '',
        };
    },
});
