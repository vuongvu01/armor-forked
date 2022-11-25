import { MENU_ELEMENT_DEFAULT_TYPOGRAPHY_PROPS } from '../constants';
import { MenuElementPropsType } from '../type';

const preventDefault = (event: React.SyntheticEvent) => {
    event.preventDefault();
};

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
    disabled,
    typographyProp = MENU_ELEMENT_DEFAULT_TYPOGRAPHY_PROPS,
    ...restProps
}: MenuElementPropsType) => {
    const dataExpanded = expanded ? '1' : '0';
    const dataSelected = selected ? '1' : '0';

    const onClick = disabled ? preventDefault : restProps?.onClick;

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
            disabled,
            small,
            typographyProp,
            'data-expanded': dataExpanded,
            'data-selected': dataSelected,
            onClick,
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
