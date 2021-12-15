import React, { FC, useContext } from 'react';
import { createPortal } from 'react-dom';
import { getFlags, getBody } from './globals';

type PortalToBodyPropsType = { enablePortal?: boolean };
type PortalContextValueType = { enabled: boolean };

const PortalContext = React.createContext<PortalContextValueType>({
    enabled: true,
});

const valueDisabled = { enabled: false };

const globalFlags = getFlags();

export const PortalToBody: FC<PortalToBodyPropsType> = ({
    children,
    enablePortal,
}) => {
    const body = getBody();
    const portalContextValue = useContext(PortalContext);
    if (
        !enablePortal ||
        !body ||
        globalFlags.enablePortal === false ||
        portalContextValue?.enabled === false
    ) {
        return <>{children}</>;
    }

    return createPortal(children, body);
};

PortalToBody.defaultProps = {
    enablePortal: true,
};

export const DisablePortal: FC = ({ children }) => {
    return (
        <PortalContext.Provider value={valueDisabled}>
            {children}
        </PortalContext.Provider>
    );
};
