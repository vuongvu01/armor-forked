import { renderFilterViewerDateConditionValue } from '../conditionRenderers/renderFilterViewerDateConditionValue';
import { renderFilterViewerEnumConditionValue } from '../conditionRenderers/renderFilterViewerEnumConditionValue';
import { renderFilterViewerNumberConditionValue } from '../conditionRenderers/renderFilterViewerNumberConditionValue';
import { renderFilterViewerStringConditionValue } from '../conditionRenderers/renderFilterViewerStringConditionValue';
import { FilterBaseConditionType } from '../../conditionTypes/FilterBaseConditionType';
import {
    FilterDateConditionType,
    FilterEnumConditionType,
    FilterNumberConditionType,
} from '../../conditionTypes';

export const getValueRenderFunction = (
    conditionType: FilterBaseConditionType,
) => {
    if (conditionType instanceof FilterNumberConditionType) {
        return renderFilterViewerNumberConditionValue;
    }

    if (conditionType instanceof FilterDateConditionType) {
        return renderFilterViewerDateConditionValue;
    }

    if (conditionType instanceof FilterEnumConditionType) {
        return renderFilterViewerEnumConditionValue;
    }

    return renderFilterViewerStringConditionValue;
};
