import { ReactChild } from 'react';
import { ScalarType } from '@deliveryhero/armor-system';

import { DropdownPropsType } from '@deliveryhero/armor';
import { FilterBaseConditionType } from './FilterBaseConditionType';

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
