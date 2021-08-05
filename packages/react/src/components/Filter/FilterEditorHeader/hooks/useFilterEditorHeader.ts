import { FilterEditorHeaderPropsType } from '../type';
import { RefType } from '../../../../type';
import { useRootRef } from '../../../../system';

export const useFilterEditorHeader = <E extends HTMLElement>(
    {
        showClearFilterButton,
        onClearFilterButtonClick,
        ...props
    }: FilterEditorHeaderPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    return {
        rootProps: {
            ...props,
            ref: innerRef,
        },
        showClearFilterButton,
        getClearFilterButtonProps: () => ({
            onClick: onClearFilterButtonClick,
        }),
    };
};
