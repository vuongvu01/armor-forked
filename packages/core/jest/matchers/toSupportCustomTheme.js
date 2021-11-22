// eslint-disable-next-line import/no-extraneous-dependencies
const React = require('react');
const { ThemeProvider, makeTheme } = require('@deliveryhero/armor-system');
const renderer = require('react-test-renderer');

expect.extend({
    toSupportCustomTheme(Element, componentName, extractNode = null) {
        let tree = renderer.create(Element).toJSON();
        if (extractNode) {
            tree = extractNode(tree);
        }

        // @ts-ignore
        expect(tree).not.toHaveStyleRule('border-width', '2px');

        const customTheme = makeTheme({
            armor: {
                components: {
                    [componentName]: {
                        borderWidth: '2px',
                    },
                },
            },
        });

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
