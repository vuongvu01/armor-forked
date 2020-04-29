import traverse from 'traverse';
import { ThemeType } from '../type';
import { ObjectLiteralType } from '../../type';

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

export const transformTheme = (theme: ThemeType, chunk: ObjectLiteralType) => {
    const {
        span,
        typography: { pixelToRem },
    } = theme as ThemeType;

    traverse(chunk).forEach(function transformThemeObject(x) {
        if (this.key === 'fontSize') {
            this.update(pixelToRem(x));
        }
        if (this.key === 'fontFamily') {
            this.update(`${x}, sans-serif`);
        }
        if ((this.key as string) in spanableProperties) {
            this.update(span(x));
        }
    });

    return chunk;
};
