import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { makeRootClassName } from '@deliveryhero/armor-system';

import { SideSheetBodyRoot } from './style';
import { sideSheetBody } from '../constants';
import { SideSheetBodyPropsType } from './type';

export const SIDE_SHEET_BODY_CLASS_PREFIX = 'SideSheetBody';

/**
 * # SideSheetBody
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
export const SideSheetBody: FunctionComponent<SideSheetBodyPropsType> = ({
    children,
    isFixed,
    className,
    ...restProps
}) => {
    return (
        <SideSheetBodyRoot
            data-testid={sideSheetBody}
            {...restProps}
            isFixed={isFixed}
            className={makeRootClassName(
                SIDE_SHEET_BODY_CLASS_PREFIX,
                className,
            )}
        >
            {children}
        </SideSheetBodyRoot>
    );
};

SideSheetBody.displayName = SIDE_SHEET_BODY_CLASS_PREFIX;

SideSheetBody.propTypes = {
    isFixed: PropTypes.bool,
};
