import React, { FC, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { CancelIcon } from '@deliveryhero/armor-icons';
import { useComponentTheme } from '../../utils/hooks';

import { useDialogClassNames } from './hooks/useDialogClassNames';
import {
    DialogAlignmentContainer,
    DialogRoot,
    DialogWindow,
    DialogCloseButton,
    DialogContent,
} from './style';
import { DialogPropsType } from './type';
import { Overlay } from '../Overlay';
import {
    DIALOG_CLASS_PREFIX,
    DIALOG_SCROLL_DIALOG,
    DIALOG_SCROLL_DOCUMENT,
} from './constants';
import { useDialog } from './hooks/useDialog';
import { PortalToBody } from '../../system/util/PortalToBody';

export const Dialog: FC<DialogPropsType> = forwardRef(function Dialog(
    { className, children, ...props },
    ref,
) {
    const theme = useComponentTheme(DIALOG_CLASS_PREFIX);

    const classNames = useDialogClassNames(DIALOG_CLASS_PREFIX, className);

    const {
        portalProps,
        rootProps,
        overlayProps,
        alignmentContainerProps,
        windowProps,
        getCloseButtonProps,
        contentProps,

        enableCloseButton,
        enableOverlay,
    } = useDialog(props, ref);

    return (
        <PortalToBody {...portalProps}>
            <DialogRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
                {enableOverlay && (
                    <Overlay {...overlayProps} className={classNames.Overlay} />
                )}
                <DialogAlignmentContainer
                    {...alignmentContainerProps}
                    theme={theme}
                    className={classNames.AlignmentContainer}
                >
                    <DialogWindow
                        {...windowProps}
                        theme={theme}
                        className={classNames.Window}
                    >
                        {enableCloseButton && (
                            <DialogCloseButton
                                {...getCloseButtonProps()}
                                theme={theme}
                                className={classNames.CloseButton}
                            >
                                <CancelIcon />
                            </DialogCloseButton>
                        )}
                        <DialogContent
                            {...contentProps}
                            theme={theme}
                            className={classNames.Content}
                        >
                            {children}
                        </DialogContent>
                    </DialogWindow>
                </DialogAlignmentContainer>
            </DialogRoot>
        </PortalToBody>
    );
});

Dialog.defaultProps = {
    disableOverlay: false,
    disableEffects: false,
    disableCloseButton: false,
    disableCloseByEscape: false,
    scroll: DIALOG_SCROLL_DIALOG,
};

/** Support of prop-types is here for project that don't use TypeScript */
Dialog.propTypes = {
    /** A flag that triggers the dialog display */
    open: PropTypes.bool,
    /** A flag that tells the dialog to not to show overlay (backdrop) */
    disableOverlay: PropTypes.bool,
    /** A flag that tells the dialog to not to run transition effects on show / hide */
    disableEffects: PropTypes.bool,
    /** A flag that tells the dialog to not to show the close button */
    disableCloseButton: PropTypes.bool,
    /** A flag that tells the dialog to disable close by Escape button */
    disableCloseByEscape: PropTypes.bool,
    /** Allows to switch scroll type between "dialog" and "document" */
    scroll: PropTypes.oneOf([DIALOG_SCROLL_DIALOG, DIALOG_SCROLL_DOCUMENT]),
    /** A callback that is called when a user tries to close the dialog */
    onClose: PropTypes.func,
    /** Tells the dialog to occupy the entire width of it's parent (or expand to maxWidth constraint value) */
    wide: PropTypes.bool,
    /** Set maximum width of the dialog basing on the current theme.breakpoints */
    maxWidth: PropTypes.string,
};
