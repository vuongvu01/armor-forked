const React = require('react');

const { renderJSON } = require('../../src/helpers/renderJSON');
const {
    defaultThemeDeclaration,
} = require('../../src/styling/themes/defaultThemeDeclaration');

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
            defaultThemeDeclaration.color.primary.main,
        );
        expect(tree).toHaveStyleRule(
            'color',
            defaultThemeDeclaration.color.neutral['02'],
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
