import { FilterConditionSchemaType } from '../type';
import { FilterBaseConditionType } from '../conditionTypes/base';

export const getConditionType = (
    condition: FilterConditionSchemaType,
    typeIndex: Record<string, FilterBaseConditionType>,
) => {
    const conditionTypeId = condition.typeId || 'string';

    return typeIndex[conditionTypeId];
};
