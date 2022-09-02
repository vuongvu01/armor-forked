const React = require('react');
const { renderHook } = require('@testing-library/react-hooks');
const { useRef } = require('react');
const render = require('@testing-library/react').render;

expect.extend({
    toSupportRefForwarding(Component) {
        const { result } = renderHook(() => useRef(null));
        render(React.createElement(Component, { ref: result.current }));

        expect(result.current.current).toBeInstanceOf(HTMLElement);

        return {
            pass: true,
            message: () => '',
        };
    },
});
