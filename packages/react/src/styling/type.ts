import { Indexed, ObjectLiteralType, ScalarType } from '../type';
import {
    BreakpointFunctionForwardedType,
    BreakpointFunctionTwoArgsForwardedType,
} from '../system/mixins/type';

export type SpacingFunctionType = (value: ScalarType) => ScalarType;
export type SpacingFunctionOrConstType = SpacingFunctionType | number;

type ShapeType = {
    borderRadius: {
        sharp?: string;
        medium?: string;
        soft?: string;
        round?: string;
        dull?: string;
    };
};

export type BreakpointValuesType = ObjectLiteralType<number>;

export type BreakpointsBaseType = {
    keys: string[];
    values: BreakpointValuesType;
    unit: string;
};

export type BreakpointsType = BreakpointsBaseType & {
    mapCodeToValue: (
        value: ScalarType,
        spacing: SpacingFunctionType,
    ) => ScalarType;
    mapWidthToCode: (value: ScalarType) => ScalarType;
    up: BreakpointFunctionForwardedType;
    down: BreakpointFunctionForwardedType;
    only: BreakpointFunctionForwardedType;
    between: BreakpointFunctionTwoArgsForwardedType;
    unit: string;
};
export type BreakpointsDeclarationType = Pick<BreakpointsType, 'values'>;

export type TypographyType = Indexed<{
    htmlFontSize: number;
    fontFamily: string;
    fontSize: number;
    pixelToRem: (size: ScalarType) => string;
}>;

export type TypographyInputType = Partial<
    Pick<TypographyType, 'htmlFontSize' | 'fontFamily' | 'fontSize'>
>;

export type RootThemeType = { armor: ThemeType } & ObjectLiteralType;

// TODO (nmelnikov 2020-07-14): need to ensure that this one is compliant with the newest token structure
export type ThemeType = Indexed<{
    breakpoints: BreakpointsType;
    color: ObjectLiteralType;
    components: ObjectLiteralType;
    componentOverrides: ObjectLiteralType;
    shadow: ObjectLiteralType;
    referenceIndex: ObjectLiteralType;
    typography: TypographyType;
    spacing: SpacingFunctionType;
    shape: ShapeType;
}>;

export type RootThemeInputType = {
    armor?: ThemeInputType;
} & ObjectLiteralType;

export type ThemeInputType = Partial<
    Pick<ThemeType, 'mixins' | 'palette' | 'shape' | 'zIndex'>
> &
    Indexed<{
        typography?: Partial<TypographyType>;
        breakpoints?: BreakpointsDeclarationType;
        spacing?: SpacingFunctionOrConstType;
        components?: ObjectLiteralType;
    }>;

export type ThemeOptionsType = {
    immutable?: boolean;
};
