import { ReactChild } from 'react';
import intersection from 'lodash.intersection';
import { FilterBaseConditionType } from './FilterBaseConditionType';
import { ScalarType } from '../../../type';
import { DropdownPropsType } from '../../Dropdown';
import {
    FilterConditionSchemaElementOrGroupType,
    FilterConditionValueElementOrGroupType,
} from '../type';

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

    public isValueEmpty(
        condition: FilterConditionSchemaElementOrGroupType,
        conditionValue?: FilterConditionValueElementOrGroupType,
    ) {
        const { multiple } = condition;
        const { value } = conditionValue || {};

        if (value === undefined || value === null) {
            return true;
        }

        const { options } = this.getAttributes();
        if (!options) {
            return true;
        }

        if (multiple) {
            if (!Array.isArray(value) || !value.length) {
                return true;
            }

            return !intersection(
                value,
                options.map(option => option.value),
            ).length;
        }

        return !options.find(option => option.value === value);
    }
}
