import { PropertySignature } from 'typescript';

export type PropertyDeclarationTypeType = {
    source: string;
    typeReference?: boolean;
    defaultValue?: string;
    string?: boolean;
    number?: boolean;
    boolean?: boolean;
    array?: boolean;
};

export type PropertyDeclarationDocTagsType = Record<string, string>;

export type PropertyDeclarationDocType = {
    description: string;
    tags: PropertyDeclarationDocTagsType;
    ignored: boolean;
    deprecated: boolean;
    internal: boolean;
    adExpand: string[];
};

export type PropertyDeclarationType = {
    name: string;
    type: PropertyDeclarationTypeType;
    optional: boolean;
    group: string;
    defaultValue?: string;
    doc?: PropertyDeclarationDocType;
};

export type FlatResultType = PropertySignature[];

export type ComponentListType = {
    name: string;
    properties: PropertyDeclarationType[];
}[];

export type DefaultValueCrawlResult = Record<string, string>;
