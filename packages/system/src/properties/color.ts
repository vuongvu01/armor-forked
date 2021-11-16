import { css } from 'styled-components';
import { replaceThemeToken } from '../theme/replaceThemeToken';
import { ThemeType } from '../theme';
import { CSSChunkType } from '../type';

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
}>;

const replaceColor = (colorName: string, theme: ThemeType) => {
    if (colorName.startsWith('$')) {
        return replaceThemeToken(colorName, theme).value;
    }

    const prefixedColorName = `$color.${colorName}`;
    if (prefixedColorName in theme.referenceIndex) {
        return theme.referenceIndex[prefixedColorName];
    }

    return colorName;
};

export const colorProps = ({
    color,
    hoverColor,
    theme,
}: ColorPropsType & { theme: ThemeType }): CSSChunkType => css`
    ${color !== undefined && `color: ${replaceColor(color, theme)};`}
    ${hoverColor !== undefined &&
        `&:hover { color: ${replaceColor(hoverColor, theme)}; }`}
`;
