import { Indexed, ScalarType } from '../type';

export type SpanFunctionType = (value: ScalarType) => ScalarType;

export type ThemeType = Indexed<{
    span: SpanFunctionType;
}>;
