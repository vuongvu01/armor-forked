import { css } from 'styled-components';

import { ScalarType } from '../type';
import { spacingBreakpoint } from '../mixins';

export type WidthPropsType = Partial<{
    /**
     * Sets CSS `width` property of the **.#COMPONENT_NAME#Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function
     * @armor-docs-group width
     */
    width: ScalarType;
    /**
     * Sets CSS `min-width` property of the **.#COMPONENT_NAME#Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function
     * @armor-docs-group width
     */
    minWidth: ScalarType;
    /**
     * Sets CSS `max-width` property of the **.#COMPONENT_NAME#Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function
     * @armor-docs-group width
     */
    maxWidth: ScalarType;
    /**
     * Being set to true, sets CSS `width` of the **.#COMPONENT_NAME#Root** element to *100%*
     * @armor-docs-group width
     */
    wide: boolean;
}>;

export type HeightPropsType = Partial<{
    /**
     * Sets CSS `height` property of the **.#COMPONENT_NAME#Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function
     * @armor-docs-group height
     */
    height: ScalarType;
    /**
     * Sets CSS `min-height` property of the **.#COMPONENT_NAME#Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function
     * @armor-docs-group height
     */
    minHeight: ScalarType;
    /**
     * Sets CSS `max-height` property of the **.#COMPONENT_NAME#Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function
     * @armor-docs-group height
     */
    maxHeight: ScalarType;
    /**
     * Being set to true, sets CSS `height` of the **.#COMPONENT_NAME#Root** element to *100%*
     * @armor-docs-group height
     */
    tall: boolean;
}>;

export type SizePropsType = WidthPropsType & HeightPropsType;

const makeCSS = (cssParameter: string, value?: ScalarType) => {
    if (typeof value !== 'undefined') {
        // this enables setting a breakpoint name as value of a size attribute
        // for instance, <Button maxWidth="sm">Foo</Button>
        return css`
            ${cssParameter}: ${spacingBreakpoint(value)};
        `;
    }

    return '';
};

export const widthProps = ({
    width,
    minWidth,
    maxWidth,
    wide,
}: WidthPropsType) => css`
    ${makeCSS('width', width)};
    ${makeCSS('min-width', minWidth)};
    ${makeCSS('max-width', maxWidth)};
    ${wide ? 'width: 100%;' : ''};
`;

export const heightProps = ({
    height,
    minHeight,
    maxHeight,
    tall,
}: HeightPropsType) => css`
    ${makeCSS('height', height)};
    ${makeCSS('min-height', minHeight)};
    ${makeCSS('max-height', maxHeight)};
    ${tall ? 'height: 100%;' : ''};
`;

export const sizeProps = (props: SizePropsType) => css`
    ${widthProps(props)};
    ${heightProps(props)};
`;

/**
 * @deprecated
 * @internal
 */
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
}: SizePropsType) => ({
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
