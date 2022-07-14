import { ClearButtonType } from '../ClearButton';
import { ClearButtonIconSize } from '../ClearButton/type';

export const TAG_CLASS_PREFIX = 'Tag';

export const TAG_TYPES = {
    DEFAULT: 'default',
    APPROVED: 'approved',
    DENIED: 'denied',
    NEW: 'new',
    ON_HOLD: 'on-hold',
};

export const TAG_DELETE_BEHAVIOUR_OPTIONS = {
    ENABLED: 'enabled',
    DISABLED: 'disabled',
    ON_HOVER: 'onHover',
};

export const TAG_STATUS_LABELS = {
    APPROVED: 'Approved',
    DENIED: 'Denied',
    NEW: 'New',
    ON_HOLD: 'On Hold',
};

export const TAG_CLEAR_BUTTON_PROPS_MAP: Record<
    string,
    {
        type: ClearButtonType;
        iconSize: ClearButtonIconSize;
    }
> = {
    [TAG_DELETE_BEHAVIOUR_OPTIONS.ENABLED]: {
        type: 'thin',
        iconSize: 'small',
    },
    [TAG_DELETE_BEHAVIOUR_OPTIONS.ON_HOVER]: {
        type: 'circle-filled',
        iconSize: 'large',
    },
};

export const tagRoot = 'TagRoot';
export const tagCloseIconContainer = 'TagCloseIconContainer';
