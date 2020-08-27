import { Indexed, ScalarType } from '../type';

export type SpanFunctionType = (value: ScalarType) => ScalarType;
export type SpanFunctionOrConstType = SpanFunctionType | number;

// TODO (nmelnikov 2020-07-14): need to ensure that this one is compliant with the newest token structure
export type ThemeType = Indexed<{
    span: SpanFunctionType;
}>;

export type ThemeDeclarationType = Indexed<{
    span?: SpanFunctionOrConstType;
}>;
