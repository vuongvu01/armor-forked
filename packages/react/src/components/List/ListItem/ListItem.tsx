import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useListItemClassNames } from './hooks/useListItemClassNames';
import { useListItem } from './hooks/useListItem';
import {
    ListItemRoot,
    PrimaryListItem,
    SecondaryListItem,
    ActionsContainer,
    PrimaryIconsContainer,
    PrimaryLeadSubtitle,
    PrimaryListItemContainer,
} from './style';
import { ListItemPropsType } from './type';
import { LIST_ITEM_CLASS_PREFIX } from './contants';
import { useComponentTheme } from '../../../utils/hooks';

export const ListItem = forwardRef<HTMLDivElement, ListItemPropsType>(
    function ListItem({ className, ...props }, ref) {
        const theme = useComponentTheme(LIST_ITEM_CLASS_PREFIX);
        const classNames = useListItemClassNames(
            LIST_ITEM_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            primaryListProps,
            primaryIconsContainerProps,
            primaryLeadSubtitle,
            secondaryListProps,
            renderSubtitle,
            renderLead,
            enableSecondaryItem,
            children,
            secondaryItemText,
            actions,
            lead,
            subtitle,
            enablePrimaryIcons,
            primaryIcons,
            Tag,
            tagProps,
        } = useListItem(props, ref);

        return (
            <ListItemRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
                ref={ref}
            >
                {(forwardedProps: ListItemPropsType) => (
                    <Tag {...forwardedProps} {...tagProps}>
                        <PrimaryListItem {...primaryListProps} theme={theme}>
                            {!!enablePrimaryIcons && (
                                <PrimaryIconsContainer
                                    {...primaryIconsContainerProps}
                                    theme={theme}
                                    className={classNames.PrimaryIconsContainer}
                                >
                                    {primaryIcons}
                                </PrimaryIconsContainer>
                            )}

                            <PrimaryListItemContainer
                                theme={theme}
                                className={classNames.PrimaryListItemContainer}
                            >
                                {!!renderLead && (
                                    <PrimaryLeadSubtitle
                                        {...primaryLeadSubtitle}
                                        theme={theme}
                                    >
                                        {lead}
                                    </PrimaryLeadSubtitle>
                                )}
                                {children}
                                {!!renderSubtitle && (
                                    <PrimaryLeadSubtitle
                                        {...primaryLeadSubtitle}
                                        theme={theme}
                                    >
                                        {subtitle}
                                    </PrimaryLeadSubtitle>
                                )}
                            </PrimaryListItemContainer>
                        </PrimaryListItem>
                        {!!enableSecondaryItem && (
                            <SecondaryListItem
                                {...secondaryListProps}
                                theme={theme}
                                className={classNames.SecondaryListItem}
                            >
                                {secondaryItemText}
                                {!!actions && (
                                    <ActionsContainer
                                        theme={theme}
                                        className={classNames.ActionsContainer}
                                    >
                                        {actions}
                                    </ActionsContainer>
                                )}
                            </SecondaryListItem>
                        )}
                    </Tag>
                )}
            </ListItemRoot>
        );
    },
);
ListItem.defaultProps = {
    disabled: false,
    enablePrimaryIcons: false,
    enableActions: false,
    size: 'medium',
    divider: false,
    enableSecondaryItem: true,
    enableLink: false,
};

/** prop-types are required here for run-time checks */
ListItem.propTypes = {
    disabled: PropTypes.bool,
    primaryIcons: PropTypes.elementType,
    enablePrimaryIcons: PropTypes.bool,
    enableActions: PropTypes.bool,
    secondaryItemText: PropTypes.string,
    divider: PropTypes.bool,
    lead: PropTypes.string,
    subtitle: PropTypes.string,
    enableSecondaryItem: PropTypes.bool,
    enableLink: PropTypes.bool,
    actions: PropTypes.elementType,
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
    target: PropTypes.string,
    href: PropTypes.string,
};
