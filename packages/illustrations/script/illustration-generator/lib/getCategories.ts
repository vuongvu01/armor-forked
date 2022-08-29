import { readdirSync } from 'fs';
import config from '../config';
import getCategoryIllustrations from './getCategoryIllustrations';

function getCategories(
    path = config.sourceDirectoryPath,
): ReturnType<typeof getCategoryIllustrations> {
    const files = readdirSync(path, {
        withFileTypes: true,
    });

    const baseCategories = files.filter((file) => file.isDirectory());

    return getCategoryIllustrations(baseCategories);
}

export default getCategories;
