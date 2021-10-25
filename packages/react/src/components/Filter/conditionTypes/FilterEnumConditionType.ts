import { ReactChild } from 'react';
import { FilterBaseConditionType } from './FilterBaseConditionType';
import { ScalarType } from '../../../type';
import { DropdownPropsType } from '../../Dropdown';

type FilterEnumConditionAttributesType = {
    options?: Array<
        {
            label: ReactChild;
            value: ScalarType;
        } & Record<string, unknown>
    >;
    dropdownAttributes?: Pick<
        DropdownPropsType,
        | 'enableSearchOption'
        | 'enableVirtualization'
        | 'enableOptionContentEllipsis'
        | 'formatOption'
        | 'groups'
        | 'renderItemAdditionalInfo'
    >;
};

export class FilterEnumConditionType extends FilterBaseConditionType {
    static create(id: string, attributes: FilterEnumConditionAttributesType) {
        return new this(id, attributes);
    }

    public getAttributes(): FilterEnumConditionAttributesType {
        return super.getAttributes();
    }
}
