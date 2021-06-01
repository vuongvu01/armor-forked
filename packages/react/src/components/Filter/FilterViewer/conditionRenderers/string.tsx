import { FilterViewerRenderFunctionType } from '../type';

export const renderFilterViewerStringConditionValue: FilterViewerRenderFunctionType = (
    condition,
    conditionType,
    conditionValue,
) => {
    const { multiple } = condition;
    const { value } = conditionValue || {};

    if (multiple) {
        // todo: do not support multiple strings at the moment
        return '';
    }

    if (value === undefined || value === null) {
        return '';
    }

    return value as string;
};
