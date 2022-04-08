import { MouseEvent, useCallback } from 'react';
import {
    useControlledFlagState,
    useOverlay,
    extractSizeProps,
    useRootRef,
    useDisplayEffects,
    useDocumentKeydown,
} from '@deliveryhero/armor-system';

import { DialogPropsType } from '../type';
import { dialogCloseButton } from '../constants';
import { RefType } from '../../../type';

export const useDialog = <E extends HTMLElement>(
    {
        // ComponentBehaviourOpenStateType
        open,
        defaultOpen,
        onOpenChange,
        /** @deprecated @see onOpenChange */
        onClose,

        // ComponentBehaviourPortalType & ComponentBehaviourOverlayType
        zIndex,
        enablePortal,

        // ComponentBehaviourModalDialogType
        enableBackdrop,
        /** @deprecated @see enableBackdrop */
        disableOverlay,
        enableCloseButton,
        /** @deprecated */
        disableCloseButton,
        enableCloseByEscape,
        /** @deprecated @see enableCloseByEscape */
        disableCloseByEscape,
        enableCloseOnBackdropClick,
        enableWindowScrollBlock,
        enableEffects,
        /** @deprecated @see enableEffects */
        disableEffects,
        /** @deprecated @see disableEffects */
        onCloseButtonClick,

        // other
        scroll,

        ...restProps
    }: DialogPropsType,
    ref: RefType<E>,
) => {
    const reallyEnableCloseButton =
        enableCloseButton !== undefined
            ? enableCloseButton
            : !disableCloseButton;

    const reallyEnableCloseByEscape =
        enableCloseByEscape !== undefined
            ? enableCloseByEscape
            : !disableCloseByEscape;

    const reallyEnableBackdrop =
        enableBackdrop !== undefined ? enableBackdrop : !disableOverlay;

    const [reallyOpen, , , setClose] = useControlledFlagState(
        defaultOpen,
        open,
        onOpenChange,
    );

    const { zIndex: realZIndex, isTopOverlay } = useOverlay(reallyOpen, {
        zIndex,
        blockWindowScroll: enableWindowScrollBlock !== false,
    });

    const onCloseInternal = useCallback(() => {
        if (isTopOverlay()) {
            if (onClose) {
                onClose();
            }
            setClose();
        }
    }, [onClose, setClose, isTopOverlay]);

    const rootRef = useRootRef<E>(ref);

    const onBackdropClick = useCallback(() => {
        if (reallyEnableBackdrop && enableCloseOnBackdropClick !== false) {
            onCloseInternal();
        }
    }, [onCloseInternal, enableCloseOnBackdropClick, reallyEnableBackdrop]);

    const { display, effectToggle } = useDisplayEffects(!!reallyOpen);

    const onCloseButtonClickInternal = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (onCloseButtonClick) {
                onCloseButtonClick(event);
                if (event.isPropagationStopped()) {
                    return;
                }
            }

            onCloseInternal();
        },
        [onCloseButtonClick, onCloseInternal],
    );

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (
                !reallyEnableCloseByEscape ||
                event.key !== 'Escape' ||
                !isTopOverlay()
            ) {
                return;
            }

            onCloseInternal();
        },
        [isTopOverlay, onCloseInternal, reallyEnableCloseByEscape],
    );

    useDocumentKeydown(onKeyDown);

    const { sizeProps, restSizeProps } = extractSizeProps(restProps);

    return {
        portalProps: {
            enablePortal,
        },
        rootProps: {
            ...restSizeProps,
            zIndex: realZIndex,
            ref: rootRef,
        },
        getBackdropProps: () => ({
            disableEffects:
                enableEffects !== undefined ? !enableEffects : disableEffects,
            effectToggle,
            display,
            onClick: onBackdropClick,
        }),
        alignmentContainerProps: {
            display,
            enableCloseButton: reallyEnableCloseButton,
            scroll,
        },
        windowProps: {
            ...sizeProps,
            effectToggle,
            enableEffects:
                enableEffects !== undefined ? enableEffects : !disableEffects,
            scroll,
        },
        getCloseButtonProps: () => {
            return {
                'data-testid': dialogCloseButton,
                onClick: onCloseButtonClickInternal,
                tabIndex: -1,
            };
        },
        contentProps: {},

        enableCloseButton: reallyEnableCloseButton,
        enableBackdrop: reallyEnableBackdrop,

        open: !!reallyOpen,
    };
};
