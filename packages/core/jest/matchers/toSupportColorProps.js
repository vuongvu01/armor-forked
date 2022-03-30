const React = require('react');
const { makeTheme } = require('@deliveryhero/armor-system');

const { renderJSON } = require('../../src/helpers/renderJSON');

const theme = makeTheme().armor;

expect.extend({
    toSupportColorProps(Component) {
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
        expect(tree).toHaveStyleRule('color', theme.color.primary.main);
        expect(tree).toHaveStyleRule('color', theme.color.neutral['02'], {
            modifier: ':hover',
        });

        return {
            pass: true,
            message: () => '',
        };
    },
});
