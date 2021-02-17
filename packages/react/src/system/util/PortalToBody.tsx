import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { getWindow } from './getWindow';

type PortalToBodyPropsType = { enablePortal?: boolean };

export const PortalToBody: FC<PortalToBodyPropsType> = ({
    children,
    enablePortal,
}) => {
    const win = getWindow();
    if (!win) {
        return null;
    }

    if (!enablePortal) {
        return <>{children}</>;
    }

    return createPortal(children, win.document.getElementsByTagName('body')[0]);
};

PortalToBody.defaultProps = {
    enablePortal: true,
};
