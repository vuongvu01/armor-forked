import { ReactChild } from 'react';
import { FilterBaseConditionType } from './base';
import { ScalarType } from '../../../type';

type FilterEnumConditionAttributesType = {
    options?: Array<{
        label: ReactChild;
        value: ScalarType;
    }>;
};

export class FilterEnumConditionType extends FilterBaseConditionType {
    static create(id: string, attributes: FilterEnumConditionAttributesType) {
        return new this(id, attributes);
    }

    public getAttributes(): FilterEnumConditionAttributesType {
        return super.getAttributes();
    }
}
