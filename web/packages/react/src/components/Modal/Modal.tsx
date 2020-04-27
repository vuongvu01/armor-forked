import React, { FunctionComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalBackdrop, ModalRoot } from './style';
import { ModalPropsType } from './type';
import { makeBEM } from '../../utils';
import { useElevation } from './utils';

export const Modal: FunctionComponent<ModalPropsType> = ({
    children,
    open,
    onClose,
    disableBackdrop,
}) => {
    const elevation = useElevation(open);

    return createPortal(
        <ModalRoot elevation={elevation}>
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
};

/** Support of prop-types is here for project that don't use TypeScript */
Modal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    disableBackdrop: PropTypes.bool,
};
