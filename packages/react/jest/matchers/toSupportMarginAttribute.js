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
    toSupportMarginAttribute(
        componentJSON,
        testId,
        marginAttribute,
        marginValue,
    ) {
        if (!marginAttributes.includes(marginAttribute)) {
            return assertFailInvalidMargin;
        }

        switch (marginAttribute) {
            case 'margin':
                expect(componentJSON).toHaveStyleRule(
                    'margin',
                    `${SPACING_FACTOR * marginValue}px`,
                );
                break;
            case 'marginTop':
                expect(componentJSON).toHaveStyleRule(
                    'margin-top',
                    `${SPACING_FACTOR * marginValue}px`,
                );
                break;
            case 'marginBottom':
                expect(componentJSON).toHaveStyleRule(
                    'margin-bottom',
                    `${SPACING_FACTOR * marginValue}px`,
                );
                break;
            case 'marginLeft':
                expect(componentJSON).toHaveStyleRule(
                    'margin-left',
                    `${SPACING_FACTOR * marginValue}px`,
                );
                break;
            case 'marginRight':
                expect(componentJSON).toHaveStyleRule(
                    'margin-right',
                    `${SPACING_FACTOR * marginValue}px`,
                );
                break;
            case 'marginX':
                expect(componentJSON).toHaveStyleRule(
                    'margin-left',
                    `${SPACING_FACTOR * marginValue}px`,
                );
                expect(componentJSON).toHaveStyleRule(
                    'margin-right',
                    `${SPACING_FACTOR * marginValue}px`,
                );
                break;
            case 'marginY':
                expect(componentJSON).toHaveStyleRule(
                    'margin-top',
                    `${SPACING_FACTOR * marginValue}px`,
                );
                expect(componentJSON).toHaveStyleRule(
                    'margin-bottom',
                    `${SPACING_FACTOR * marginValue}px`,
                );
                break;
            default:
                return assertFailInvalidMargin;
        }

        return assertSuccess;
    },
});
