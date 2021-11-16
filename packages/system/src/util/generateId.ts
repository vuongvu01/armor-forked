import uniqueId from 'lodash/uniqueId';

export const generateId = (propsId?: string, idPrefix?: string): string =>
    propsId || uniqueId(idPrefix);
