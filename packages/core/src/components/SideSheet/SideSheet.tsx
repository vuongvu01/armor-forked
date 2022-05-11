import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import { PortalToBody } from '@deliveryhero/armor-system';

import { useSideSheetClassName } from './hooks/useSideSheetClassName';
import { SideSheetPropsType } from './type';
import { Backdrop } from '../Backdrop';
// @ts-ignore until the deprecated CloseIcon is removed and we rename Close to CloseIcon
import {
    SideSheetRoot,
    SideSheetWindow,
    SideSheetContent,
    SideSheetHeaderContainer,
    SideSheetCloseButton,
} from './style';
import { SIDE_SHEET_CLASS_PREFIX } from './constants';
import { useSideSheet } from './hooks/useSideSheet';
import { extendChildrenWithProps, extractContentSections } from './utils';

/**
 * # SideSheet
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/9776c7-side-sheet/b/09d7b1)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { SideSheet, SideSheetHeader, SideSheetBody, SideSheetFooter, Button } from '@deliveryhero/armor';
 *
 * const [open, setOpen] = useState(false);
 * const onClose = () => setOpen(false);
 *
 * <SideSheet open={open} onClose={onClose}>
 *     <SideSheetHeader
 *         title="Header title"
 *         description="Header description"
 *     />
 *     <SideSheetBody>Body content</SideSheetBody>
 *     <SideSheetFooter>Footer actions</SideSheetFooter>
 * </SideSheet>
 *
 * <Button onClick={() => setOpen(true)}>Show Layout</Button>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const SideSheet = forwardRef<HTMLDivElement, SideSheetPropsType>(
    function SideSheet({ className, children, ...props }, ref) {
        const {
            portalProps,
            rootProps,
            getBackdropProps,
            windowProps,
            contentProps,
            headerContainerProps,
            getCloseButtonProps,

            enableBackdrop,
            enableCloseButton,
            wide,
            isFixed,
        } = useSideSheet(props, ref);

        const classOverride = useSideSheetClassName(
            SIDE_SHEET_CLASS_PREFIX,
            className,
            !enableBackdrop,
            wide,
        );

        // todo: since we don't clone children and use core context instead, better to remove this soon
        const childrenWithExtendedProps = extendChildrenWithProps(children, {
            classOverride,
            isFixed,
        });
        const { header, body, footer } = extractContentSections(
            childrenWithExtendedProps,
        );

        return (
            <PortalToBody {...portalProps}>
                <SideSheetRoot {...rootProps} className={classOverride.Root}>
                    {enableBackdrop && (
                        <Backdrop
                            {...getBackdropProps()}
                            className={classOverride.Backdrop}
                        />
                    )}
                    <SideSheetWindow
                        {...windowProps}
                        className={classOverride.Window}
                    >
                        <SideSheetContent
                            {...contentProps}
                            className={classOverride.Content}
                        >
                            <SideSheetHeaderContainer
                                {...headerContainerProps}
                                className={classOverride.HeaderContainer}
                            >
                                {header}
                                {enableCloseButton ? (
                                    <SideSheetCloseButton
                                        {...getCloseButtonProps()}
                                    />
                                ) : null}
                            </SideSheetHeaderContainer>
                            {body}
                            {footer}
                        </SideSheetContent>
                    </SideSheetWindow>
                </SideSheetRoot>
            </PortalToBody>
        );
    },
);

SideSheet.displayName = SIDE_SHEET_CLASS_PREFIX;

SideSheet.defaultProps = {
    disableOverlay: false,
    disableEffects: false,
    disableCloseByEscape: false,
    isCloseButtonVisible: true,
    isFixed: true,
    open: false,
    wide: false,
};

SideSheet.propTypes = {
    disableEffects: PropTypes.bool,
    disableOverlay: PropTypes.bool,
    disableCloseByEscape: PropTypes.bool,
    isCloseButtonVisible: PropTypes.bool,
    isFixed: PropTypes.bool,
    onClose: PropTypes.func,
    open: PropTypes.bool,
    /** Tells the dialog to occupy the larger or the smaller line segment according to the ~ of the Golden Ration */
    wide: PropTypes.bool,
};

export const MemoizedSideSheet = memo(SideSheet);
