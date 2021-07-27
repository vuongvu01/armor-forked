import { useMemo } from 'react';
import { FilterBaseConditionType } from '../conditionTypes/FilterBaseConditionType';
import {
    FilterNumberConditionType,
    FilterStringConditionType,
    FilterDateConditionType,
    FilterEnumConditionType,
} from '../conditionTypes';

const standardTypes = {
    number: new FilterNumberConditionType('number'),
    string: new FilterStringConditionType('string'),
    date: new FilterDateConditionType('date'),
    enum: new FilterEnumConditionType('enum'),
};

type TypeIndexType = Record<string, FilterBaseConditionType>;

export const useTypeIndex = (customTypes?: Array<FilterBaseConditionType>) =>
    useMemo<TypeIndexType>(() => {
        const index: TypeIndexType = {};

        if (customTypes) {
            customTypes.forEach(type => {
                index[type.id] = type;
            });
        }

        return {
            ...standardTypes,
            ...index,
        };
    }, [customTypes]);
