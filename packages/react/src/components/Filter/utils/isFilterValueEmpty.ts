import { FilterConditionValueType } from '../type';

export const isFilterValueEmpty = (value: FilterConditionValueType) => {
    return !value || !value.conditions || !Object.keys(value.conditions).length;
};
