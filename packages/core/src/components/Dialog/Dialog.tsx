import React, { forwardRef } from 'react';
import { PortalToBody } from '@deliveryhero/armor-system';

import { useDialogClassNames } from './hooks/useDialogClassNames';
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
import { useDialog } from './hooks/useDialog';

/**
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
