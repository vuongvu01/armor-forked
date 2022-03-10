import React, { FC } from 'react';
import { makeRootClassName } from '@deliveryhero/armor-system';

import { SideSheetFooterPropsType } from './type';
import { SideSheetFooterRoot } from './style';
import { sideSheetFooter } from '../constants';

export const SIDE_SHEET_FOOTER_CLASS_PREFIX = 'SideSheetFooter';

/**
 * @armor-docs-component
 */
export const SideSheetFooter: FC<SideSheetFooterPropsType> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <SideSheetFooterRoot
            data-testid={sideSheetFooter}
            {...restProps}
            className={makeRootClassName(
                SIDE_SHEET_FOOTER_CLASS_PREFIX,
                className,
            )}
        >
            {children}
        </SideSheetFooterRoot>
    );
};

SideSheetFooter.displayName = SIDE_SHEET_FOOTER_CLASS_PREFIX;
