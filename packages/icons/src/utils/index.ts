import { ReactText } from 'react';
import { ObjectLiteral } from '../type';
import { marginAttributesList } from '../system/attributes/margin';

const systemAttributeList = {
    ...marginAttributesList,
    theme: true,
};

/**
 * @internal
 */
export const shouldForwardProp = (
    property: ReactText,
    componentPropertyList: ObjectLiteral = {},
) => !(property in componentPropertyList) && !(property in systemAttributeList);
