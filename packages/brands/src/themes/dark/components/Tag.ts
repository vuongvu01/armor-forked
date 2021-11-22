import { css } from 'styled-components';
import {
    colorBlue10,
    colorBlue20,
    colorGrey40,
    colorGrey80,
    colorGrey90,
} from '@deliveryhero/armor-system';
import { TagPropsType } from '@deliveryhero/armor';

const TAG_TYPES = {
    DEFAULT: 'default',
    APPROVED: 'approved',
    DENIED: 'denied',
    NEW: 'new',
};

const isStatusTag = (type?: TagPropsType['type']) =>
    !!type &&
    [TAG_TYPES.APPROVED, TAG_TYPES.DENIED, TAG_TYPES.NEW].includes(type);

export const TAG_DELETE_BEHAVIOUR_OPTIONS = {
    ENABLED: 'enabled',
    DISABLED: 'disabled',
    ON_HOVER: 'onHover',
};

export const getTagOverride = ({
    type,
    deleteOption,
    disabled,
}: TagPropsType) => {
    let result = css`
        .Tag-CloseIconContainer {
            color: ${colorGrey40};
            &:hover {
                background-color: ${disabled ? 'transparent' : colorBlue10};
                color: ${disabled ? colorGrey40 : colorGrey90};
            }
        }

        .Tag-Label {
            color: ${colorBlue20};
        }
    `;

    if (!isStatusTag(type)) {
        result = css`
            ${result};
            background-color: ${deleteOption ===
            TAG_DELETE_BEHAVIOUR_OPTIONS.ON_HOVER
                ? 'transparent'
                : 'rgba(146, 186, 246, 0.2)'};
            border-color: ${colorBlue20};
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
