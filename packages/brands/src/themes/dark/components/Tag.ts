import { css } from 'styled-components';
import {
    colorBlue10,
    colorBlue20,
    colorGrey40,
    colorGrey80,
    colorGrey90,
    colorGrey00,
} from '@deliveryhero/armor-system';
import { TagPropsType } from '@deliveryhero/armor';

const TAG_TYPES = {
    DEFAULT: 'default',
    APPROVED: 'approved',
    DENIED: 'denied',
    NEW: 'new',
    ON_HOLD: 'on-hold',
};

const isStatusTag = (type?: TagPropsType['type']) =>
    !!type &&
    [
        TAG_TYPES.APPROVED,
        TAG_TYPES.DENIED,
        TAG_TYPES.NEW,
        TAG_TYPES.ON_HOLD,
    ].includes(type);

export const TAG_DELETE_BEHAVIOUR_OPTIONS = {
    ENABLED: 'enabled',
    DISABLED: 'disabled',
    ON_HOVER: 'onHover',
};

export const getTagOverride = ({ type, filled }: TagPropsType) => {
    if (filled) {
        return css`
            background-color: ${colorBlue10};

            .Tag-Label {
                color: ${colorGrey90};
            }
        `;
    }

    let result = css`
        .Tag-Label {
            color: ${colorGrey00};
        }
    `;

    if (!isStatusTag(type)) {
        result = css`
            ${result};
            border-color: ${colorBlue20};
            background-color: ${colorGrey80};
        `;
    } else {
        result = css`
            ${result};

            .Tag-Label {
                color: ${colorGrey80};
            }
        `;
    }

    return result;
};
