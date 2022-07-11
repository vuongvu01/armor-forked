/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import { readdirSync, Dirent } from 'fs';
import { join } from 'path';
import config from '../config';
import { CategoryWithIcons } from '../types';
import { getIconName, getIconSize } from '../utils';

const { sourceDirectoryPath, messages } = config;

function getCategoryIcons(categories: Dirent[]): CategoryWithIcons {
    const result: CategoryWithIcons = {};

    for (const category of categories) {
        const categoryPath = join(sourceDirectoryPath, category.name);

        const categoryIcons = readdirSync(categoryPath, {
            withFileTypes: true,
        });

        for (const icon of categoryIcons) {
            const name = getIconName(icon.name);
            const size = getIconSize(icon.name);
            const path = join(categoryPath, icon.name);

            if (!icon.isFile()) {
                console.error(messages.iconIsNoFile, icon.name, path);
                continue;
            }

            if (!size) {
                console.error(messages.noSizeFound, icon.name, path);
                continue;
            }

            if (!result[category.name]) {
                result[category.name] = {};
            }

            if (!result[category.name][name]) {
                result[category.name][name] = [];
            }

            result[category.name][name].push({
                name: icon.name,
                path,
                size,
            });
        }
    }

    return result;
}

export default getCategoryIcons;
