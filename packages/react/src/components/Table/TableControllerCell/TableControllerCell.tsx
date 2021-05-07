import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../../utils/hooks';
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
import { getScalarPropType } from '../../../utils/propTypes';

export const TableControllerCell = forwardRef<
    HTMLTableCellElement,
    TableControllerCellPropsType
>(function TableControllerCell({ className, children, ...restProps }, ref) {
    const theme = useComponentTheme(TABLE_CONTROLLER_CELL_CLASS_PREFIX);
    const classNameComponents = useTableControllerCellClassNames(
        TABLE_CONTROLLER_CELL_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        triggerProps,
        triggerIconProps,
    } = useTableControllerCell(restProps);

    return (
        <TableControllerCellRoot
            {...rootProps}
            theme={theme}
            className={classNameComponents.Root}
            ref={ref}
        >
            <TableControllerCellContainer
                theme={theme}
                className={classNameComponents.Container}
            >
                <TableControllerCellTrigger
                    {...triggerProps}
                    theme={theme}
                    className={classNameComponents.Trigger}
                >
                    <TableControllerCellIcon
                        {...triggerIconProps}
                        theme={theme}
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
