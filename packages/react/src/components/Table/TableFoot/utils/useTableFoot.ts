import { useState } from 'react';
import { TABLE_FOOT } from '../../utils/TableSectionContext';
import { TableSectionContextValueType } from '../../utils/type';

export const useTableFoot = () => {
    // cell type
    const [tableSectionContextValue] = useState<TableSectionContextValueType>({
        data: {
            section: TABLE_FOOT,
        },
    });

    return { tableSectionContextValue };
};
