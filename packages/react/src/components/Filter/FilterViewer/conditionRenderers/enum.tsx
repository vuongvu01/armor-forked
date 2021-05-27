import { ReactChild } from 'react';
import { FilterViewerRenderFunctionType } from '../type';
import { ScalarType } from '../../../../type';

type FilterViewerEnumConditionAttributesType = {
    options: Array<{
        label: ReactChild;
        value: ScalarType;
    }>;
};

export const renderFilterViewerEnumConditionValue: FilterViewerRenderFunctionType = (
    condition,
    conditionValue,
) => {
    const { multiple, attributes } = condition;
    const { options } =
        (attributes as FilterViewerEnumConditionAttributesType) || {};
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
            (value as string[]).forEach(valueItem => {
                result.push(optionIndex[valueItem] || valueItem);
            });
        }
    } else {
        result.push(optionIndex[value as string] || (value as string));
    }

    return result;
};
