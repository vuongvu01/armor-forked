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

type WidthPropsType = { theme: ThemeType } & WidthAttributesType;
type HeightPropsType = { theme: ThemeType } & HeightAttributesType;
type SizePropsType = { theme: ThemeType } & SizeAttributesType;

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
}: WidthPropsType) => `
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
}: HeightPropsType) => `
    ${makeCSS(theme, 'height', height)}
    ${makeCSS(theme, 'min-height', minHeight)}
    ${makeCSS(theme, 'max-height', maxHeight)}
    ${tall ? 'height: 100%;' : ''}
`;

export const sizeAttributes = (props: SizePropsType) => `
    ${widthAttributes(props)}
    ${heightAttributes(props)}
`;

export const extractSizeProps = ({
    width,
    minWidth,
    maxWidth,
    wide,
    height,
    minHeight,
    maxHeight,
    tall,
    ...restSizeProps
}: SizeAttributesType) => ({
    restSizeProps,
    sizeProps: {
        width,
        minWidth,
        maxWidth,
        wide,
        height,
        minHeight,
        maxHeight,
        tall,
    },
});
