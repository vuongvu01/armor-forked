import { TAG_STATUS_LABELS, TAG_TYPES } from '../constants';
import { TagType } from '../type';

const getStatusTagLabel = (type?: TagType) => {
    switch (type) {
        case TAG_TYPES.APPROVED:
            return TAG_STATUS_LABELS.APPROVED;
        case TAG_TYPES.DENIED:
            return TAG_STATUS_LABELS.DENIED;
        case TAG_TYPES.NEW:
            return TAG_STATUS_LABELS.NEW;
        case TAG_TYPES.ON_HOLD:
            return TAG_STATUS_LABELS.ON_HOLD;
        default:
            return undefined;
    }
};

export default getStatusTagLabel;
