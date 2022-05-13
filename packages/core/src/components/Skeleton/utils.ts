import { ScalarType } from '@deliveryhero/armor-system';
import {
    SKELETON_DISPLAY_LARGE_IMAGE_PLACEHOLDER_THRESHOLD,
    SKELETON_IMAGE_PLACEHOLDER_SIZE_MAP,
} from './constants';

export const getIconSize = (rootSize?: ScalarType) => {
    const size =
        typeof rootSize === 'string' ? parseInt(rootSize, 10) : rootSize;

    const { large, small } = SKELETON_IMAGE_PLACEHOLDER_SIZE_MAP;

    if (!size || size > SKELETON_DISPLAY_LARGE_IMAGE_PLACEHOLDER_THRESHOLD) {
        return large;
    }

    return small;
};
