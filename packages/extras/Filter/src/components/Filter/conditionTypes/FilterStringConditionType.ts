import { FilterBaseConditionType } from './FilterBaseConditionType';

type FilterStringConditionAttributeType = {};

export class FilterStringConditionType extends FilterBaseConditionType {
    static create(id: string, attributes: FilterStringConditionAttributeType) {
        return new this(id, attributes);
    }
}
