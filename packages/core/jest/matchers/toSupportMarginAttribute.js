const React = require('react');
const { SPACING_FACTOR } = require('@deliveryhero/armor-system');

const marginPropsList = {
    margin: true,
    marginTop: true,
    marginBottom: true,
    marginLeft: true,
    marginRight: true,
    marginX: true,
    marginY: true,
};

const marginProps = Object.keys(marginPropsList);

const assertSuccess = {
    pass: true,
    message: () => '',
};

const assertFailInvalidMargin = {
    pass: false,
    message: () =>
        `Please make sure to use a valid margin property: ${JSON.stringify(
            marginProps,
        )}`,
};

/**
 * @deprecated
 * @use toSupportMarginProps()
 */
expect.extend({
    toSupportMarginAttribute(componentJSON, marginAttribute, marginValue) {
        if (!marginProps.includes(marginAttribute)) {
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
