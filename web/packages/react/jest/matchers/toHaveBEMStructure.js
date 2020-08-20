const { makeBEM } = require('../../src/utils');

expect.extend({
    toHaveBEMStructure(component, blockName, structure = {}) {
        Object.keys(structure).forEach(elementName => {
            const modifiers = structure[elementName];

            const node = component.querySelector(
                `.${makeBEM(blockName, elementName)}`,
            );
            expect(node).toBeInTheDocument();
            const classList = modifiers.map(modifier =>
                makeBEM(blockName, elementName, modifier),
            );
            expect(node).toHaveClass(...classList);
        });

        return {
            pass: true,
            message: () => '',
        };
    },
});
