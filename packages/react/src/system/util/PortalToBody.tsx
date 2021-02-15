import React, { FC, useMemo } from 'react';
import { createPortal } from 'react-dom';

type PortalToBodyPropsType = { enablePortal?: boolean };

export const PortalToBody: FC<PortalToBodyPropsType> = ({
    children,
    enablePortal,
}) => {
    if (typeof window === 'undefined') {
        return null;
    }

    if (!enablePortal) {
        return <>{children}</>;
    }

    const portal = useMemo(
        () =>
            createPortal(
                children,
                window.document.getElementsByTagName('body')[0],
            ),
        [children],
    );

    return portal;
};

PortalToBody.defaultProps = {
    enablePortal: true,
};
