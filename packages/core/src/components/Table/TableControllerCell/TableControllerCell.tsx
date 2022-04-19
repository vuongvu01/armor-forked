import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { getScalarPropType } from '@deliveryhero/armor-system';

import { useTableControllerCellClassNames } from './hooks/useTableControllerCellClassNames';
import { useTableControllerCell } from './hooks/useTableControllerCell';
import {
    TableControllerCellRoot,
    TableControllerCellContainer,
    TableControllerCellTrigger,
    TableControllerCellIcon,
} from './style';
import { TableControllerCellPropsType } from './type';
import { TABLE_CONTROLLER_CELL_CLASS_PREFIX } from './constants';

/**
 * # TableControllerCell
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/21c7b5-table/b/527bb6)
 *
 * @armor-docs-component
 */
export const TableControllerCell = forwardRef<
    HTMLTableCellElement,
    TableControllerCellPropsType
>(function TableControllerCell({ className, children, ...restProps }, ref) {
    const classNameComponents = useTableControllerCellClassNames(
        TABLE_CONTROLLER_CELL_CLASS_PREFIX,
        className,
    );

    const { rootProps, triggerProps, triggerIconProps } =
        useTableControllerCell(restProps);

    return (
        <TableControllerCellRoot
            {...rootProps}
            className={classNameComponents.Root}
            ref={ref}
        >
            <TableControllerCellContainer
                className={classNameComponents.Container}
            >
                <TableControllerCellTrigger
                    {...triggerProps}
                    className={classNameComponents.Trigger}
                >
                    <TableControllerCellIcon
                        {...triggerIconProps}
                        className={classNameComponents.Icon}
                    />
                </TableControllerCellTrigger>
                {children}
            </TableControllerCellContainer>
        </TableControllerCellRoot>
    );
});

TableControllerCell.defaultProps = {
    expanded: false,
};

/** prop-types are required here for run-time checks */
TableControllerCell.propTypes = {
    expanded: PropTypes.bool,
    rowId: getScalarPropType(),
    // onExpansionButtonClick: PropTypes.func,
};
