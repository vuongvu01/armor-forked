import { FilterEditorDateCondition } from '../conditions/FilterEditorDateCondition';
import { FilterEditorEnumCondition } from '../conditions/FilterEditorEnumCondition';
import { FilterEditorNumberCondition } from '../conditions/FilterEditorNumberCondition';
import { FilterEditorStringCondition } from '../conditions/FilterEditorStringCondition';
import { FilterBaseConditionType } from '../../conditionTypes/FilterBaseConditionType';
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
