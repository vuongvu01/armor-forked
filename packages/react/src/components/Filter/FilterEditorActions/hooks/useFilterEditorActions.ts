import { FilterEditorActionsPropsType } from '../type';
import { RefType } from '../../../../type';
import { useRootRef } from '../../../../system';

export const useFilterEditorActions = <E extends HTMLElement>(
    {
        showCloseButton,
        onCloseButtonClick,
        onApplyFilterButtonClick,
        ...restProps
    }: FilterEditorActionsPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    // put all your component logic here

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
        showCloseButton: !!showCloseButton,
        getCloseButtonProps: () => ({
            onClick: onCloseButtonClick,
        }),
        applyFilterButtonProps: {
            onClick: onApplyFilterButtonClick,
        },
    };
};
