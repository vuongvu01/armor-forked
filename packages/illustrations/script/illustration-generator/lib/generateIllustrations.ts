/* eslint-disable no-restricted-syntax */
import { CategoryWithIllustrations } from '../types';
import generateIllustration from './generateIllustration';

function generateIllustrations(
    categoryWithIllustrations: CategoryWithIllustrations,
): void {
    const categories = Object.keys(categoryWithIllustrations);

    for (const category of categories) {
        const illustrations = Object.entries(
            categoryWithIllustrations[category],
        );

        for (const [name, source] of illustrations) {
            generateIllustration(category, name, source);
        }
    }
}

export default generateIllustrations;
