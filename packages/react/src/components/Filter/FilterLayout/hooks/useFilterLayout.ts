import { FilterLayoutPropsType } from '../type';
import { RefType } from '../../../../type';
import { useControlledState, useRootRef } from '../../../../system';

export const useFilterLayout = <E extends HTMLElement>(
    {
        filterEditor,
        filterOpen,
        defaultFilterOpen,
        onFilterOpenChange,
        ...restProps
    }: FilterLayoutPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    const [reallyOpen, setReallyOpen] = useControlledState<boolean>(
        defaultFilterOpen,
        filterOpen,
        onFilterOpenChange,
    );

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
        filterEditor,
        leftBarProps: {
            open: reallyOpen,
        },
    };
};
