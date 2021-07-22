import React, { forwardRef } from 'react';
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
import { useComponentTheme } from '../../../utils/hooks';
import { PrimaryIconWrapper } from '../PrimaryIconWrapper/PrimaryIconWrapper';

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
            primaryIcon,
            Tag,
            tagProps,
            primaryIconWrapper,
            primaryIconWrapperProps,
        } = useListItem(props, ref);

        return (
            <ListItemRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
                {(forwardedProps: ListItemPropsType) => (
                    <Tag {...forwardedProps} {...tagProps}>
                        <PrimaryListItem
                            {...primaryListProps}
                            theme={theme}
                            className={classNames.PrimaryListItem}
                        >
                            {primaryIcon && (
                                <PrimaryIconContainer
                                    theme={theme}
                                    className={classNames.primaryIconContainer}
                                >
                                    {!primaryIconWrapper ? (
                                        primaryIcon
                                    ) : (
                                        <PrimaryIconWrapper
                                            {...primaryIconWrapperProps}
                                            theme={theme}
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
                                theme={theme}
                                className={classNames.PrimaryListItemContainer}
                            >
                                {renderLead && (
                                    <PrimaryLeadSubtitle
                                        {...primaryLeadSubtitle}
                                        theme={theme}
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
                                        theme={theme}
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
    size: 'medium',
    divider: false,
    enableSecondaryItem: true,
    enableLink: false,
    primaryIconWrapper: false,
};

/** prop-types are required here for run-time checks */
ListItem.propTypes = {
    disabled: PropTypes.bool,
    primaryIcon: PropTypes.elementType,
    secondaryItemText: PropTypes.string,
    divider: PropTypes.bool,
    lead: PropTypes.string,
    subtitle: PropTypes.string,
    enableSecondaryItem: PropTypes.bool,
    enableLink: PropTypes.bool,
    actions: PropTypes.elementType,
    primaryIconBackgroundColor: PropTypes.string,
    primaryIconWrapper: PropTypes.bool,
};
