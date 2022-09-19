import { LINK_ICON_POSITION_MARGIN_MAP } from '../constants';

function getIconMargin(childrenCount: number, iconIndex: number) {
    const { first, last } = LINK_ICON_POSITION_MARGIN_MAP;

    const isFirst = iconIndex === 0;
    const isLast = iconIndex === childrenCount - 1;

    if (isFirst) {
        return first;
    }

    if (isLast) {
        return last;
    }

    return {};
}

export default getIconMargin;
