import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useListItemClassNames } from './hooks/useListItemClassNames';
import { useListItem } from './hooks/useListItem';
import {
    ListItemRoot,
    PrimaryListItem,
    SecondaryListItem,
    ActionsContainer,
    PrimaryIconContainer,
    PrimaryLeadSubtitle,
    PrimaryListItemContainer,
} from './style';
import { ListItemPropsType } from './type';
import { LIST_ITEM_CLASS_PREFIX } from './contants';
import { PrimaryIconWrapper } from '../PrimaryIconWrapper/PrimaryIconWrapper';

/**
 * # ListItem
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/220cd6-list/b/76988e)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { List, ListItem } from '@deliveryhero/armor';
 *
 * <List>
 *     <ListItem enableSecondaryItem={false}>Primary Only</ListItem>
 *     <ListItem secondaryItemText='Secondary Text'>Primary and Secondary</ListItem>
 *     <ListItem divider={true} secondaryItemText='Secondary Text'>With divider</ListItem>
 *     <ListItem disabled={true} secondaryItemText='Secondary Text'>Disabled</ListItem>
 * </List>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const ListItem = forwardRef<HTMLDivElement, ListItemPropsType>(
    function ListItem({ className, ...props }, ref) {
        const classNames = useListItemClassNames(
            LIST_ITEM_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            primaryListProps,
            primaryLeadSubtitle,
            secondaryListProps,
            actionsContainerProps,
            renderSubtitle,
            renderLead,
            enableSecondaryItem,
            children,
            secondaryItemText,
            actions,
            lead,
            subtitle,
            primaryIcon,
            Tag,
            tagProps,
            primaryIconWrapper,
            primaryIconWrapperProps,
        } = useListItem(props, ref);

        return (
            <ListItemRoot {...rootProps} className={classNames.Root}>
                {(forwardedProps: ListItemPropsType) => (
                    <Tag {...forwardedProps} {...tagProps}>
                        <PrimaryListItem
                            {...primaryListProps}
                            className={classNames.PrimaryListItem}
                        >
                            {primaryIcon && (
                                <PrimaryIconContainer
                                    className={classNames.PrimaryIconContainer}
                                >
                                    {!primaryIconWrapper ? (
                                        primaryIcon
                                    ) : (
                                        <PrimaryIconWrapper
                                            {...primaryIconWrapperProps}
                                            className={
                                                classNames.PrimaryIconWrapper
                                            }
                                        >
                                            {primaryIcon}
                                        </PrimaryIconWrapper>
                                    )}
                                </PrimaryIconContainer>
                            )}

                            <PrimaryListItemContainer
                                className={classNames.PrimaryListItemContainer}
                            >
                                {renderLead && (
                                    <PrimaryLeadSubtitle
                                        {...primaryLeadSubtitle}
                                        className={
                                            classNames.PrimaryLeadSubtitle
                                        }
                                    >
                                        {lead}
                                    </PrimaryLeadSubtitle>
                                )}
                                {children}
                                {renderSubtitle && (
                                    <PrimaryLeadSubtitle
                                        {...primaryLeadSubtitle}
                                        className={
                                            classNames.PrimaryLeadSubtitle
                                        }
                                    >
                                        {subtitle}
                                    </PrimaryLeadSubtitle>
                                )}
                            </PrimaryListItemContainer>
                        </PrimaryListItem>
                        {!!enableSecondaryItem && (
                            <SecondaryListItem
                                {...secondaryListProps}
                                className={classNames.SecondaryListItem}
                            >
                                {secondaryItemText}
                                {!!actions && (
                                    <ActionsContainer
                                        {...actionsContainerProps}
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
    size: 'medium',
    divider: false,
    enableSecondaryItem: true,
    enableLink: false,
    primaryIconWrapper: false,
};

/** prop-types are required here for run-time checks */
ListItem.propTypes = {
    disabled: PropTypes.bool,
    primaryIcon: PropTypes.node,
    secondaryItemText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    divider: PropTypes.bool,
    lead: PropTypes.string,
    subtitle: PropTypes.string,
    enableSecondaryItem: PropTypes.bool,
    enableLink: PropTypes.bool,
    actions: PropTypes.node,
    primaryIconBackgroundColor: PropTypes.string,
    primaryIconWrapper: PropTypes.bool,
};

export const MemoizedListItem = memo(ListItem);
