import { ThemeType } from '../../styling';
import { ScalarType } from '../../type';

export type WidthAttributesType = {
    width?: ScalarType;
    minWidth?: ScalarType;
    maxWidth?: ScalarType;
    wide?: boolean;
};

export type HeightAttributesType = {
    height?: ScalarType;
    minHeight?: ScalarType;
    maxHeight?: ScalarType;
    tall?: boolean;
};

export type SizeAttributesType = WidthAttributesType & HeightAttributesType;

type WidthPropertiesType = { theme: ThemeType } & WidthAttributesType;
type HeightPropertiesType = { theme: ThemeType } & HeightAttributesType;
type PropertiesType = { theme: ThemeType } & SizeAttributesType;

export const widthAttributesList = {
    width: true,
    minWidth: true,
    maxWidth: true,
    wide: true,
};

export const heightAttributesList = {
    height: true,
    minHeight: true,
    maxHeight: true,
    tall: true,
};

export const sizeAttributesList = {
    ...heightAttributesList,
    ...widthAttributesList,
};

const makeCSS = (
    theme: ThemeType,
    cssParameter: string,
    value?: ScalarType,
) => {
    if (typeof value !== 'undefined') {
        // this enables setting a breakpoint name as value of a size attribute
        // for instance, <Button maxWidth="sm">Foo</Button>
        return `${cssParameter}: ${theme.breakpoints.mapCodeToValue(
            value,
            theme.spacing,
        )};`;
    }

    return '';
};

export const widthAttributes = ({
    theme,
    width,
    minWidth,
    maxWidth,
    wide,
}: WidthPropertiesType) => `
    ${makeCSS(theme, 'width', width)}
    ${makeCSS(theme, 'min-width', minWidth)}
    ${makeCSS(theme, 'max-width', maxWidth)}
    ${wide ? 'width: 100%;' : ''}
`;

export const heightAttributes = ({
    theme,
    height,
    minHeight,
    maxHeight,
    tall,
}: HeightPropertiesType) => `
    ${makeCSS(theme, 'height', height)}
    ${makeCSS(theme, 'min-height', minHeight)}
    ${makeCSS(theme, 'max-height', maxHeight)}
    ${tall ? 'height: 100%;' : ''}
`;

export const sizeAttributes = (props: PropertiesType) => `
    ${widthAttributes(props)}
    ${heightAttributes(props)}
`;
