import { EmptyStatePropsType } from '../type';
import { RefType } from '../../../type';

export const useEmptyState = <E extends HTMLDivElement>(
    {
        layout,
        small,
        enableImage,
        enableIndicator,
        enableTitle,
        enableDescription,
        enableActions,
        children,
        preset,
        imagePosition,
        titlePosition,
        descriptionPosition,
        actionsPosition,
        image,
        title,
        actions,
        description,

        ...restProps
    }: EmptyStatePropsType,
    ref: RefType<E>,
) => {
    return {
        rootProps: {
            ...restProps,
            layout,
            ref,
        },
        horizontalLayoutProps: {
            small,
            preset,
        },
        verticalLayoutProps: {
            small,
            preset,
        },
        imageContainerProps: {
            imagePosition,
            small,
        },
        imageIllustrationProps: {
            small,
        },
        titleProps: {
            titlePosition,
            layout,
            small,
        },
        descriptionProps: {
            descriptionPosition,
            small,
        },
        actionsContainerProps: {
            actionsPosition,
        },
        enableDescription,
        enableActions,
        enableTitle,
        image,
        title,
        actions,
        description,
        layout,
        children,
        renderIndicator: !!enableIndicator,
        renderImage: !!image && !enableIndicator,
        renderDefaultImage: !enableIndicator && !image,
        enableImage,
    };
};
