import traverse from 'traverse';
import { ThemeType } from '../type';
import { ObjectLiteralType } from '../../type';
import { replaceThemeToken } from '../../system/util/replaceThemeToken';
import { consoleWarn } from '../../system/util/consoleWarn';

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

const prependKeys = (dst: ObjectLiteralType, src: ObjectLiteralType) => {
    const tmp = { ...dst };
    // eslint-disable-next-line no-param-reassign
    Object.keys(dst).forEach(key => delete dst[key]);

    Object.keys(src).forEach(key => {
        // eslint-disable-next-line no-param-reassign
        dst[key] = src[key];
    });
    Object.keys(tmp).forEach(key => {
        // eslint-disable-next-line no-param-reassign
        dst[key] = tmp[key];
    });
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
        this.before(() => {
            if (this.node && this.node.$typography) {
                const typographyKey = this.node.$typography;
                delete this.node.$typography;

                if (
                    typographyKey in theme.typography ||
                    typographyKey === '$inherit'
                ) {
                    if (Array.isArray(this.keys)) {
                        const source =
                            typographyKey in theme.typography
                                ? theme.typography[typographyKey]
                                : {
                                      fontFamily: 'inherit',
                                      fontSize: 'inherit',
                                      fontWeight: 'inherit',
                                      letterSpacing: 'inherit',
                                      lineHeight: 'inherit',
                                      color: 'inherit',
                                  };

                        prependKeys(this.node, source);
                        this.keys = [...Object.keys(source), ...this.keys];
                    }
                } else {
                    consoleWarn(
                        `Unknown typography alias "${typographyKey}" was ignored at ${
                            prefix ? `${prefix}.` : ''
                        }${this.path.join('.')}`,
                    );
                }
            }
        });

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
        if (
            this.key === 'fontFamily' &&
            newValue !== 'inherit' &&
            newValue !== 'initial'
        ) {
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
