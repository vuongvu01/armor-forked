module.exports = {
    fillTemplate: (template, values) => {
        let result = template;

        if (values) {
            Object.keys(values).forEach(key => {
                const value = values[key];
                result = result
                    .replace(`#${key}#`, value)
                    .replace(`#${key.toUpperCase()}#`, value);
            });
        }

        return result;
    },
};
