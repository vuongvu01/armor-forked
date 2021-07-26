import { FilterConditionSchemaType, FilterConditionValueType } from '../type';

type FilterAttributesType = Record<string, unknown>;

export abstract class FilterBaseConditionType {
    constructor(
        readonly id: string,
        readonly attributes: FilterAttributesType = {},
    ) {}

    isValueEmpty(
        condition: FilterConditionSchemaType,
        conditionValue?: FilterConditionValueType,
    ) {
        const { multiple } = condition;
        const { value } = conditionValue || {};

        if (value === undefined || value === null) {
            return true;
        }

        return multiple
            ? !Array.isArray(value) || !value.length
            : (value as string).toString() === '';
    }

    internalizeValue(externalValue: unknown) {
        return externalValue;
    }

    externalizeValue(internalValue: unknown) {
        return internalValue;
    }

    getAttributes(): FilterAttributesType {
        return this.attributes;
    }

    // todo: future-reserved, allows a type to produce values that are specific only for this type
    produceConditionValue(): never {
        return {} as never;
    }
}
