import { ThemePropertyType } from '../theme';

export const expansion =
    (degree = 180) =>
    ({
        expanded,
    }: {
        expanded?: boolean;
        theme?: ThemePropertyType;
    }): string => {
        if (expanded) {
            return `transform: rotate(${degree}deg);`;
        }

        return '';
    };
