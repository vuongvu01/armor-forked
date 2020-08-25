import { TAG_STATUS_LABELS, TAG_TYPES } from '../constants';
import { TagType } from '../type';

const getStatusTagLabel = (type: TagType) => {
    switch (type) {
        case TAG_TYPES.APPROVED:
            return TAG_STATUS_LABELS.APPROVED;
        case TAG_TYPES.DENIED:
            return TAG_STATUS_LABELS.DENIED;
        case TAG_TYPES.NEW:
            return TAG_STATUS_LABELS.NEW;
        default:
            return '';
    }
};

export default getStatusTagLabel;
