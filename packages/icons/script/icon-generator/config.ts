import { readFileSync } from 'fs';
import { join } from 'path';

export default {
    sourceDirectoryPath: './svg',
    outputDirectoryPath: './src/icons',
    storyDirectoryPath: './src/icons/__story__',
    etcCategoryDirectoryPath: './src/components/Etc',

    storyFilename: 'Icon.story.tsx',
    indexFilename: 'index.ts',

    sourceFileIconSizes: ['small', 'medium', 'large'],

    etcCategoryImportPath: {
        searchValue: `'../SVGIcon'`,
        replaceValue: `'../../components/SVGIcon'`,
    },

    templates: {
        component: readFileSync(
            './script/icon-generator/templates/icon-component.ejs',
            'utf8',
        ),

        story: readFileSync(
            './script/icon-generator/templates/icons-story.ejs',
            'utf8',
        ),

        createExport: (module: string) => `export * from './${module}';\n`,
    },

    messages: {
        noSizeFound: 'No size found for icon: ',
        iconIsNoFile: 'No valid file for icon: ',

        generatedIndices: 'Generated index files.',
        generatedStories: 'Generated stories.',

        generatedComponent: (path: string, name: string) => {
            return `Generated ${join(path, `${name}.tsx`)}`;
        },

        copiedFromTo: (source: string, target: string) => {
            return `Copied ${source} to ${target}`;
        },

        generatedFileWarning: `/* This file is auto-generated, don't edit by hand! */`,
    },
} as const;
