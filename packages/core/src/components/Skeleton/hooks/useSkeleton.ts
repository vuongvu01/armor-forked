import { useRootRef } from '@deliveryhero/armor-system';
import { SkeletonPropsType } from '../type';
import { RefType } from '../../../type';

export const useSkeleton = <E extends HTMLElement>(
    {
        imagePlaceholder: baseImagePlaceholder,
        width,
        height,
        rounded,
        ...restProps
    }: SkeletonPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    const isImagePlaceholder = Boolean(baseImagePlaceholder);

    const isEqualSize = width === height;

    return {
        rootProps: {
            ...restProps,
            rounded,
            width,
            height,
            ref: innerRef,
        },
        imagePlaceholder:
            isImagePlaceholder && isEqualSize
                ? baseImagePlaceholder
                : undefined,
    };
};
