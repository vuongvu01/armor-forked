import { FilterConditionSchemaType } from '../../type';
import { FilterEditorDateCondition } from '../conditions/date';
import { FilterEditorEnumCondition } from '../conditions/enum';
import { FilterEditorNumberCondition } from '../conditions/number';
import { FilterEditorStringCondition } from '../conditions/string';

export const getConditionRenderer = (condition: FilterConditionSchemaType) => {
    const { type } = condition;

    if (type === 'string') {
        return FilterEditorStringCondition;
    }

    if (type === 'number') {
        return FilterEditorNumberCondition;
    }

    if (type === 'date') {
        return FilterEditorDateCondition;
    }

    if (type === 'enum') {
        return FilterEditorEnumCondition;
    }

    return FilterEditorStringCondition;
};
