import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';

import { useDialogClassNames, useDialogStylesOverride } from './utils';
import {
    DialogAlignmentContainer,
    DialogRoot,
    DialogCloseButton,
    DialogOverlay,
    DialogContent,
} from './style';
import { DialogPropsType } from './type';
import { Modal } from '../Modal';
import { CloseIcon } from '../../icons/CloseIcon';
import { useDisplay } from '../Modal/utils';
import { useContainerClickTrap } from '../DialogContent/utils';
import { dialogDefaultTheme } from './theme';

const CLASS_PREFIX = 'Dialog';
export const DIALOG_SCROLL_DOCUMENT = 'document';
export const DIALOG_SCROLL_DIALOG = 'dialog';

export const Dialog: FunctionComponent<DialogPropsType> = ({
    className,
    classNames,
    styles,
    children,
    open,
    disableOverlay,
    disableCloseButton,
    disableEffects,
    onClose,
    scroll,
    ...restProps
}) => {
    const theme = useTheme();
    useThemeOverride(CLASS_PREFIX, theme, dialogDefaultTheme);

    const classNameComponents = useDialogClassNames(
        CLASS_PREFIX,
        className,
        classNames,
    );
    const stylesOverride = useDialogStylesOverride(styles);

    const [display, effectToggle] = useDisplay(open);
    const { onContainerClick, containerRef } = useContainerClickTrap(
        onClose,
        disableOverlay,
    );

    return (
        <Modal open={open} onClose={onClose} disableBackdrop={disableOverlay}>
            {!disableOverlay && (
                <DialogOverlay
                    theme={theme}
                    className={classNameComponents.Overlay}
                    styles={stylesOverride.Overlay}
                    display={display}
                    effectToggle={effectToggle}
                    disableEffects={disableEffects}
                />
            )}
            <DialogAlignmentContainer
                theme={theme}
                className={classNameComponents.AlignmentContainer}
                styles={stylesOverride.AlignmentContainer}
                display={display}
                disableCloseButton={disableCloseButton}
                ref={containerRef}
                onClick={onContainerClick}
                scroll={scroll}
            >
                <DialogRoot
                    theme={theme}
                    {...restProps}
                    className={classNameComponents.Root}
                    dialogStyles={stylesOverride.Root}
                    effectToggle={effectToggle}
                    scroll={scroll}
                    disableEffects={disableEffects}
                >
                    {!disableCloseButton && (
                        <DialogCloseButton
                            theme={theme}
                            tabIndex={-1}
                            className={classNameComponents.CloseButton}
                            styles={stylesOverride.CloseButton}
                            onClick={onClose}
                        >
                            <CloseIcon display="block" />
                        </DialogCloseButton>
                    )}
                    <DialogContent
                        theme={theme}
                        className={classNameComponents.Content}
                        styles={stylesOverride.Content}
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
    /** Allows to switch scroll type between "dialog" and "document" */
    scroll: PropTypes.oneOf([DIALOG_SCROLL_DIALOG, DIALOG_SCROLL_DOCUMENT]),
    /** A callback that is called when a user tries to close the dialog */
    onClose: PropTypes.func,
    /** Tells the dialog to occupy the entire width of it's parent (or expand to maxWidth constraint value) */
    wide: PropTypes.bool,
    /** Set maximum width of the dialog basing on the current theme.breakpoints */
    maxWidth: PropTypes.string,
};
