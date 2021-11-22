import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { getFlags, getBody } from './globals';

type PortalToBodyPropsType = { enablePortal?: boolean };

const globalFlags = getFlags();

export const PortalToBody: FC<PortalToBodyPropsType> = ({
    children,
    enablePortal,
}) => {
    const body = getBody();
    if (!enablePortal || !body || globalFlags.enablePortal === false) {
        return <>{children}</>;
    }

    return createPortal(children, body);
};

PortalToBody.defaultProps = {
    enablePortal: true,
};
