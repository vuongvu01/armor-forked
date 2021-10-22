import { SkeletonPropsType } from '../type';
import { RefType } from '../../../type';
import { useRootRef } from '../../../system';

export const useSkeleton = <E extends HTMLElement>(
    { ...restProps }: SkeletonPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    // put all your component logic here

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
    };
};
