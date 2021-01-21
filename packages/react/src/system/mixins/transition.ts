import { ObjectLiteralType } from '../../type';
import { RootThemeType, ThemeType } from '../../styling';
import { transitionDurationInSec } from '../../constants';

export const transition = (
    transitions: ObjectLiteralType<boolean | number>,
) => ({ theme }: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    return `transition: ${Object.keys(transitions)
        .map(property => {
            const transitionOption = transitions[property];
            let duration = `${transitionDurationInSec}s`;
            if (typeof transitionOption === 'number') {
                duration = `${transitionOption}s`;
            }

            // todo: support different options here, like timing and duration
            return `${property} ${duration} ease`;
        })
        .join(',')};`;
};
