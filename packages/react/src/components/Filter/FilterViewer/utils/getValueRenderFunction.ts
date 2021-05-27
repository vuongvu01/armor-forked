import { FilterConditionSchemaType } from '../../type';
import { renderFilterViewerDateConditionValue } from '../conditionRenderers/date';
import { renderFilterViewerEnumConditionValue } from '../conditionRenderers/enum';
import { renderFilterViewerNumberConditionValue } from '../conditionRenderers/number';
import { renderFilterViewerStringConditionValue } from '../conditionRenderers/string';

export const getValueRenderFunction = (
    condition: FilterConditionSchemaType,
) => {
    const { type } = condition;

    if (type === 'string') {
        return renderFilterViewerStringConditionValue;
    }

    if (type === 'number') {
        return renderFilterViewerNumberConditionValue;
    }

    if (type === 'date') {
        return renderFilterViewerDateConditionValue;
    }

    if (type === 'enum') {
        return renderFilterViewerEnumConditionValue;
    }

    return renderFilterViewerStringConditionValue;
};
