import { ThemeType } from './index';
import { ScalarType } from '../type';
import { consoleWarn } from '../util/consoleWarn';

/** @deprecated */
export const replaceThemeToken = (
    currentValue: ScalarType,
    theme: ThemeType,
    prefix?: string,
    where?: string[],
) => {
    let updated = false;
    let value = currentValue;

    if (typeof currentValue === 'string' && currentValue[0] === '$') {
        if (currentValue in theme.referenceIndex) {
            value = theme.referenceIndex[currentValue];
            updated = true;
        } else {
            consoleWarn(
                `Was not able to replace token "${currentValue}"${
                    where
                        ? ` at ${prefix ? `${prefix}.` : ''}${where.join('.')}`
                        : ''
                }`,
            );
        }
    }

    return { value, updated };
};
