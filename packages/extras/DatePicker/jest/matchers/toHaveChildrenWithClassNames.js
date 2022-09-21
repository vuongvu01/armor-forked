expect.extend({
    toHaveChildrenWithClassNames(component, list = {}) {
        list.forEach((className) => {
            const node = component.querySelector(`.${className}`);
            expect(node).toBeInTheDocument();
        });

        return {
            pass: true,
            message: () => '',
        };
    },
});
