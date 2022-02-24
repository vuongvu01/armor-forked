import { FilterViewerRenderFunctionType } from '../type';
import { FilterDateConditionType } from '../../conditionTypes';

export const renderFilterViewerDateConditionValue: FilterViewerRenderFunctionType =
    (condition, conditionType, conditionValue) => {
        const { multiple } = condition;
        const { value } = conditionValue || {};
        const { formatDateTime } = (
            conditionType as FilterDateConditionType
        ).getAttributes();

        if (multiple) {
            // todo: do not support multiple dates at the moment
            return '';
        }

        if (value === undefined || value === null) {
            return '';
        }

        let result = '';
        if (formatDateTime && value instanceof Date) {
            result = formatDateTime(value);
        } else {
            result = (value as string).toString();
        }

        return result;
    };
