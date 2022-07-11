import {
    generateIcons,
    generateIndex,
    generateStories,
    getCategories,
    copyEtcCategory,
} from './lib';

function main() {
    const categories = getCategories();

    generateIcons(categories);
    generateIndex(categories);
    generateStories(categories);

    copyEtcCategory();
}

main();
