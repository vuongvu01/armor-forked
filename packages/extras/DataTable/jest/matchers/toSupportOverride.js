// eslint-disable-next-line import/no-extraneous-dependencies
const React = require('react');
const { css } = require('styled-components');
const { ThemeProvider, makeTheme } = require('@deliveryhero/armor-system');
const renderer = require('react-test-renderer');

expect.extend({
    toSupportOverride(Element, componentName, extractNode = null) {
        let tree = renderer.create(Element).toJSON();
        if (extractNode) {
            tree = extractNode(tree);
        }

        // @ts-ignore
        expect(tree).not.toHaveStyleRule('border-width', '2px');

        const customThemeData = {
            armor: {
                componentCSS: {
                    [componentName]: css`
                        border-width: 2px;
                    `,
                },
            },
        };
        const customTheme = makeTheme(customThemeData);

        tree = renderer
            .create(
                React.createElement(
                    ThemeProvider,
                    {
                        theme: customTheme,
                    },
                    Element,
                ),
            )
            .toJSON();
        if (extractNode) {
            tree = extractNode(tree);
        }

        // @ts-ignore
        expect(tree).toHaveStyleRule('border-width', '2px');

        return {
            pass: true,
            message: () => '',
        };
    },
});
