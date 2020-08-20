const React = require('react');

const { marginAttributesList } = require('../../src/system/attributes');
const { SPACING_FACTOR } = require('../../src/styling/themes');

const marginAttributes = Object.keys(marginAttributesList);

const assertSuccess = {
    pass: true,
    message: () => '',
};

const assertFailInvalidMargin = {
    pass: false,
    message: () =>
        `Please make sure to use a valid margin property: ${JSON.stringify(
            marginAttributes,
        )}`,
};

expect.extend({
    toSupportMarginAttributes(component, testId, marginAttribute, marginValue) {
        if (!marginAttributes.includes(marginAttribute)) {
            return assertFailInvalidMargin;
        }

        const elementItem = component.getAllByTestId(testId)[0];

        const style = window.getComputedStyle(elementItem);

        switch (marginAttribute) {
            case 'margin':
                expect(style.margin).toBe(`${SPACING_FACTOR * marginValue}px`);
                break;
            case 'marginTop':
                expect(style.marginTop).toBe(
                    `${SPACING_FACTOR * marginValue}px`,
                );
                break;
            case 'marginBottom':
                expect(style.marginBottom).toBe(
                    `${SPACING_FACTOR * marginValue}px`,
                );
                break;
            case 'marginLeft':
                expect(style.marginLeft).toBe(
                    `${SPACING_FACTOR * marginValue}px`,
                );
                break;
            case 'marginRight':
                expect(style.marginRight).toBe(
                    `${SPACING_FACTOR * marginValue}px`,
                );
                break;
            case 'marginX':
                expect(style.marginRight).toBe(
                    `${SPACING_FACTOR * marginValue}px`,
                );
                expect(style.marginLeft).toBe(
                    `${SPACING_FACTOR * marginValue}px`,
                );
                break;
            case 'marginY':
                expect(style.marginTop).toBe(
                    `${SPACING_FACTOR * marginValue}px`,
                );
                expect(style.marginBottom).toBe(
                    `${SPACING_FACTOR * marginValue}px`,
                );
                break;
            default:
                return assertFailInvalidMargin;
        }

        return assertSuccess;
    },
});
