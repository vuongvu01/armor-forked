import { readFileSync } from 'fs';
import { join } from 'path';

export default {
    sourceDirectoryPath: './svg',
    outputDirectoryPath: './src/illustrations',
    storyDirectoryPath: './src/illustrations/__story__',
    storyFilename: 'Illustration.story.tsx',
    indexFilename: 'index.ts',
    templates: {
        component: readFileSync(
            './script/illustration-generator/templates/illustration-component.ejs',
            'utf8',
        ),
        story: readFileSync(
            './script/illustration-generator/templates/illustration-story.ejs',
            'utf8',
        ),
        createExport: (module: string) => `export * from './${module}';\n`,
    },
    messages: {
        illustrationIsNoFile: 'No valid file for illustration: ',
        generatedIndices: 'Generated index files.',
        generatedStories: 'Generated stories.',
        generatedComponent: (path: string, name: string) => {
            return `Generated ${join(path, `${name}.tsx`)}`;
        },
        generatedFileWarning: `/* This file is auto-generated, don't edit by hand! */`,
    },
    constants: {
        DEFAULT_BRAND_COLOR: '#417FDA',
        DEFAULT_NEUTRAL_COLOR: '#4D4D4D',
    },
} as const;
