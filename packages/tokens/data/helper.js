const ALL_CATEGORIES = [
    'Color',
    'FontFamily',
    'FontSize',
    'FontWeight',
    'LineHeight',
    'Spacing',
    'BorderRadius',
    'BorderWidth',
    'Elevation',
    'Opacity',
    'Duration',
    'Breakpoint',
    'Others',
];

const checkMatchCategory = (category) => (tokenName) => {
    const re = new RegExp(`^${category}`, 'i');
    return tokenName.match(re);
};

const tokenFilter = (category) => (token) => {
    const tokenFullName = token.name;

    if (category === 'Others') {
        return !ALL_CATEGORIES.some((cat) =>
            checkMatchCategory(cat)(tokenFullName),
        );
    }

    return Boolean(checkMatchCategory(category)(tokenFullName));
};

const getIndexContent = (allTokens) => {
    let output = '';

    const availableCategories = ALL_CATEGORIES.filter((cat) => {
        return allTokens.some((token) => tokenFilter(cat)(token));
    });

    availableCategories.forEach((cat) => {
        output += `export * from './js/${cat}';\n`;
    });
    availableCategories.forEach((cat) => {
        output += `export * as ${cat} from './js/${cat}';\n`;
    });

    return output;
};

module.exports = {
    ALL_CATEGORIES,
    getIndexContent,
    tokenFilter,
};
