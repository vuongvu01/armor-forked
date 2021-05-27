import { FilterViewerRenderFunctionType } from '../type';

export const renderFilterViewerNumberConditionValue: FilterViewerRenderFunctionType = (
    condition,
    conditionValue,
) => {
    const { multiple } = condition;
    const { value } = conditionValue || {};

    if (multiple) {
        // todo: do not support multiple numbers at the moment
        return '';
    }

    if (value === undefined || value === null) {
        return '';
    }

    return (value as string).toString();
};
