import { useRootRef } from '@deliveryhero/armor-system';
import { SkeletonPropsType } from '../type';
import { RefType } from '../../../type';

export const useSkeleton = <E extends HTMLElement>(
    {
        imagePlaceholder,
        width,
        height,
        rounded,
        ...restProps
    }: SkeletonPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    return {
        rootProps: {
            ...restProps,
            imagePlaceholder,
            rounded,
            width,
            height,
            ref: innerRef,
        },
        imagePlaceholder,
        enableImage: width === height,
    };
};
