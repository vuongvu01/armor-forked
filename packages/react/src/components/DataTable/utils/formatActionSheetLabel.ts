import { pluralize } from '../../../system/util/pluralize';
import { ScalarType } from '../../../type';

export const formatActionSheetLabel = (selectedRows: ScalarType[]) => {
    return selectedRows.length
        ? `${selectedRows.length} ${pluralize(
              selectedRows.length,
              'item',
              'items',
          )} selected`
        : undefined;
};
