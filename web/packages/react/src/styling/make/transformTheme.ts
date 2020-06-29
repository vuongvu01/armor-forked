import traverse from 'traverse';

import { ObjectLiteralType } from 'src/type';
import { ThemeType } from '../type';

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

const transformTheme = (theme: ThemeType, chunk: ObjectLiteralType) => {
    const {
        span,
        typography: { pixelToRem },
    } = theme as ThemeType;

    traverse(chunk).forEach(function transformThemeObject(value) {
        let newValue: any;
        let update = false;

        if (typeof value === 'string' && value[0] === '$') {
            newValue = theme.referenceIndex[value.substr(1)];
            update = true;
        } else {
            newValue = value;
        }

        if (this.key === 'fontSize') {
            newValue = pixelToRem(newValue);
            update = true;
        }
        if (this.key === 'fontFamily') {
            newValue = `${newValue}, sans-serif`;
            update = true;
        }
        if ((this.key as string) in spanableProperties) {
            newValue = span(newValue);
            update = true;
        }

        if (update) {
            this.update(newValue);
        }
    });

    return chunk;
};

export default transformTheme;
