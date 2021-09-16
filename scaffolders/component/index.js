const path = require('path');

module.exports.Generator = class Generator {
    getName() {
        return 'Component scaffolder';
    }

    async getQuestions() {
        // see inquirer docs to get more information on the format of questions
        // https://www.npmjs.com/package/inquirer#questions
        return [
            {
                message: 'What is the component name?',
                name: 'component_name',
            },
            {
                message: 'Include tests?',
                name: 'use_tests',
                type: 'confirm',
                defaultValue: true,
            },
            {
                message: 'Include development story?',
                name: 'use_dev_story',
                type: 'confirm',
                defaultValue: true,
            },
        ];
    }

    async refineAnswers(answers) {
        answers.component_name_pascal = this.util.textConverter.toPascal(
            answers.component_name,
        );
        answers.component_name_kebab = this.util.textConverter
            .toKebab(answers.component_name)
            .toLowerCase();
        answers.component_name_snake_uc = answers.component_name
            .replace(/[-\s]+/g, '_')
            .toUpperCase();

        const pascalName = answers.component_name_pascal;
        answers.component_name_camel = `${pascalName
            .substr(0, 1)
            .toLowerCase()}${pascalName.substr(1)}`;

        return answers;
    }

    async onAfterExecution() {
        // todo: using this.answers add the component to the index file
    }
};
