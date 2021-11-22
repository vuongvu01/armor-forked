import { ScalarType } from '../type';
import {
    BreakpointFunctionForwardedType,
    BreakpointFunctionTwoArgsForwardedType,
} from '../mixins/type';

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

export type BreakpointValuesType = Record<string, number>;

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

export type TypographyType = {
    htmlFontSize: number;
    fontFamily: string;
    fontSize: number;
    pixelToRem: (size: ScalarType) => string;
} & Record<string, any>; // todo: tighten

export type TypographyInputType = Partial<
    Pick<TypographyType, 'htmlFontSize' | 'fontFamily' | 'fontSize'>
>;

export type RootThemeType = { armor: ThemeType } & Record<string, any>; // todo: tighten

// TODO (nmelnikov 2020-07-14): need to ensure that this one is compliant with the newest token structure
export type ThemeType = {
    body: {
        color?: string;
        backgroundColor?: string;
    };
    breakpoints: BreakpointsType;
    color: Record<string, any>; // todo: tighten
    components: Record<string, any>; // todo: tighten
    componentOverrides: Record<string, any>; // todo: tighten
    shadow: Record<string, any>; // todo: tighten
    referenceIndex: Record<string, any>; // todo: tighten
    typography: TypographyType;
    spacing: SpacingFunctionType;
    shape: ShapeType;
} & Record<string, any>; // todo: tighten

export type RootThemeInputType = {
    armor?: ThemeInputType;
} & Record<string, any>; // todo: tighten

export type ThemeInputType = Partial<
    Pick<ThemeType, 'mixins' | 'palette' | 'shape' | 'zIndex'>
> & {
    typography?: Partial<TypographyType>;
    breakpoints?: BreakpointsDeclarationType;
    spacing?: SpacingFunctionOrConstType;
    components?: Record<string, any>; // todo: tighten
} & Record<string, any>; // todo: tighten

export type ThemeOptionsType = {
    immutable?: boolean;
};
