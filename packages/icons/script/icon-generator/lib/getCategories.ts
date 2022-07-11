import { readdirSync } from 'fs';
import config from '../config';
import getCategoryIcons from './getCategoryIcons';

function getCategories(
    path = config.sourceDirectoryPath,
): ReturnType<typeof getCategoryIcons> {
    const files = readdirSync(path, {
        withFileTypes: true,
    });

    const baseCategories = files.filter((file) => file.isDirectory());

    const categories = getCategoryIcons(baseCategories);

    return categories;
}

export default getCategories;
