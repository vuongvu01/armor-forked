import { useRootRef } from '@deliveryhero/armor-system';

import { ActionSheetPropsType } from '../type';
import { RefType } from '../../../type';

export const useActionSheet = <E extends HTMLElement>(
    { label, ...restProps }: ActionSheetPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
        labelContainerProps: {
            label,
        },
        label,
    };
};
