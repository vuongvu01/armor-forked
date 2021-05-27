import { FilterViewerRenderFunctionType } from '../type';

type FilterEditorDateConditionAttributesType = {
    formatDateTime?: (value?: unknown) => string;
};

export const renderFilterViewerDateConditionValue: FilterViewerRenderFunctionType = (
    condition,
    conditionValue,
) => {
    const { multiple, attributes } = condition;
    const { value } = conditionValue || {};
    const { formatDateTime } =
        (attributes as FilterEditorDateConditionAttributesType) || {};

    if (multiple) {
        // todo: do not support multiple dates at the moment
        return '';
    }

    if (value === undefined || value === null) {
        return '';
    }

    let result = '';
    if (formatDateTime) {
        result = formatDateTime(value);
    } else {
        result = (value as string).toString();
    }

    return result;
};
