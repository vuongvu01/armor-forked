import { RefObject, useCallback, useRef } from 'react';
import { sideSheetContent, sideSheetHeaderContainer } from '../constants';
import { SideSheetPropsType } from '../type';
import { ReferenceType } from '../../../type';
import { useControlledFlagState } from '../../../system/hooks/useControlledFlagState';
import { useOverlay } from '../../../system/hooks/useOverlay';
import { useInternalRef } from '../../../utils';
import { useOuterClick } from '../../../system/hooks/useOuterClick';
import { useDisplayEffects } from '../../../system/hooks/useDisplayEffects';
import { useDocumentKeydown } from '../../../system/hooks/useDocumentKeyDown';

export const useSideSheet = (
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
        /** @deprecated @see enableCloseButton */
        isCloseButtonVisible,
        enableCloseByEscape,
        /** @deprecated @see enableCloseByEscape */
        disableCloseByEscape,
        enableCloseOnBackdropClick,
        enableWindowScrollBlock,
        enableEffects,
        /** @deprecated @see disableEffects */
        disableEffects,

        // other
        isFixed,
        wide,

        ...restProps
    }: SideSheetPropsType,
    ref: ReferenceType,
) => {
    const reallyEnableCloseButton =
        enableCloseButton !== undefined
            ? enableCloseButton
            : isCloseButtonVisible;

    const reallyEnableCloseByEscape =
        enableCloseByEscape !== undefined
            ? enableCloseByEscape
            : !disableCloseByEscape;

    const reallyEnableBackdrop =
        enableBackdrop !== undefined ? enableBackdrop : !disableOverlay;

    const reallyEnableEffects =
        enableEffects !== undefined ? enableEffects : !disableEffects;

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

    const rootRef = useRef<HTMLDivElement>();
    useInternalRef(ref, rootRef);

    const onBackdropClick = useCallback(() => {
        if (reallyEnableBackdrop && enableCloseOnBackdropClick !== false) {
            onCloseInternal();
        }
    }, [onCloseInternal, enableCloseOnBackdropClick, reallyEnableBackdrop]);

    const { display, effectToggle } = useDisplayEffects(reallyOpen);

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

    return {
        portalProps: {
            enablePortal,
        },
        rootProps: {
            ...restProps,
            ref: rootRef as RefObject<HTMLDivElement>,
            zIndex: realZIndex,
        },
        getBackdropProps: () => ({
            disableEffects: !reallyEnableEffects,
            display,
            effectToggle,
            onClick: onBackdropClick,
        }),
        windowProps: {
            disableEffects: !reallyEnableEffects,
            display,
            effectToggle,
            wide,
        },
        contentProps: {
            'data-testid': sideSheetContent,
        },
        headerContainerProps: {
            'data-testid': sideSheetHeaderContainer,
        },
        getCloseButtonProps: () => ({
            onClick: onCloseInternal,
        }),
        isCloseButtonVisible,

        wide,
        isFixed,

        enableCloseButton: reallyEnableCloseButton,
        enableBackdrop: reallyEnableBackdrop,
    };
};
