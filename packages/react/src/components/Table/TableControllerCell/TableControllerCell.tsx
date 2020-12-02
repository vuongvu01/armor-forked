import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../../utils/hooks';
import { useTableControllerCellClassNames } from './utils/useTableControllerCellClassNames';
import { useTableControllerCell } from './utils/useTableControllerCell';
import {
    TableControllerCellRoot,
    TableControllerCellContainer,
    TableControllerCellIcon,
} from './style';
import { IconButton } from '../../IconButton';
import { TableControllerCellPropsType } from './type';
import { TABLE_CONTROLLER_CELL_CLASS_PREFIX } from './constants';
import { getScalarPropType } from '../../../utils/propTypes';

export const TableControllerCell: FunctionComponent<TableControllerCellPropsType> = forwardRef(
    function TableControllerCell({ className, children, ...restProps }, ref) {
        const theme = useComponentTheme(TABLE_CONTROLLER_CELL_CLASS_PREFIX);
        const classNameComponents = useTableControllerCellClassNames(
            TABLE_CONTROLLER_CELL_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            iconButtonProps,
            iconButtonIconProps,
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
                    <IconButton
                        {...iconButtonProps}
                        theme={theme}
                        className={classNameComponents.Controller}
                    >
                        <TableControllerCellIcon
                            {...iconButtonIconProps}
                            theme={theme}
                            className={classNameComponents.Icon}
                        />
                    </IconButton>
                    {children}
                </TableControllerCellContainer>
            </TableControllerCellRoot>
        );
    },
);

TableControllerCell.defaultProps = {
    expanded: false,
};

/** prop-types are required here for run-time checks */
TableControllerCell.propTypes = {
    expanded: PropTypes.bool,
    rowId: getScalarPropType(),
    onExpansionButtonClick: PropTypes.func,
};
