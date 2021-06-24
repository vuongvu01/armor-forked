import { ListItemPropsType } from '../type';
import { RefType } from '../../../../type';
import { useRootRef } from '../../../../system';

export const useListItem = <E extends HTMLDivElement>(
    {
        children,
        disabled,
        primaryIcons,
        enablePrimaryIcons,
        actions,
        enableActions,
        secondaryItemText,
        size,
        href,
        target,
        to,
        backgroundColor,
        divider,
        lead,
        subtitle,
        enableLink,
        enableSecondaryItem,
        tag,
        ...restProps
    }: ListItemPropsType,
    ref: RefType<E>,
) => {
    // put all your component logic here
    const innerRef = useRootRef<E>(ref);

    return {
        rootProps: {
            ...restProps,
            size,
            lead,
            subtitle,
            divider,
            disabled,
            ref,
            enableLink,
        },
        primaryListProps: { disabled },
        secondaryListProps: {
            lead,
            subtitle,
            disabled,
        },
        primaryIconsContainerProps: { backgroundColor },
        primaryLeadSubtitle: {
            lead,
            subtitle,
            disabled,
        },
        renderSubtitle: !!subtitle && !lead,
        renderLead: !!lead,
        lead,
        subtitle,
        secondaryItemText,
        enableActions: !!actions,
        actions,
        children,
        enablePrimaryIcons: !!primaryIcons,
        primaryIcons,
        enableSecondaryItem,
        tagProps: {
            ref: innerRef,
            tag,
            href,
            target,
        },
        Tag: enableLink && !disabled ? 'a' : 'div',
    };
};
