import { ObjectLiteralType, ScalarType } from '../type';
import {
    BreakpointFunctionForwardedType,
    BreakpointFunctionTwoArgsForwardedType,
} from '../system/mixins/type';

export type SpanFunctionType = (value: ScalarType) => ScalarType;
export type SpanFunctionOrConstType = SpanFunctionType | number;
type PaletteType = {
    primary: {
        main: string;
        contrastText: string;
        [k: string]: any;
    };
    [k: string]: any;
};

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

type MixinsType = ObjectLiteralType<(...args: any[]) => any>;

export type TypographyType = {
    htmlFontSize: number;
    fontFamily: string;
    fontSize: number;
    pixelToRem: (size: ScalarType) => string;
} & ObjectLiteralType;

export type TypographyInputType = Partial<
    Pick<TypographyType, 'htmlFontSize' | 'fontFamily' | 'fontSize'>
>;

export type ThemeType = {
    breakpoints: BreakpointsType;
    // mixins: MixinsType;
    palette: PaletteType;
    typography: TypographyType;
    span: SpanFunctionType;
    figure: FigureType;
    [k: string]: any;
};

export type ThemeDeclarationType = Partial<
    Pick<ThemeType, 'mixins' | 'palette' | 'shape' | 'zIndex'>
> & {
    typography?: Partial<TypographyType>;
    breakpoints?: BreakpointsDeclarationType;
    span?: SpanFunctionOrConstType;
    [k: string]: any;
};

export type ThemeFabricOptions = {
    immutable?: boolean;
};
