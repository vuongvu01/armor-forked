import { css } from 'styled-components';
import { CSSChunkType } from '../type';
import { colorToken } from '../mixins';

export type ColorPropsType = Partial<{
    /**
     * Sets *CSS* `color` property of **.#COMPONENT_NAME#-Root** element. Can accept:
     *  * a hex code
     *  * a Level-2 color token from a theme
     *  * the _inherit_ keyword.
     *
     *  ~~~typescript example
     *  <Typography color="primary.main">Hello</Typography>
     *  ~~~
     *
     *  ~~~typescript example
     *  <span style={{color: 'red', backgroundColor: 'black'}}>
     *      <Typography color="inherit">Back in black and red</Typography>
     *  </span>
     *  ~~~
     *
     * @armor-docs-group color
     */
    color: string;
    /**
     * Sets *CSS* `color` property of **.#COMPONENT_NAME#-Root** element on *hover* state. Can accept either a color `hex code`, or a Level-2 color token from a theme. Example: `color="primary.main"` will produce `color: #0b53bf`
     * @armor-docs-group color
     */
    hoverColor: string;
    /**
     * Sets *CSS* `backgroundColor` property of **.#COMPONENT_NAME#-Root** element.
     * @armor-docs-group color
     */
    backgroundColor: string;
}>;

export const colorProps = ({
    color: textColor,
    hoverColor,
    backgroundColor,
}: ColorPropsType): CSSChunkType => css`
    ${textColor !== undefined &&
    css`
        color: ${colorToken(textColor)};
    `}
    ${backgroundColor !== undefined &&
    css`
        background-color: ${colorToken(backgroundColor)};
    `}
    ${hoverColor !== undefined &&
    css`
        &:hover {
            color: ${colorToken(hoverColor)};
        }
    `}
`;
