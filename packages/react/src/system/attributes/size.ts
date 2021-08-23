import { ThemeType } from '../../styling';
import { ScalarType } from '../../type';

export type WidthAttributesType = {
    /**
     * Sets CSS `width` property of the **.#COMPONENT_NAME#Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function
     * @armor-docs-group width
     */
    width?: ScalarType;
    /**
     * Sets CSS `min-width` property of the **.#COMPONENT_NAME#Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function
     * @armor-docs-group width
     */
    minWidth?: ScalarType;
    /**
     * Sets CSS `max-width` property of the **.#COMPONENT_NAME#Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function
     * @armor-docs-group width
     */
    maxWidth?: ScalarType;
    /**
     * Being set to true, sets CSS `width` of the **.#COMPONENT_NAME#Root** element to *100%*
     * @armor-docs-group width
     */
    wide?: boolean;
};

export type HeightAttributesType = {
    /**
     * Sets CSS `height` property of the **.#COMPONENT_NAME#Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function
     * @armor-docs-group height
     */
    height?: ScalarType;
    /**
     * Sets CSS `min-height` property of the **.#COMPONENT_NAME#Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function
     * @armor-docs-group height
     */
    minHeight?: ScalarType;
    /**
     * Sets CSS `max-height` property of the **.#COMPONENT_NAME#Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function
     * @armor-docs-group height
     */
    maxHeight?: ScalarType;
    /**
     * Being set to true, sets CSS `height` of the **.#COMPONENT_NAME#Root** element to *100%*
     * @armor-docs-group height
     */
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
