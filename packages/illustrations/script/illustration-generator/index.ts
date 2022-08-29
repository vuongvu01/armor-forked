import {
    getCategories,
    generateIllustrations,
    generateIndex,
    generateStories,
} from './lib';

function main() {
    const categories = getCategories();

    generateIllustrations(categories);
    generateIndex(categories);
    generateStories(categories);
}

main();
