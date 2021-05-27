import { FilterViewerRenderFunctionType } from '../type';

export const renderFilterViewerStringConditionValue: FilterViewerRenderFunctionType = (
    field,
    fieldValue,
) => {
    const { multiple } = field;
    const { value } = fieldValue || {};

    if (multiple) {
        // todo: do not support multiple strings at the moment
        return '';
    }

    if (value === undefined || value === null) {
        return '';
    }

    return value as string;
};
