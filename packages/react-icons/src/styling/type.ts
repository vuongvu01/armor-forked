import { Indexed, ScalarType, ObjectLiteral } from '../type';

export type SpacingFunctionType = (value: ScalarType) => ScalarType;
export type SpacingFunctionOrConstType = SpacingFunctionType | number;

// TODO (nmelnikov 2020-07-14): need to ensure that this one is compliant with the newest token structure
export type ThemeType = Indexed<{
    spacing: SpacingFunctionType;
}>;

export type RootThemeType = { armor: ThemeType } & ObjectLiteral;

export type ThemeDeclarationType = Indexed<{
    spacing?: SpacingFunctionOrConstType;
}>;
