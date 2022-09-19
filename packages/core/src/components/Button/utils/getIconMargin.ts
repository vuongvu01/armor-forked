import { BUTTON_ICON_POSITION_MARGIN_MAP } from '../constants';

function getIconMargin(childrenCount: number, iconIndex: number) {
    const { first, last, single } = BUTTON_ICON_POSITION_MARGIN_MAP;

    const isSingleChild = childrenCount === 1;

    const isFirst = !isSingleChild && iconIndex === 0;

    const isLast = !isSingleChild && iconIndex === childrenCount - 1;

    if (isFirst) {
        return first;
    }

    if (isLast) {
        return last;
    }

    if (isSingleChild) {
        return single;
    }

    return {};
}

export default getIconMargin;
