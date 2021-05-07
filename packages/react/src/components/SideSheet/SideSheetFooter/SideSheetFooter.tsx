import React, { FC } from 'react';

import { SideSheetFooterPropsType } from './type';
import { SideSheetFooterRoot } from './style';
import { sideSheetFooter } from '../constants';
import { useComponentTheme } from '../../../utils/hooks';
import { makeRootClassName } from '../../../utils';

export const SIDE_SHEET_FOOTER_CLASS_PREFIX = 'SideSheetFooter';

export const SideSheetFooter: FC<SideSheetFooterPropsType> = ({
    children,
    className,
    ...restProps
}) => {
    const theme = useComponentTheme(SIDE_SHEET_FOOTER_CLASS_PREFIX);

    return (
        <SideSheetFooterRoot
            paragraph
            medium
            data-testid={sideSheetFooter}
            {...restProps}
            theme={theme}
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
