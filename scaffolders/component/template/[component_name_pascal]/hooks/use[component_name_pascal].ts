import { useRootRef } from '@deliveryhero/armor-system';

import { <%- component_name_pascal %>PropsType } from '../type';
import { RefType } from '../../../type';

export const use<%- component_name_pascal %> = <E extends HTMLElement>(props: <%- component_name_pascal %>PropsType, ref: RefType<E>) => {
    const innerRef = useRootRef<E>(ref);

    // TODO: put your component logic here and remove comment

    return {
        rootProps: {
            ...props,
            ref: innerRef,
        },
    };
};
