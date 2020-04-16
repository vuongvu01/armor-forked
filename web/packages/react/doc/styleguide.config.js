// https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md

const path = require('path');
const pkg = require('../package.json');

module.exports = {
    title: 'Design System',
    skipComponentsWithoutExample: true,
    styleguideDir: 'build',
    ignore: [
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.story.{js,jsx,ts,tsx}',
        '**/*.d.ts',
    ],
    getComponentPathLine(componentPath) {
        const name = path.basename(componentPath, '.tsx');
        return `import { ${name} } from '${pkg.name}';`;
    },
    // https://github.com/styleguidist/react-docgen-typescript
    // propsParser: require('react-docgen-typescript').withDefaultConfig({
    //     propFilter: (prop, component) => {
    //         if (prop.parent) {
    //             return !prop.parent.fileName.includes('node_modules');
    //         }
    //
    //         return true;
    //     },
    // }).parse,
    template: {
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href:
                        'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900',
                },
                {
                    rel: 'stylesheet',
                    href:
                        'https://fonts.googleapis.com/icon?family=Material+Icons',
                },
            ],
        },
    },
    ribbon: {
        url: 'https://github.com/deliveryhero/ui/',
    },
    sections: [
        {
            name: 'Components',
            content: '../src/components/README.md',
            components: '../src/components/**/*.tsx',
        },
    ],
    // sections: [
    //     // {
    //     //     name: 'Introduction',
    //     //     content: 'docs/introduction.md'
    //     // },
    //     // {
    //     //     name: 'Documentation',
    //     //     sections: [
    //     //         {
    //     //             name: 'Installation',
    //     //             content: 'docs/installation.md',
    //     //             description: 'The description for the installation section'
    //     //         },
    //     //         {
    //     //             name: 'Configuration',
    //     //             content: 'docs/configuration.md'
    //     //         },
    //     //         {
    //     //             name: 'Live Demo',
    //     //             external: true,
    //     //             href: 'http://example.com'
    //     //         }
    //     //     ]
    //     // },
    //     {
    //         name: 'UI Components',
    //         // content: 'docs/ui.md',
    //         components: '../src/components/**/*.js',
    //         exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
    //         usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    //     }
    // ]
};
