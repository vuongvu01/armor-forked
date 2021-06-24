import { ActionSheetPropsType } from '../type';
import { RefType } from '../../../type';
import { useRootRef } from '../../../system';

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
