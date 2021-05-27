import {
    FilterConditionSchemaType,
    FilterConditionValueType,
} from '../../type';
import { getConditionType } from '../../utils/getConditionType';

export const isConditionValueEmpty = (
    condition: FilterConditionSchemaType,
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
        conditionValueItem => conditionValueItem.fieldName === path,
    );

    const conditionType = getConditionType(condition);
    if (!conditionType) {
        return true; // unknown conditions type encountered
    }

    if (!conditionType.isValueEmpty) {
        return true; // todo: missing isValueEmpty is currently not supported
    }

    return conditionType.isValueEmpty(condition, conditionValue);
};
