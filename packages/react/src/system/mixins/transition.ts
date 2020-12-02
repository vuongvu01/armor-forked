import { ObjectLiteralType } from '../../type';
import { RootThemeType, ThemeType } from '../../styling';
import { transitionDurationInSec } from '../../constants';

export const transition = (transitions: ObjectLiteralType<boolean>) => ({
    theme,
}: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    return `transition: ${Object.keys(transitions)
        .map(property => {
            // todo: support different options here, like timing and duration
            return `${property} ${transitionDurationInSec}s ease`;
        })
        .join(',')};`;
};
