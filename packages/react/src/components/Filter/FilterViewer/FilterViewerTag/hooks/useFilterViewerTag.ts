import { useMemo } from 'react';
import { FilterViewerTagPropsType } from '../type';
import { RefType } from '../../../../../type';
import { useRootRef } from '../../../../../system';

export const useFilterViewerTag = <E extends HTMLElement>(
    {
        label,
        value,
        onCloseButtonClick,
        path,
        ...restProps
    }: FilterViewerTagPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    const [valueHead, valueTail] = useMemo(() => {
        const fullValue = Array.isArray(value) ? value : [value];
        if (fullValue.length > 2) {
            const head = fullValue.splice(0, 2);
            return [head, fullValue];
        }

        return [fullValue, []];
    }, [value]);

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
        closeButtonProps: {
            onClick: onCloseButtonClick,
            'data-path': path,
        },
        label,
        valueHead,
        valueTail,
        hasTail: !!valueTail.length,
        tailLength: valueTail.length,
    };
};
