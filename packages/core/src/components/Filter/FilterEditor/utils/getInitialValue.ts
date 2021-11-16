import cloneDeep from 'clone-deep';

import {
    FilterConditionSchemaType,
    FilterConditionValueElementType,
    FilterConditionValueType,
} from '../../type';

export const getInitialValue = (schema: FilterConditionSchemaType) => {
    const defaultFilterValue: FilterConditionValueType = {
        conditions: [],
    };
    // todo: support nested levels
    schema.conditions.forEach(({ initialValue, id, name }) => {
        if (initialValue !== undefined) {
            defaultFilterValue.conditions.push({
                id,
                name: name ?? id,
                value: cloneDeep(initialValue),
            } as FilterConditionValueElementType);
        }
    });

    return defaultFilterValue;
};
