import { DeepPartial } from 'ts-essentials';
import { Indexed, ObjectLiteralType, ScalarType } from '../type';
import {
    BreakpointFunctionForwardedType,
    BreakpointFunctionTwoArgsForwardedType,
} from '../system/mixins/type';
import { ComponentsThemeType } from '../components/type';

export type SpanFunctionType = (value: ScalarType) => ScalarType;
export type SpanFunctionOrConstType = SpanFunctionType | number;
type PaletteType = ObjectLiteralType;

type FigureType = {
    borderRadius?: string;
};

export type BreakpointValuesType = ObjectLiteralType<number>;

export type BreakpointsBaseType = {
    keys: string[];
    values: BreakpointValuesType;
};

export type BreakpointsType = BreakpointsBaseType & {
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

export type ThemeType = Indexed<{
    breakpoints: BreakpointsType;
    palette: PaletteType;
    components: ComponentsThemeType;
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
        components?: DeepPartial<ComponentsThemeType>;
    }>;

export type ThemeFabricOptions = {
    immutable?: boolean;
};
