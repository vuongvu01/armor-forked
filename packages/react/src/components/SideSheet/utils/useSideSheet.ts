import { RefObject, useCallback, useRef } from 'react';
import { extendChildrenWithProps, extractContentSections } from './index';
import { sideSheetContent, sideSheetHeaderContainer } from '../constants';
import { SideSheetPropsType } from '../type';
import { ReferenceType } from '../../../type';
import { useControlledFlagState } from '../../../system/hooks/useControlledFlagState';
import { useOverlay } from '../../../system/hooks/useOverlay';
import { useInternalRef } from '../../../utils';
import { ThemeType } from '../../../styling';
import { useOuterClick } from '../../../system/hooks/useOuterClick';
import { useDisplayEffects } from '../../../system/hooks/useDisplayEffects';
import { useDocumentKeydown } from '../../../system/hooks/useDocumentKeyDown';

export const useSideSheet = (
    {
        classOverride,
        disableEffects,
        disableCloseByEscape,
        disableOverlay,
        isCloseButtonVisible,
        enableWindowScrollBlock,
        isFixed,
        wide,
        zIndex,

        open,
        defaultOpen,
        onOpenChange,
        onClose,

        enablePortal,
        children,

        ...restProps
    }: SideSheetPropsType,
    ref: ReferenceType,
    theme: ThemeType,
) => {
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

    const windowRef = useRef<HTMLDivElement>();

    useOuterClick([windowRef], onCloseInternal, reallyOpen && !disableOverlay);

    const { display, effectToggle } = useDisplayEffects(reallyOpen);

    const childrenWithExtendedProps = extendChildrenWithProps(children, {
        classOverride,
        isFixed,
        theme,
    });

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (
                disableCloseByEscape ||
                event.key !== 'Escape' ||
                !isTopOverlay()
            ) {
                return;
            }

            onCloseInternal();
        },
        [isTopOverlay, onCloseInternal, disableCloseByEscape],
    );

    useDocumentKeydown(onKeyDown);

    const { header, body, footer } = extractContentSections(
        childrenWithExtendedProps,
    );

    return {
        portalProps: {
            enablePortal,
        },
        rootProps: {
            ...restProps,
            ref: rootRef as RefObject<HTMLDivElement>,
            zIndex: realZIndex,
        },
        overlayProps: {
            disableEffects,
            display,
            effectToggle,
        },
        windowProps: {
            disableEffects,
            display,
            effectToggle,
            wide,
            ref: windowRef as RefObject<HTMLDivElement>,
        },
        contentProps: {
            'data-testid': sideSheetContent,
        },
        headerContainerProps: {
            'data-testid': sideSheetHeaderContainer,
        },
        closeButtonProps: {
            onClick: onCloseInternal,
        },
        header,
        body,
        footer,
        isCloseButtonVisible,

        wide,
        theme,
    };
};
