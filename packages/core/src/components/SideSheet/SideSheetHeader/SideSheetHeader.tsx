import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';

import { SideSheetHeaderPropsType } from './type';
import {
    SideSheetHeaderRoot,
    SideSheetHeaderTitle,
    SideSheetHeaderDescription,
} from './style';
import { useSideSheetHeader } from './hooks/useSideSheetHeader';
import { useSideSheetHeaderClassNames } from './hooks/useSideSheetHeaderClassNames';

export const SIDE_SHEET_HEADER_CLASS_PREFIX = 'SideSheetHeader';

/**
 * # SideSheetHeader
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
export const SideSheetHeader: FC<
    React.PropsWithChildren<SideSheetHeaderPropsType>
> = ({ className, ...props }) => {
    const classNames = useSideSheetHeaderClassNames(
        SIDE_SHEET_HEADER_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        title,
        description,
        children,
        showTitle,
        showDescription,
    } = useSideSheetHeader(props);

    return (
        <SideSheetHeaderRoot {...rootProps} className={classNames.Root}>
            {children}
            {showTitle && (
                <SideSheetHeaderTitle className={classNames.Title}>
                    {title}
                </SideSheetHeaderTitle>
            )}
            {showDescription && (
                <SideSheetHeaderDescription className={classNames.Description}>
                    {description}
                </SideSheetHeaderDescription>
            )}
        </SideSheetHeaderRoot>
    );
};

SideSheetHeader.displayName = SIDE_SHEET_HEADER_CLASS_PREFIX;

SideSheetHeader.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};

export const MemoizedSideSheetHeader = memo(SideSheetHeader);
