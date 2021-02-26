// eslint-disable-next-line import/no-extraneous-dependencies
const React = require('react');
const ThemeProvider = require('styled-components').ThemeProvider;
const renderer = require('react-test-renderer');
const { makeTheme } = require('../../src/styling/theme/makeTheme');

expect.extend({
    toSupportCustomTheme(Element, componentName) {
        let tree = renderer.create(Element).toJSON();

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

        // @ts-ignore
        expect(tree).toHaveStyleRule('border-width', '2px');

        return {
            pass: true,
            message: () => '',
        };
    },
});
