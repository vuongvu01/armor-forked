import { FilterConditionSchemaType, FilterConditionValueType } from '../type';

import { FilterBaseConditionType } from './FilterBaseConditionType';

type FilterDateConditionAttributeType = {
    enableTimePicker?: boolean;
    formatDateTime?: (value: Date) => string;
};

export class FilterDateConditionType extends FilterBaseConditionType {
    static create(id: string, attributes: FilterDateConditionAttributeType) {
        return new this(id, attributes);
    }

    public isValueEmpty(
        condition: FilterConditionSchemaType,
        conditionValue?: FilterConditionValueType,
    ) {
        const { multiple } = condition;
        const { value } = conditionValue || {};

        if (value === undefined || value === null) {
            return true;
        }

        return multiple ? !Array.isArray(value) || !value.length : false;
    }

    public getAttributes(): FilterDateConditionAttributeType {
        return super.getAttributes();
    }
}
