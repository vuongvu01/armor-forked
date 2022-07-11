import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { render } from 'ejs';
import { CategoryWithIcons } from '../types';
import config from '../config';
import { prefixWithAutoGeneratedMessage } from '../utils';

const { templates, storyDirectoryPath, storyFilename, messages } = config;

function generateStories(categoryWithIcons: CategoryWithIcons): void {
    const categories = Object.keys(categoryWithIcons);

    const content = render(templates.story, {
        categories: categories.map((category) => ({
            name: category,
            icons: Object.keys(categoryWithIcons[category]),
        })),
    });

    mkdirSync(storyDirectoryPath);

    const storyPath = join(storyDirectoryPath, storyFilename);

    writeFileSync(storyPath, prefixWithAutoGeneratedMessage(content));

    // eslint-disable-next-line no-console
    console.log(messages.generatedStories);
}

export default generateStories;
