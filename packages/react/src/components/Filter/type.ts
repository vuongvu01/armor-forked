/** 👉 Value */
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

export type FilterConditionValueType =
    | {
          fieldName: string;
          id?: FilterConditionSchemaConditionIdType; // used when there are two conditions for the same fieldName
          value: FilterConditionValueValueType;
          op?: FilterConditionValueOperationType;

          logic?: never;
          conditions?: never;
      }
    | {
          fieldName?: never;
          id?: never; // used when there are two conditions for the same fieldName
          value?: never;
          op?: never;

          logic?: 'and' | 'or' | 'not';
          conditions: FilterConditionValueType[];
      };

/** 👉 Schema */
export type FilterConditionSchemaEmptyValueDetectorType = (
    field: FilterConditionSchemaType,
    fieldValue?: FilterConditionValueType,
) => boolean;

type FilterConditionSchemaStandardConditionTypeType =
    | 'string'
    | 'number'
    | 'date'
    | 'enum';

export type FilterConditionSchemaConditionType = {
    id: FilterConditionSchemaConditionIdType;
    isValueEmpty?: FilterConditionSchemaEmptyValueDetectorType;
};

type FilterConditionSchemaConditionTypeType =
    | FilterConditionSchemaStandardConditionTypeType
    | FilterConditionSchemaConditionType;

type FilterConditionSchemaConditionIdType = string;

export type FilterConditionSchemaType =
    | {
          fieldName: string;
          id?: FilterConditionSchemaConditionIdType; // crazy name :) used when there are two conditions for the same fieldName
          multiple?: boolean;
          label?: string;
          type?: FilterConditionSchemaConditionTypeType; // another crazy name :)
          attributes?: unknown;
          internalizeValue?: (value: FilterConditionValueValueType) => Date; // todo: future-reserved
          externalizeValue?: (value: Date) => FilterConditionValueValueType; // todo: future-reserved

          conditions?: never;
      }
    | {
          fieldName?: never;
          id?: never;
          multiple?: never;
          label?: never;
          type?: never;
          attributes?: never;
          internalizeValue?: never;
          externalizeValue?: never;

          conditions: FilterConditionSchemaType[];
      };
