import { FilterConditionSchemaType } from '../type';
import {
    filterDateConditionType,
    filterEnumConditionType,
    filterNumberConditionType,
    filterStringConditionType,
} from '../conditionTypes';

export const getConditionType = (condition: FilterConditionSchemaType) => {
    const { type } = condition;

    if (type !== undefined && type !== null) {
        if (typeof type !== 'string') {
            return type;
        }

        if (type === 'string') {
            return filterStringConditionType;
        }

        if (type === 'number') {
            return filterNumberConditionType;
        }

        if (type === 'date') {
            return filterDateConditionType;
        }

        if (type === 'enum') {
            return filterEnumConditionType;
        }
    }

    return filterStringConditionType;
};
