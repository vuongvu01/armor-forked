import {
    FilterConditionSchemaType,
    FilterConditionValueType,
} from '../../type';
import { FilterBaseConditionType } from '../../conditionTypes/base';

export const isConditionValueEmpty = (
    condition: FilterConditionSchemaType,
    conditionType: FilterBaseConditionType,
    path?: string,
    value?: FilterConditionValueType,
) => {
    if (!path) {
        return true;
    }

    // todo: This whole approach only works with a flat schema (which we only support for now),
    // todo: and will not work otherwise.

    // todo: use _.get(realValue, path) later when we have a nested structure
    // todo: also, use memoization, be more clever than this!
    const conditionValue = value?.conditions?.find(
        conditionValueItem => conditionValueItem.name === path,
    );

    return conditionType.isValueEmpty(condition, conditionValue);
};
