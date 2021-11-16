/** 👉 Value */
import { MutuallyExclusive } from '@deliveryhero/armor-system';

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
    name?: string;
    typeId?: string;
    multiple?: boolean;
    removable?: boolean;
    label?: string;
    initialValue?: unknown;
};

export type FilterConditionSchemaType = {
    conditions: FilterConditionSchemaElementOrGroupType[];
};

/** 👉 Schema */
export type FilterConditionSchemaElementOrGroupType = MutuallyExclusive<
    FilterConditionSchemaElementType,
    FilterConditionSchemaType
>;
