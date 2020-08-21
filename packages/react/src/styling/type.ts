import { Indexed, ObjectLiteralType, ScalarType } from '../type';
import {
    BreakpointFunctionForwardedType,
    BreakpointFunctionTwoArgsForwardedType,
} from '../system/mixins/type';

export type SpanFunctionType = (value: ScalarType) => ScalarType;
export type SpanFunctionOrConstType = SpanFunctionType | number;

type FigureType = {
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
};

export type BreakpointsType = BreakpointsBaseType & {
    map: (value: ScalarType, span: SpanFunctionType) => ScalarType;
    up: BreakpointFunctionForwardedType;
    down: BreakpointFunctionForwardedType;
    only: BreakpointFunctionForwardedType;
    between: BreakpointFunctionTwoArgsForwardedType;
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

// TODO (nmelnikov 2020-07-14): need to ensure that this one is compliant with the newest token structure
export type ThemeType = Indexed<{
    breakpoints: BreakpointsType;
    color: ObjectLiteralType;
    components: ObjectLiteralType;
    componentOverrides: ObjectLiteralType;
    shadow: ObjectLiteralType;
    referenceIndex: ObjectLiteralType;
    typography: TypographyType;
    span: SpanFunctionType;
    figure: FigureType;
}>;

export type ThemeDeclarationType = Partial<
    Pick<ThemeType, 'mixins' | 'palette' | 'shape' | 'zIndex'>
> &
    Indexed<{
        typography?: Partial<TypographyType>;
        breakpoints?: BreakpointsDeclarationType;
        span?: SpanFunctionOrConstType;
        components?: ObjectLiteralType;
    }>;

export type ThemeFabricOptions = {
    immutable?: boolean;
};
