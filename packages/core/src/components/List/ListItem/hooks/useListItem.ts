import { useRootRef } from '@deliveryhero/armor-system';

import { ListItemPropsType } from '../type';
import { RefType } from '../../../../type';

export const useListItem = <E extends HTMLDivElement>(
    {
        children,
        disabled,
        inactive,
        tag,
        to,
        primaryIcon,
        actions,
        secondaryItemText = inactive ? 'Inactive' : '',
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
    const innerRef = useRootRef<E>(ref);

    const Tag = enableLink && (!disabled || inactive) ? tag ?? 'a' : 'div';

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
            inactive,
        },
        primaryListProps: { disabled, inactive },
        actionsContainerProps: { disabled, inactive },
        secondaryListProps: {
            lead,
            subtitle,
            disabled,
            inactive,
        },
        primaryLeadSubtitle: {
            lead,
            subtitle,
            disabled,
            inactive,
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
            to,
        },
        Tag,
        primaryIconBackgroundColor,
        primaryIconWrapper: (lead || subtitle) && primaryIconBackgroundColor,
        primaryIconWrapperProps: {
            disabled,
            primaryIconBackgroundColor,
            primaryIcon,
        },
    };
};
