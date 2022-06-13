import { TAG_TYPES } from '../constants';
import { TagType } from '../type';

const isStatusTag = (type?: TagType) =>
    !!type &&
    [
        TAG_TYPES.APPROVED,
        TAG_TYPES.DENIED,
        TAG_TYPES.NEW,
        TAG_TYPES.ON_HOLD,
    ].includes(type);

export default isStatusTag;
