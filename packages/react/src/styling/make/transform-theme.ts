import traverse from 'traverse';
import { ThemeType } from '../type';
import { ObjectLiteralType } from '../../type';
import { replaceThemeToken } from '../../system/util/replaceThemeToken';

const spanableProperties = {
    padding: true,
    paddingLeft: true,
    paddingRight: true,
    paddingTop: true,
    paddingBottom: true,
    margin: true,
    marginLeft: true,
    marginRight: true,
    marginTop: true,
    marginBottom: true,
    top: true,
    bottom: true,
    left: true,
    right: true,
    height: true,
    minHeight: true,
    maxHeight: true,
    width: true,
    minWidth: true,
    maxWidth: true,

    // todo: hardcoded for now, but use an expression like "span(16)" later
    safeMargin: true,
};

export const transformTheme = (
    theme: ThemeType,
    chunk: ObjectLiteralType,
    prefix?: string,
) => {
    const {
        span,
        typography: { pixelToRem },
    } = theme as ThemeType;

    traverse(chunk).forEach(function transformThemeObject(value) {
        let { value: newValue, updated } = replaceThemeToken(
            value,
            theme,
            prefix,
            this.path,
        );

        if (this.key === 'fontSize' || this.key === 'lineHeight') {
            newValue = pixelToRem(newValue);
            updated = true;
        }
        if (this.key === 'fontFamily') {
            newValue = `${newValue}, sans-serif`;
            updated = true;
        }
        if ((this.key as string) in spanableProperties) {
            newValue = span(newValue);
            updated = true;
        }

        if (updated) {
            this.update(newValue);
        }
    });

    return chunk;
};
