import { ObjectLiteralType, ScalarType } from '../type';
import {
    BreakpointFunctionForwardedType,
    BreakpointFunctionTwoArgsForwardedType,
} from '../system/mixins/type';

type SpacingFunctionType = (value: ScalarType) => ScalarType;
type SpacingFunctionOrConstType = SpacingFunctionType | number;
type ZIndexType = ObjectLiteralType<number>;
type PaletteType = {
    primary: {
        main: string;
        contrastText: string;
        [k: string]: any;
    };
    [k: string]: any;
};
type ShadowsType = string[];
type ShapeType = {
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
    pxToRem: (size: number) => string;
};
export type TypographyInputType = Partial<
    Pick<TypographyType, 'htmlFontSize' | 'fontFamily' | 'fontSize'>
>;

// it tries to be compatible with https://material-ui.com/customization/default-theme/
export type ThemeType = {
    breakpoints: BreakpointsType;
    mixins: MixinsType;
    palette: PaletteType;
    shadows: ShadowsType;
    typography: TypographyType;
    spacing: SpacingFunctionType;
    shape: ShapeType;
    zIndex: ZIndexType;
    [k: string]: any;
};

export type ThemeDeclarationType = Partial<
    Pick<ThemeType, 'mixins' | 'palette' | 'shape' | 'zIndex'>
> & {
    typography?: Partial<TypographyType>;
    breakpoints?: BreakpointsDeclarationType;
    spacing?: SpacingFunctionOrConstType;
    [k: string]: any;
};
