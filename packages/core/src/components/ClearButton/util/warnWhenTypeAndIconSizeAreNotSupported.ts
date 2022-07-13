import { CLEAR_BUTTON_CLASS_PREFIX } from '../constants';
import { ClearButtonPropsType } from '../type';

export const warnWhenTypeAndIconSizeAreNotSupported = (
    props: ClearButtonPropsType = {},
) => {
    const { type, iconSize } = props;

    const typeSizeMap = {
        'circle-filled': ['medium', 'large'],
        thin: ['small', 'medium'],
    };

    if (type && type in typeSizeMap) {
        if (iconSize && !typeSizeMap[type].includes(iconSize)) {
            const supportedIconSizes = typeSizeMap[type].join(', ');

            return new Error(
                `${CLEAR_BUTTON_CLASS_PREFIX}: the type "${type}" only supports the following iconSizes: ${supportedIconSizes}`,
            );
        }
    }

    return null;
};
