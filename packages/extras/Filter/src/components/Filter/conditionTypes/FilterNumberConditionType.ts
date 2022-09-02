import { FilterBaseConditionType } from './FilterBaseConditionType';

type FilterNumberConditionAttributeType = {};

export class FilterNumberConditionType extends FilterBaseConditionType {
    static create(id: string, attributes: FilterNumberConditionAttributeType) {
        return new this(id, attributes);
    }
}
