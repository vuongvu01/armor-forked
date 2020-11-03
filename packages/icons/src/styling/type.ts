import { Indexed, ScalarType, ObjectLiteral } from '../type';

export type SpacingFunctionType = (value: ScalarType) => ScalarType;
export type SpacingFunctionOrConstType = SpacingFunctionType | number;

export type TypographyType = Indexed<{
    htmlFontSize: number;
    fontFamily: string;
    fontSize: number;
    pixelToRem: (size: ScalarType) => string;
}>;

export type TypographyInputType = Partial<
    Pick<TypographyType, 'htmlFontSize' | 'fontFamily' | 'fontSize'>
>;

// TODO (nmelnikov 2020-07-14): need to ensure that this one is compliant with the newest token structure
export type ThemeType = Indexed<{
    spacing: SpacingFunctionType;
    typography: TypographyType;
}>;

export type RootThemeType = { armor: ThemeType } & ObjectLiteral;

export type ThemeDeclarationType = Indexed<{
    spacing?: SpacingFunctionOrConstType;
    typography?: Partial<TypographyType>;
}>;
