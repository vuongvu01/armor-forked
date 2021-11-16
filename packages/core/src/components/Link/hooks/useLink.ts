import { LinkPropsType } from '../type';
import { RefType } from '../../../type';

export const useLink = <E extends HTMLAnchorElement>(
    { tag: Tag = 'a', children, ...restProps }: LinkPropsType,
    ref: RefType<E>,
) => {
    // put all your component logic here

    return {
        rootProps: restProps,
        Tag,
        tagProps: { ref },
        children,
    };
};
