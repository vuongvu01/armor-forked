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
import { useComponentTheme } from '../../utils/hooks';

export const EmptyState = forwardRef<HTMLDivElement, EmptyStatePropsType>(
    function EmptyState({ className, ...props }, ref) {
        const theme = useComponentTheme(EMPTY_STATE_CLASS_PREFIX);
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
            <EmptyStateRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
                {layout === 'horizontal' && (
                    <EmptyStateHorizontalLayout
                        {...horizontalLayoutProps}
                        theme={theme}
                        className={classNames.HorizontalLayout}
                    >
                        {!!enableImage && (
                            <EmptyStateImageContainer
                                {...imageContainerProps}
                                theme={theme}
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
                            theme={theme}
                            className={classNames.EmptyStateContainer}
                        >
                            {!!enableTitle && (
                                <EmptyStateTitle
                                    {...titleProps}
                                    theme={theme}
                                    className={classNames.Title}
                                >
                                    {title}
                                </EmptyStateTitle>
                            )}
                            {!!enableDescription && (
                                <EmptyStateDescription
                                    {...descriptionProps}
                                    theme={theme}
                                    className={classNames.Description}
                                >
                                    {description}
                                </EmptyStateDescription>
                            )}
                            {!!enableActions && (
                                <EmptyStateActionContainer
                                    {...actionsContainerProps}
                                    theme={theme}
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
                        theme={theme}
                        className={classNames.VerticalLayout}
                    >
                        {!!enableImage && (
                            <EmptyStateImageContainer
                                {...imageContainerProps}
                                theme={theme}
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
                                theme={theme}
                                className={classNames.Title}
                            >
                                {title}
                            </EmptyStateTitle>
                        )}
                        {!!enableDescription && (
                            <EmptyStateDescription
                                {...descriptionProps}
                                theme={theme}
                                className={classNames.Description}
                            >
                                {description}
                            </EmptyStateDescription>
                        )}
                        {!!enableActions && (
                            <EmptyStateActionContainer
                                {...actionsContainerProps}
                                theme={theme}
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
