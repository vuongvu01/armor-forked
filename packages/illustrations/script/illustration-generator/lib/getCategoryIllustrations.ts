/* eslint-disable no-restricted-syntax, no-continue */
import { readdirSync, Dirent } from 'fs';
import { join } from 'path';
import config from '../config';
import { CategoryWithIllustrations } from '../types';
import { getIllustrationName } from '../utils';

const { sourceDirectoryPath, messages } = config;

function getCategoryIllustrations(
    categories: Dirent[],
): CategoryWithIllustrations {
    const result: CategoryWithIllustrations = {};

    for (const category of categories) {
        const categoryPath = join(sourceDirectoryPath, category.name);

        const categoryIllustrations = readdirSync(categoryPath, {
            withFileTypes: true,
        });

        for (const illustration of categoryIllustrations) {
            const name = getIllustrationName(illustration.name);
            const path = join(categoryPath, illustration.name);

            if (!illustration.isFile()) {
                console.error(
                    messages.illustrationIsNoFile,
                    illustration.name,
                    path,
                );
                continue;
            }

            if (!result[category.name]) {
                result[category.name] = {};
            }

            result[category.name][name] = {
                name: illustration.name,
                path,
            };
        }
    }

    return result;
}

export default getCategoryIllustrations;
