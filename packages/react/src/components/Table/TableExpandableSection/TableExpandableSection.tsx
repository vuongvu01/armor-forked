import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useTableExpandableSectionClassNames } from './utils/useTableExpandableSectionClassNames';
import { useTableExpandableSection } from './utils/useTableExpandableSection';
import {
    TableExpandableSectionRoot,
    TableExpandableSectionCell,
    TableExpandableSectionContent,
} from './style';
import { TableExpandableSectionPropsType } from './type';
import { TABLE_EXPANDABLE_SECTION_CLASS_PREFIX } from './constants';

export const TableExpandableSection: FunctionComponent<TableExpandableSectionPropsType> = forwardRef(
    function TableExpandableSection(
        { className, children, ...restProps },
        ref,
    ) {
        const theme = useComponentTheme(TABLE_EXPANDABLE_SECTION_CLASS_PREFIX);
        const classNameComponents = useTableExpandableSectionClassNames(
            TABLE_EXPANDABLE_SECTION_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            cellProps,
            contentProps,
        } = useTableExpandableSection(restProps);

        return (
            <TableExpandableSectionRoot
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
                ref={ref}
            >
                <TableExpandableSectionCell
                    {...cellProps}
                    theme={theme}
                    className={classNameComponents.Cell}
                >
                    <TableExpandableSectionContent
                        {...contentProps}
                        theme={theme}
                        className={classNameComponents.Content}
                    >
                        {children}
                    </TableExpandableSectionContent>
                </TableExpandableSectionCell>
            </TableExpandableSectionRoot>
        );
    },
);

TableExpandableSection.defaultProps = {
    expanded: false,
    enableDefaultPadding: true,
};

/** prop-types are required here for run-time checks */
TableExpandableSection.propTypes = {
    expanded: PropTypes.bool,
    offsetLeft: PropTypes.number,
};
