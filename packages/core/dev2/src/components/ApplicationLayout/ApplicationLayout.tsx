import React, { FC } from 'react';
import { ApplicationLayoutRoot, ApplicationLayoutBody } from './style';
import { LayoutPropsType } from './type';

/**
 * This is a top-level UI layout, it wraps every other visible element of the project.
 * Above it there is the Providers wrapper only.
 */
export const ApplicationLayout: FC<React.PropsWithChildren<LayoutPropsType>> =
    ({ children }) => {
        return (
            <ApplicationLayoutRoot>
                <ApplicationLayoutBody>{children}</ApplicationLayoutBody>
            </ApplicationLayoutRoot>
        );
    };
