const React = require('react');
// eslint-disable-next-line import/no-extraneous-dependencies
const { render } = require('@testing-library/react');

expect.extend({
    toSupportRestPropsForwarding(Component, rootNodeName, wrapper = null) {
        const component = React.createElement(Component, {
            'data-surprise': "i've got a present for you",
            className: 'Hello',
        });
        const { container } = render(wrapper ? wrapper(component) : component);

        const root = container.querySelector(`.${rootNodeName}-Root`);
        expect(root).toBeInTheDocument();

        expect(root).toHaveAttribute(
            'data-surprise',
            "i've got a present for you",
        );

        expect(Array.from(root.classList)).toEqual(
            expect.arrayContaining(['Hello']),
        );

        return {
            pass: true,
            message: () => '',
        };
    },
});
