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
          id: string;
          name: string;
          value: FilterConditionValueValueType;
          op?: FilterConditionValueOperationType;

          logic?: never;
          conditions?: never;
      }
    | {
          id?: never;
          name?: never;
          value?: never;
          op?: never;

          logic?: 'and' | 'or' | 'not';
          conditions: FilterConditionValueType[];
      };

/** 👉 Schema */
export type FilterConditionSchemaType =
    | {
          id: string;

          // these 4 parameters can definitely describe a condition
          // we can have also presets for these 4, to select from a list
          name?: string;
          typeId?: string;
          multiple?: boolean;
          label?: string;

          groups?: never; // todo: future-reserved
          conditions?: never;
      }
    | {
          id?: never;

          name?: never;
          typeId?: never;
          multiple?: never;
          label?: never;

          attributes?: never;
          internalizeValue?: never;
          externalizeValue?: never;

          groups?: never; // todo: future-reserved
          conditions: FilterConditionSchemaType[];
      };
