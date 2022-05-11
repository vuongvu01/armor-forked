import { LinkPropsType } from '../type';
import { RefType } from '../../../type';

export const useLink = <E extends HTMLAnchorElement>(
    { tag: Tag = 'a', disabled, children, ...restProps }: LinkPropsType,
    ref: RefType<E>,
) => {
    return {
        rootProps: {
            disabled,
            tabIndex: disabled ? -1 : 0,
            ...restProps,
        },
        Tag,
        tagProps: { ref },
        children,
    };
};
