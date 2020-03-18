import { ObjectLiteralType, ScalarType } from '../type';

type SpacingFunctionType = (value: ScalarType) => ScalarType;
type SpacingFunctionOrConstType = SpacingFunctionType | number;
type ZIndexType = ObjectLiteralType<number>;
type PaletteType = ObjectLiteralType<string | ObjectLiteralType<string>>;
type ShadowsType = string[];
type ShapeType = {
    borderRadius?: string;
};

type BreakpointsType = {
    keys: string[];
    values: ObjectLiteralType<string>;
    up: () => {}; // todo
    down: () => {}; // todo
    between: () => {}; // todo
    only: () => {}; // todo
    width: () => {}; // todo
};
type MixinsType = ObjectLiteralType<(...args: any[]) => any>;
type TypographyType = {
    htmlFontSize: number;
    fontFamily: string;
    fontSize: number;
};

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
    breakpoints?: Pick<BreakpointsType, 'values'>;
    spacing?: SpacingFunctionOrConstType;
    [k: string]: any;
};
