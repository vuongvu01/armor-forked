import { renderFilterViewerDateConditionValue } from '../conditionRenderers/date';
import { renderFilterViewerEnumConditionValue } from '../conditionRenderers/enum';
import { renderFilterViewerNumberConditionValue } from '../conditionRenderers/number';
import { renderFilterViewerStringConditionValue } from '../conditionRenderers/string';
import { FilterBaseConditionType } from '../../conditionTypes/base';
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
