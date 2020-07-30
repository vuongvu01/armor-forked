import uniqueId from 'lodash.uniqueid';

const generateId = (propsId?: string, idPrefix?: string) =>
    propsId || uniqueId(idPrefix);

export default generateId;
