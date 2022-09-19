import { MENU_ELEMENT_DEFAULT_TYPOGRAPHY_PROPS } from '../constants';
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
    typographyProp = MENU_ELEMENT_DEFAULT_TYPOGRAPHY_PROPS,
    ...restProps
}: MenuElementPropsType) => {
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
            typographyProp,
            'data-expanded': dataExpanded,
            'data-selected': dataSelected,
        },
        contentProps: {
            small: !!small,
            ...typographyProp,
        },
        getExpansionHandleArrowProps: () => ({
            expanded,
        }),

        Tag,
        enableExpansionHandle,
    };
};
