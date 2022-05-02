import React, { forwardRef, memo } from 'react';
import { PortalToBody } from '@deliveryhero/armor-system';

import { useDialogClassNames } from './hooks/useDialogClassNames';
import { useDialog } from './hooks/useDialog';
import {
    DialogAlignmentContainer,
    DialogRoot,
    DialogWindow,
    DialogContent,
    DialogCloseButton,
} from './style';
import { DialogPropsType } from './type';
import { Backdrop } from '../Backdrop';
import { DIALOG_CLASS_PREFIX, DIALOG_SCROLL_DIALOG } from './constants';

/**
 * # Dialog
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/451847-dialog/b/09d7b1)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@deliveryhero/armor';
 *
 * <Button onClick={() => setOpen(true)}>Open modal!</Button>
 * <Dialog open={open} onClose={onClose} maxWidth="sm">
 *     <DialogTitle description="Assign a new id to this location">
 *         New location
 *     </DialogTitle>
 *     <DialogContent>
 *         Delivery Hero SE is a European multinational online
 *         food-delivery service based in Berlin, Germany. The company
 *         operates in 40+ countries internationally in Europe, Asia,
 *         Latin America and the Middle East and partners with 500,000+
 *         restaurants. Delivery Hero processed more than 666 million
 *         orders in 2019
 *     </DialogContent>
 *     <DialogActions>
 *         <Button tertiary onClick={onClose}>
 *             Cancel
 *         </Button>
 *         <Button onClick={onClose}>Save</Button>
 *     </DialogActions>
 * </Dialog>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Dialog = forwardRef<HTMLDivElement, DialogPropsType>(
    function Dialog({ className, children, ...props }, ref) {
        const {
            portalProps,
            rootProps,
            getBackdropProps,
            alignmentContainerProps,
            windowProps,
            getCloseButtonProps,
            contentProps,

            enableCloseButton,
            enableBackdrop,
            open,
        } = useDialog<HTMLDivElement>(props, ref);

        const classNames = useDialogClassNames(
            DIALOG_CLASS_PREFIX,
            open,
            className,
        );

        return (
            <PortalToBody {...portalProps}>
                <DialogRoot {...rootProps} className={classNames.Root}>
                    {enableBackdrop && (
                        <Backdrop
                            {...getBackdropProps()}
                            className={classNames.Backdrop}
                        />
                    )}
                    <DialogAlignmentContainer
                        {...alignmentContainerProps}
                        className={classNames.AlignmentContainer}
                    >
                        <DialogWindow
                            {...windowProps}
                            className={classNames.Window}
                        >
                            {enableCloseButton && (
                                <DialogCloseButton
                                    {...getCloseButtonProps()}
                                    className={classNames.CloseButton}
                                />
                            )}
                            <DialogContent
                                {...contentProps}
                                className={classNames.Content}
                            >
                                {children}
                            </DialogContent>
                        </DialogWindow>
                    </DialogAlignmentContainer>
                </DialogRoot>
            </PortalToBody>
        );
    },
);

Dialog.defaultProps = {
    disableOverlay: false,
    disableEffects: false,
    disableCloseButton: false,
    disableCloseByEscape: false,
    scroll: DIALOG_SCROLL_DIALOG,
};

export const MemoizedDialog = memo(Dialog);
