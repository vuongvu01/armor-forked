/* eslint-disable no-restricted-syntax */
import { CategoryWithIcons } from '../types';
import generateIcon from './generateIcon';

function generateIcons(categoryWithIcons: CategoryWithIcons): void {
    const categories = Object.keys(categoryWithIcons);

    for (const category of categories) {
        const icons = Object.keys(categoryWithIcons[category]);

        for (const icon of icons) {
            const sizes = categoryWithIcons[category][icon];

            generateIcon(category, icon, sizes);
        }
    }
}

export default generateIcons;
