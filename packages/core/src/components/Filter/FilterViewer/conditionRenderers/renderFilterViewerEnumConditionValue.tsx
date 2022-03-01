import { ReactChild } from 'react';
import { FilterViewerRenderFunctionType } from '../type';
import { FilterEnumConditionType } from '../../conditionTypes';

export const renderFilterViewerEnumConditionValue: FilterViewerRenderFunctionType =
    (condition, conditionType, conditionValue) => {
        const { multiple } = condition;
        const { options } = (
            conditionType as FilterEnumConditionType
        ).getAttributes();
        const { value } = conditionValue || {};

        if (value === undefined || value === null) {
            return '';
        }

        const optionIndex: Record<string, ReactChild> = {};
        if (options) {
            options.forEach(({ label, value: optionValue }) => {
                optionIndex[optionValue] = label;
            });
        }

        const result: ReactChild[] = [];
        if (multiple) {
            if (Array.isArray(value)) {
                (value as string[]).forEach((valueItem) => {
                    result.push(optionIndex[valueItem] || valueItem);
                });
            }
        } else {
            result.push(optionIndex[value as string] || (value as string));
        }

        return result;
    };
