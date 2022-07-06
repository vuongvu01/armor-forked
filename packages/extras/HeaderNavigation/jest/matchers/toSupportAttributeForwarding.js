const React = require('react');
const render = require('@testing-library/react').render;

expect.extend({
    toSupportAttributeForwarding(Component) {
        const dataAttrValue = 'data';
        const ariaAttrValue = 'label';
        const illegalAttrValue = 'foo';

        const { container } = render(
            React.createElement(Component, {
                'data-legal-attr': dataAttrValue,
                'aria-label': ariaAttrValue,
                illegal: illegalAttrValue,
            }),
        );
        const node = container.childNodes[0];

        expect(node.getAttribute('data-legal-attr')).toEqual(dataAttrValue);
        expect(node.getAttribute('aria-label')).toEqual(ariaAttrValue);
        expect(node.getAttribute('illegal')).toEqual(null);

        return {
            pass: true,
            message: () => '',
        };
    },
});
