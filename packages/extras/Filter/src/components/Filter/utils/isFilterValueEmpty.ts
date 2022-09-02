import { FilterConditionValueElementOrGroupType } from '../type';

export const isFilterValueEmpty = (
    value?: FilterConditionValueElementOrGroupType,
) => {
    return !value || !value.conditions || !Object.keys(value.conditions).length;
};
