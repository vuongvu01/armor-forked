import { FilterConditionSchemaElementOrGroupType } from '../type';
import { FilterBaseConditionType } from '../conditionTypes/FilterBaseConditionType';

export const getConditionType = (
    condition: FilterConditionSchemaElementOrGroupType,
    typeIndex: Record<string, FilterBaseConditionType>,
) => {
    const conditionTypeId = condition.typeId || 'string';

    return typeIndex[conditionTypeId];
};
