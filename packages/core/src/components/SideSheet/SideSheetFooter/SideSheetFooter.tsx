import React, { FC, memo } from 'react';
import { makeRootClassName } from '@deliveryhero/armor-system';

import { SideSheetFooterPropsType } from './type';
import { SideSheetFooterRoot } from './style';
import { sideSheetFooter } from '../constants';

export const SIDE_SHEET_FOOTER_CLASS_PREFIX = 'SideSheetFooter';

/**
 * # SideSheetFooter
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/9776c7-side-sheet/b/09d7b1)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { SideSheet, SideSheetHeader, SideSheetBody, SideSheetFooter, Button } from '@deliveryhero/armor';
 *
 * const [open, setOpen] = useState(false);
 * const onClose = () => setOpen(false);
 *
 * <SideSheet open={open} onClose={onClose}>
 *     <SideSheetHeader
 *         title="Header title"
 *         description="Header description"
 *     />
 *     <SideSheetBody>Body content</SideSheetBody>
 *     <SideSheetFooter>Footer actions</SideSheetFooter>
 * </SideSheet>
 *
 * <Button onClick={() => setOpen(true)}>Show Layout</Button>
 * ```
 * ***
 *
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

export const MemoizedSideSheetFooter = memo(SideSheetFooter);
