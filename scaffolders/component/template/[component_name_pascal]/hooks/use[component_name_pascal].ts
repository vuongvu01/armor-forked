import { <%- component_name_pascal %>PropsType } from '../type';
import { RefType } from '../../../type';
import { useRootRef } from '../../../system';

export const use<%- component_name_pascal %> = <E extends HTMLElement>({ exampleProperty, ...restProps }: <%- component_name_pascal %>PropsType, ref: RefType<E>) => {
    const innerRef = useRootRef<E>(ref);

    // put all your component logic here

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
    };
};
