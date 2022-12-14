import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useTableExpandableSectionClassNames } from './hooks/useTableExpandableSectionClassNames';
import { useTableExpandableSection } from './hooks/useTableExpandableSection';
import {
    TableExpandableSectionRoot,
    TableExpandableSectionCell,
    TableExpandableSectionContent,
} from './style';
import { TableExpandableSectionPropsType } from './type';
import { TABLE_EXPANDABLE_SECTION_CLASS_PREFIX } from './constants';

/**
 * # TableExpandableSection
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/21c7b5-table/b/527bb6)
 *
 * @armor-docs-component
 */
export const TableExpandableSection = forwardRef<
    HTMLTableRowElement,
    TableExpandableSectionPropsType
>(function TableExpandableSection({ className, children, ...restProps }, ref) {
    const classNameComponents = useTableExpandableSectionClassNames(
        TABLE_EXPANDABLE_SECTION_CLASS_PREFIX,
        className,
    );

    const { rootProps, cellProps, contentProps } =
        useTableExpandableSection(restProps);

    return (
        <TableExpandableSectionRoot
            {...rootProps}
            className={classNameComponents.Root}
            ref={ref}
        >
            <TableExpandableSectionCell
                {...cellProps}
                className={classNameComponents.Cell}
            >
                <TableExpandableSectionContent
                    {...contentProps}
                    className={classNameComponents.Content}
                >
                    {children}
                </TableExpandableSectionContent>
            </TableExpandableSectionCell>
        </TableExpandableSectionRoot>
    );
});

TableExpandableSection.defaultProps = {
    expanded: false,
    enableDefaultPadding: true,
};

/** prop-types are required here for run-time checks */
TableExpandableSection.propTypes = {
    expanded: PropTypes.bool,
    offsetLeft: PropTypes.number,
};

export const MemoizedTableExpandableSection = memo(TableExpandableSection);
