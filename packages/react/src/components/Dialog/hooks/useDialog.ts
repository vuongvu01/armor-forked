import { MouseEvent, useCallback, useRef } from 'react';
import { DialogPropsType } from '../type';
import { ReferenceType } from '../../../type';
import { useControlledFlagState } from '../../../system/hooks/useControlledFlagState';
import { useInternalRef } from '../../../utils';
import { useOuterClick } from '../../../system/hooks/useOuterClick';
import { useOverlay } from '../../../system/hooks/useOverlay';
import { extractSizeProps } from '../../../system';
import { dialogCloseButton } from '../constants';
import { useDisplayEffects } from '../../../system/hooks/useDisplayEffects';
import { useDocumentKeydown } from '../../../system/hooks/useDocumentKeyDown';

export const useDialog = (
    {
        open,
        defaultOpen,
        onOpenChange,

        scroll,
        zIndex,

        enableBackdrop,
        enableCloseButton,
        enableCloseByEscape,
        enableEffects,
        enableWindowScrollBlock,

        /** @deprecated */
        onClose,
        /** @deprecated */
        onCloseButtonClick,
        /** @deprecated */
        disableOverlay,
        /** @deprecated */
        disableCloseButton,
        /** @deprecated */
        disableCloseByEscape,
        /** @deprecated */
        disableEffects,

        enablePortal,

        ...restProps
    }: DialogPropsType,
    ref: ReferenceType,
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

    const rootRef = useRef<HTMLElement>();
    useInternalRef(ref, rootRef);

    const windowRef = useRef<HTMLElement>();

    useOuterClick(
        [windowRef],
        onCloseInternal,
        reallyOpen && reallyEnableBackdrop,
    );

    const { display, effectToggle } = useDisplayEffects(reallyOpen);

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
        [onClose, onCloseButtonClick, onCloseInternal],
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
            ref,
        },
        overlayProps: {
            disableEffects:
                enableEffects !== undefined ? !enableEffects : disableEffects,
            effectToggle,
            display,
        },
        alignmentContainerProps: {
            display,
            enableCloseButton: reallyEnableCloseButton,
            scroll,
        },
        windowProps: {
            ...sizeProps,
            effectToggle,
            ref: windowRef,
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
    };
};
