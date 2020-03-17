import { ObjectLiteral } from '../type';

type Scalar = string | number;
type Spacing = (value: Scalar) => Scalar;
type SpacingOrConst = Spacing | number;
type ZIndex = ObjectLiteral<number>;
type Palette = ObjectLiteral<string | ObjectLiteral<string>>;
type Shadows = string[];
type Shape = {
    borderRadius?: string;
};

interface Breakpoints {
    keys: string[];
    values: ObjectLiteral<string>;
    up: () => {}; // todo
    down: () => {}; // todo
    between: () => {}; // todo
    only: () => {}; // todo
    width: () => {}; // todo
}
type Mixins = ObjectLiteral<(...args: any[]) => any>;
interface Typography {
    htmlFontSize: number;
    fontFamily: string;
    fontSize: number;
}

// it tries to be compatible with https://material-ui.com/customization/default-theme/
export interface Theme {
    breakpoints: Breakpoints;
    mixins: Mixins;
    palette: Palette;
    shadows: Shadows;
    typography: Typography;
    spacing: Spacing;
    shape: Shape;
    zIndex: ZIndex;
    [k: string]: any;
}

export type ThemeDeclaration = Partial<
    Pick<Theme, 'mixins' | 'palette' | 'shape' | 'zIndex'>
> & {
    breakpoints?: Pick<Breakpoints, 'values'>;
    spacing?: SpacingOrConst;
    [k: string]: any;
};
