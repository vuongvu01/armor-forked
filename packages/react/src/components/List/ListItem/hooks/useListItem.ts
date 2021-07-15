import { ListItemPropsType } from '../type';
import { RefType } from '../../../../type';
import { useRootRef } from '../../../../system';

export const useListItem = <E extends HTMLDivElement>(
    {
        children,
        disabled,
        primaryIcon,
        actions,
        secondaryItemText,
        size,
        href,
        target,
        rel,
        primaryIconBackgroundColor,
        divider,
        lead,
        subtitle,
        enableLink,
        enableSecondaryItem,
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
        actions,
        children,
        enablePrimaryIcon: !!primaryIcon,
        primaryIcon,
        enableSecondaryItem,
        tagProps: {
            ref: innerRef,
            href,
            target,
            rel,
        },
        Tag: enableLink && !disabled ? 'a' : 'div',
        primaryIconBackgroundColor,
        primaryIconWrapper: (lead || subtitle) && primaryIconBackgroundColor,
        disabled,
        primaryIconWrapperProps: {
            disabled,
            primaryIconBackgroundColor,
            primaryIcon,
        },
    };
};
