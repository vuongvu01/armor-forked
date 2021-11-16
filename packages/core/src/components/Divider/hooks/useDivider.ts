import { useRootRef } from '@deliveryhero/armor-system';

import { DividerPropsType } from '../type';
import { RefType } from '../../../type';

export const useDivider = <E extends HTMLElement>(
    { horizontal, vertical, ...restProps }: DividerPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    return {
        rootProps: {
            ...restProps,
            horizontal,
            vertical,
            ref: innerRef,
        },
    };
};
