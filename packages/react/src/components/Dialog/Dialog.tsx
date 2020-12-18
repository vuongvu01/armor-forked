import React, { FunctionComponent, useCallback, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { CancelIcon } from '@deliveryhero/armor-icons';
import { useComponentTheme } from '../../utils/hooks';

import { useDialogClassNames } from './utils/useDialogClassNames';
import {
    DialogAlignmentContainer,
    DialogRoot,
    DialogCloseButton,
    DialogContent,
} from './style';
import { DialogPropsType } from './type';
import { Modal } from '../Modal';
import { useDisplay } from '../Modal/utils/useDisplay';
import { useContainerClickTrap } from './utils/useContainerClickTrap';
import { dialogDefaultTheme } from './theme';
import { Overlay } from '../Overlay';
import { DIALOG_CLASS_PREFIX, dialogCloseButton } from './constants';

export const DIALOG_SCROLL_DOCUMENT = 'document';
export const DIALOG_SCROLL_DIALOG = 'dialog';

export const Dialog: FunctionComponent<DialogPropsType> = ({
    className,
    children,
    open,
    disableOverlay,
    disableCloseButton,
    disableCloseByEscape,
    disableEffects,
    onClose,
    onCloseButtonClick,
    scroll,
    zIndex,
    ...restProps
}) => {
    const theme = useComponentTheme(DIALOG_CLASS_PREFIX, dialogDefaultTheme);

    const classNameComponents = useDialogClassNames(
        DIALOG_CLASS_PREFIX,
        className,
    );

    const [display, effectToggle] = useDisplay(open);
    const { onContainerClick, containerRef } = useContainerClickTrap(
        onClose,
        disableOverlay,
    );

    const onCloseButtonClickInternal = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (onCloseButtonClick) {
                onCloseButtonClick(event);
                if (event.isPropagationStopped()) {
                    return;
                }
            }

            if (onClose) {
                onClose();
            }
        },
        [onClose, onCloseButtonClick],
    );

    return (
        <Modal
            open={open}
            onClose={onClose}
            disableBackdrop={disableOverlay}
            disableCloseByEscape={disableCloseByEscape}
            zIndex={zIndex}
            className={classNameComponents.Modal}
        >
            <Overlay
                className={classNameComponents.Overlay}
                disableEffects={disableEffects}
                disableOverlay={disableOverlay}
                open={display}
                effectToggle={effectToggle}
            />
            <DialogAlignmentContainer
                theme={theme}
                className={classNameComponents.AlignmentContainer}
                display={display}
                disableCloseButton={disableCloseButton}
                ref={containerRef}
                onClick={onContainerClick}
                scroll={scroll}
            >
                <DialogRoot
                    {...restProps}
                    theme={theme}
                    className={classNameComponents.Root}
                    effectToggle={effectToggle}
                    scroll={scroll}
                    disableEffects={disableEffects}
                >
                    {!disableCloseButton && (
                        <DialogCloseButton
                            className={classNameComponents.CloseButton}
                            data-testid={dialogCloseButton}
                            onClick={onCloseButtonClickInternal}
                            tabIndex={-1}
                            theme={theme}
                        >
                            <CancelIcon />
                        </DialogCloseButton>
                    )}
                    <DialogContent
                        theme={theme}
                        className={classNameComponents.Content}
                    >
                        {children}
                    </DialogContent>
                </DialogRoot>
            </DialogAlignmentContainer>
        </Modal>
    );
};

Dialog.defaultProps = {
    open: false,
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
