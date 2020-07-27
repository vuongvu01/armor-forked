const getItemLabel = (item: string | { label: string; [key: string]: any }) => {
    if (typeof item === 'string') {
        return item;
    }

    if (!item || !item.label) {
        // eslint-disable-next-line no-console
        console.warn(
            'Please ensure that each item in the options list contains the `label` property',
        );
        return '';
    }

    return item.label;
};

export default getItemLabel;
