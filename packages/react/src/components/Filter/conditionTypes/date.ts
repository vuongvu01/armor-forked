import { FilterConditionSchemaConditionType } from '../type';

export const filterDateConditionType: FilterConditionSchemaConditionType = {
    id: 'date',
    isValueEmpty: (condition, conditionValue) => {
        const { multiple } = condition;
        const { value } = conditionValue || {};

        if (value === undefined || value === null) {
            return true;
        }

        return multiple ? !Array.isArray(value) || !value.length : false;
    },
};
