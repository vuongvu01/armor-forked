import { FilterEditorDateCondition } from '../conditions/date';
import { FilterEditorEnumCondition } from '../conditions/enum';
import { FilterEditorNumberCondition } from '../conditions/number';
import { FilterEditorStringCondition } from '../conditions/string';
import { FilterBaseConditionType } from '../../conditionTypes/base';
import {
    FilterDateConditionType,
    FilterEnumConditionType,
    FilterNumberConditionType,
} from '../../conditionTypes';

export const getDefaultConditionRenderer = (
    conditionType: FilterBaseConditionType,
) => {
    if (conditionType instanceof FilterNumberConditionType) {
        return FilterEditorNumberCondition;
    }

    if (conditionType instanceof FilterDateConditionType) {
        return FilterEditorDateCondition;
    }

    if (conditionType instanceof FilterEnumConditionType) {
        return FilterEditorEnumCondition;
    }

    return FilterEditorStringCondition;
};
