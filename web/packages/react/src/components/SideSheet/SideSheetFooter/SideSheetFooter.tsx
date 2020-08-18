import React, { FunctionComponent } from 'react';

import { SideSheetFooterPropsType } from './type';
import { SideSheetFooter as SideSheetFooterRoot } from './style';

export const SIDE_SHEET_FOOTER_CLASS_PREFIX = 'SideSheetFooter';

export const SideSheetFooter: FunctionComponent<SideSheetFooterPropsType> = ({
    children,
    theme,
    ...restProps
}) => {
    return (
        <SideSheetFooterRoot
            data-testid="SideSheetFooter"
            theme={theme}
            {...restProps}
        >
            {children}
        </SideSheetFooterRoot>
    );
};

SideSheetFooter.displayName = SIDE_SHEET_FOOTER_CLASS_PREFIX;
