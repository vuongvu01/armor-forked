import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useEmptyStateClassNames } from './hooks/useEmptyStateClassNames';
import { useEmptyState } from './hooks/useEmptyState';
import {
    EmptyStateTitle,
    EmptyStateRoot,
    EmptyStateDescription,
    EmptyStateActionContainer,
    EmptyStateHorizontalLayout,
    EmptyStateVerticalLayout,
    EmptyStateContainer,
    EmptyStateImageContainer,
} from './style';
import { EmptyStatePropsType } from './type';
import { EmptyStateIllustration } from './EmptyStateIllustration';
import { Indicator } from '../Indicator';

import { EMPTY_STATE_CLASS_PREFIX } from './constants';

/**
 * # EmptyState
 *
 * Used to convey a message to the user when there's no content
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/612512-empty-state/b/61ff10)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { EmptyState } from '@deliveryhero/armor';
 *
 * <EmptyState />
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const EmptyState = forwardRef<HTMLDivElement, EmptyStatePropsType>(
    function EmptyState({ className, ...props }, ref) {
        const classNames = useEmptyStateClassNames(
            EMPTY_STATE_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            horizontalLayoutProps,
            verticalLayoutProps,
            imageContainerProps,
            imageIllustrationProps,
            titleProps,
            actionsContainerProps,
            descriptionProps,
            layout,
            enableTitle,
            enableActions,
            enableDescription,
            enableImage,
            image,
            actions,
            description,
            title,
            renderImage,
            renderIndicator,
            renderDefaultImage,
            children,
        } = useEmptyState(props, ref);

        return (
            <EmptyStateRoot {...rootProps} className={classNames.Root}>
                {layout === 'horizontal' && (
                    <EmptyStateHorizontalLayout
                        {...horizontalLayoutProps}
                        className={classNames.HorizontalLayout}
                    >
                        {!!enableImage && (
                            <EmptyStateImageContainer
                                {...imageContainerProps}
                                className={classNames.ImageContainer}
                            >
                                {renderIndicator && <Indicator />}
                                {renderImage && image}
                                {renderDefaultImage && (
                                    <EmptyStateIllustration
                                        {...imageIllustrationProps}
                                    />
                                )}
                            </EmptyStateImageContainer>
                        )}
                        <EmptyStateContainer
                            className={classNames.EmptyStateContainer}
                        >
                            {!!enableTitle && (
                                <EmptyStateTitle
                                    {...titleProps}
                                    className={classNames.Title}
                                >
                                    {title}
                                </EmptyStateTitle>
                            )}
                            {!!enableDescription && (
                                <EmptyStateDescription
                                    {...descriptionProps}
                                    className={classNames.Description}
                                >
                                    {description}
                                </EmptyStateDescription>
                            )}
                            {!!enableActions && (
                                <EmptyStateActionContainer
                                    {...actionsContainerProps}
                                    className={classNames.ActionsContainer}
                                >
                                    {actions}
                                </EmptyStateActionContainer>
                            )}
                        </EmptyStateContainer>
                    </EmptyStateHorizontalLayout>
                )}
                {layout === 'vertical' && (
                    <EmptyStateVerticalLayout
                        {...verticalLayoutProps}
                        className={classNames.VerticalLayout}
                    >
                        {!!enableImage && (
                            <EmptyStateImageContainer
                                {...imageContainerProps}
                                className={classNames.ImageContainer}
                            >
                                {renderIndicator && <Indicator />}
                                {renderImage && image}
                                {renderDefaultImage && (
                                    <EmptyStateIllustration
                                        {...imageIllustrationProps}
                                    />
                                )}
                            </EmptyStateImageContainer>
                        )}
                        {!!enableTitle && (
                            <EmptyStateTitle
                                {...titleProps}
                                className={classNames.Title}
                            >
                                {title}
                            </EmptyStateTitle>
                        )}
                        {!!enableDescription && (
                            <EmptyStateDescription
                                {...descriptionProps}
                                className={classNames.Description}
                            >
                                {description}
                            </EmptyStateDescription>
                        )}
                        {!!enableActions && (
                            <EmptyStateActionContainer
                                {...actionsContainerProps}
                                className={classNames.ActionsContainer}
                            >
                                {actions}
                            </EmptyStateActionContainer>
                        )}
                    </EmptyStateVerticalLayout>
                )}

                {children}
            </EmptyStateRoot>
        );
    },
);

EmptyState.defaultProps = {
    title: "It's empty",
    description:
        "There's nothing to show here. Trying going back and updating  your request",
    enableImage: true,
    enableActions: true,
    layout: 'vertical',
    enableTitle: true,
    enableDescription: true,
    small: false,
    enableIndicator: false,
};

/** prop-types are required here for run-time checks */
EmptyState.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    enableImage: PropTypes.bool,
    image: PropTypes.elementType,
    actions: PropTypes.elementType,
    enableActions: PropTypes.bool,
    enableTitle: PropTypes.bool,
    enableDescription: PropTypes.bool,
    small: PropTypes.bool,
    enableIndicator: PropTypes.bool,
};
