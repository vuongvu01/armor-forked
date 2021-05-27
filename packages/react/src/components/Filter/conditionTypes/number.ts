import { FilterConditionSchemaConditionType } from '../type';

export const filterNumberConditionType: FilterConditionSchemaConditionType = {
    id: 'number',
    isValueEmpty: (condition, conditionValue) => {
        const { multiple } = condition;
        const { value } = conditionValue || {};

        if (value === undefined || value === null) {
            return true;
        }

        return multiple
            ? !Array.isArray(value) || !value.length
            : (value as string).toString() === '';
    },
};
