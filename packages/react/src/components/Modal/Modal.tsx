import React, { FunctionComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { makeBEM } from '../../utils';
import { ModalBackdrop, ModalRoot } from './style';
import { ModalPropsType } from './type';
import { useModal } from './utils/useModal';

export const Modal: FunctionComponent<ModalPropsType> = ({
    children,
    open,
    onClose,
    disableBackdrop,
    disableCloseByEscape,
    zIndex,
    className,
}) => {
    const { elementZIndex } = useModal({
        open,
        onClose,
        parameters: { zIndex, disableCloseByEscape },
    });

    return createPortal(
        <ModalRoot zIndex={elementZIndex} className={className}>
            {!!open && !disableBackdrop && (
                <ModalBackdrop
                    onClick={onClose}
                    className={makeBEM('Modal', 'backdrop')}
                />
            )}
            {children}
        </ModalRoot>,
        window.document.getElementsByTagName('body')[0],
    );
};

Modal.defaultProps = {
    open: false,
    onClose: () => {},
    disableBackdrop: false,
    disableCloseByEscape: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
Modal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    disableBackdrop: PropTypes.bool,
    disableCloseByEscape: PropTypes.bool,
};
