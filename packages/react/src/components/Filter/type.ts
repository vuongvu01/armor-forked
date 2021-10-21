/** 👉 Value */
import { MutuallyExclusive } from '../../type';

type FilterConditionValueValueType = unknown;

// todo: add more operations if necessary
type FilterConditionValueOperationType =
    | '='
    | '<'
    | '>'
    | '<='
    | '>='
    | 'in'
    | 'includes';

export type FilterConditionValueNewValueType = {
    value?: FilterConditionValueValueType;
    op?: FilterConditionValueOperationType;
};

export type FilterConditionValueElementType = {
    id: string;
    name: string;
    value: FilterConditionValueValueType;
    op?: FilterConditionValueOperationType;
};

export type FilterConditionValueType = {
    logic?: 'and' | 'or' | 'not';
    conditions: FilterConditionValueElementOrGroupType[];
};

export type FilterConditionValueElementOrGroupType = MutuallyExclusive<
    FilterConditionValueElementType,
    FilterConditionValueType
>;

export type FilterConditionSchemaElementType = {
    id: string;

    // these 4 parameters can definitely describe a condition
    // we can have also presets for these 4, to select from a list
    name?: string;
    typeId?: string;
    multiple?: boolean;
    removable?: boolean;
    label?: string;
};

export type FilterConditionSchemaType = {
    conditions: FilterConditionSchemaElementOrGroupType[];
};

/** 👉 Schema */
export type FilterConditionSchemaElementOrGroupType = MutuallyExclusive<
    FilterConditionSchemaElementType,
    FilterConditionSchemaType
>;
