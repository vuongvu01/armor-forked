const AllCategories = {
    COLOR: 'color',
    FONT_FAMILY: 'fontFamily',
    FONT_SIZE: 'fontSize',
    FONT_WEIGHT: 'fontWeight',
    LINE_HEIGHT: 'lineHeight',

    // uncategorized
    OTHERS: 'others',
};

const getIndexContent = () => {
    const categoryList = Object.values(AllCategories);
    let output = '';
    categoryList.forEach((cat) => {
        output += `
export * from './js/${cat}';
export * as ${cat} from './js/${cat}';
        `;
    });
    return output;
};

const tokenFilter = (cat) => (token) => {
    const tokenCategory = token.attributes.category;

    if (cat === AllCategories.OTHERS) {
        return !Object.values(AllCategories).includes(tokenCategory);
    }

    return tokenCategory === cat;
};

module.exports = {
    AllCategories,
    getIndexContent,
    tokenFilter,
};
