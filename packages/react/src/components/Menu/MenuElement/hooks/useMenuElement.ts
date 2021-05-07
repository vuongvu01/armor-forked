import { MenuElementPropsType } from '../type';

export const useMenuElement = ({
    enableExpansionHandle,
    expanded,
    primary,
    secondary,
    tertiary,
    small,
    depthLevel,
    tag: Tag = 'div',
    selected,
    ...restProps
}: MenuElementPropsType) => {
    // const ariaExpanded = expanded ? 'true' : 'false';
    const dataExpanded = expanded ? '1' : '0';
    const dataSelected = selected ? '1' : '0';

    return {
        rootProps: {
            ...restProps,
            primary,
            secondary,
            tertiary,
            depthLevel,
            enableExpansionHandle,
            expanded,
            selected,
            small,
            // 'aria-expanded': ariaExpanded,
            'data-expanded': dataExpanded,
            'data-selected': dataSelected,
        },
        contentProps: {
            small: !!small,
        },
        getExpansionHandleProps: () => ({
            primary,
            secondary,
            tertiary,
            depthLevel,
        }),
        getExpansionHandleArrowProps: () => ({
            expanded,
        }),

        Tag,
        enableExpansionHandle,
    };
};
